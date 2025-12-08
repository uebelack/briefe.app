import fs from 'fs';
import path from 'path';

const languages = ['en','de','fr','it','es','nl','pt'];

languages.forEach((lang) => {
  const data = JSON.parse(fs.readFileSync(`./data/templates/${lang}.json`, 'utf8'));
  data.forEach((tpl) => {
    const slug = tpl.uuid.toLowerCase().replace(/_/g, '-');
    const dir = path.join('app', lang, 'templates', slug);
    fs.mkdirSync(dir, { recursive: true });
    const text = tpl.text.replace(/\\n/g, '\n\n');
    const mdx = `export const metadata = {\n  title: "${tpl.subject.replace(/"/g, '\\"')} | Letter App",\n};\n\n# ${tpl.subject.replace(/"/g, '\\"')}\n\n${text}\n`;
    fs.writeFileSync(path.join(dir, 'page.mdx'), mdx);
  });
});
