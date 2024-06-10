/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import Mailgun from 'mailgun.js';
import FormData from 'form-data';
import axios from 'axios';
import * as Yup from 'yup';
import { NextResponse, Response } from 'next/server';

Yup.addMethod(Yup.string, 'captcha', function captcha() {
  return this.test('captcha', 'Captcha validation failed', async (value) => {
    const data = new FormData();
    data.append('secret', process.env.RECAPTCHA_SECRET);
    data.append('response', value);
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', data, { headers: data.getHeaders() });
    return response.data.success;
  });
});

const messageSchema = Yup.object({
  email: Yup.string().email().required(),
  subject: Yup.string().required(),
  message: Yup.string().required(),
  language: Yup.string().required(),
  captcha: (Yup.string().required()).captcha(),
  privacy: Yup.bool().oneOf([true]),
});

export async function POST(request) {
  const message = await request.json();
  try {
    await messageSchema.validate(message);
    const mailgun = new Mailgun(FormData);
    await mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY })
      .messages.create('mg.codecowboys.io', {
        from: message.language === 'de' ? 'mailer@briefe.app' : 'mailer@letter-app.com',
        to: message.language === 'de' ? ['support@briefe.app'] : ['support@letter-app.com'],
        'h:Reply-To': message.email,
        subject: message.subject,
        text: message.message,
      });
    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    if (error.errors) {
      return NextResponse.json({ error: 'validation failed', causes: error.errors }, { status: 400 });
    }
    console.error(error);
    return NextResponse.json({ error: 'unknown error' }, { status: 400 });
  }
}
