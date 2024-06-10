'use client';

import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import LazyLoad from 'react-lazyload';
import { useCookieConsent } from './CookieConsentProvider';
import Form from './Form';
import InputText from './InputText';
import Textarea from './Textarea';
import Checkbox from './Checkbox';

import Button from './Button';

export default function ContactForm({
  locale,
  emailError,
  subjectError,
  messageError,
  privacyError,
  cookie,
  emailPlaceholder,
  subjectPlaceholder,
  messagePlaceholder,
  privacy1,
  privacy2,
  privacyLink,
  submit,
  success,
  error,
}) {
  const cookiesAccepted = useCookieConsent();

  const [state, setState] = useState('initial');
  const [captcha, setCaptcha] = useState(undefined);

  const language = locale?.startsWith('de') ? 'de' : 'en';

  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email(emailError)
      .required(emailError),
    subject: Yup.string()
      .required(subjectError),
    message: Yup.string()
      .required(messageError),
    privacy: Yup.bool().oneOf([true], privacyError),
  });

  const handleOnCaptchaVerify = useCallback((token) => {
    setCaptcha(token);
  }, []);

  const handleOnSubmit = async (values) => {
    try {
      await axios.post('/api/contact', { ...values, captcha, language });
      setState('submitted');
    } catch {
      setState('error');
    }
  };

  return (
    <LazyLoad offset={100}>
      { cookiesAccepted ? (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
          <GoogleReCaptcha onVerify={handleOnCaptchaVerify} />
        </GoogleReCaptchaProvider>
      ) : (<p className="mb-5">{cookie}</p>)}
      { state === 'initial' && (
        <Formik
          initialValues={{
            email: '', subject: '', message: '', captcha: '', privacy: false,
          }}
          validationSchema={ContactSchema}
          onSubmit={handleOnSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputText
                name="email"
                placeholder={emailPlaceholder}
                disabled={isSubmitting || !captcha}
              />
              <InputText
                name="subject"
                placeholder={subjectPlaceholder}
                disabled={isSubmitting || !captcha}
              />
              <Textarea
                name="message"
                placeholder={messagePlaceholder}
                disabled={isSubmitting || !captcha}
              />
              <Checkbox
                name="privacy"
                disabled={isSubmitting || !captcha}
              >
                {privacy1}
                {' '}
                <a href={privacyLink} className="underline" aria-label="Privacy">
                  {privacy2}
                </a>
              </Checkbox>
              <Button id="contact-form-button" type="submit" disabled={isSubmitting || !captcha}>
                {submit}
              </Button>
            </Form>
          )}
        </Formik>
      )}
      { state === 'submitted' && (
        <p className="contact-form-success">{success}</p>
      )}
      { state === 'error' && (
        <p className="contact-form-error">{error}</p>
      )}

    </LazyLoad>
  );
}
