i mport fetch from 'node-fetch';

export default async (req, res) => {
  const resp = await fetch('https://studyuk.fun/goal/');
  let html = await resp.text();

  html = html
    .replace(/studyuk\.fun/gi, 'nakoda-bhairav-clone.vercel.app')
    .replace(/@SDV_BOTX/g, '@MockManager')
    .replace(/https?:\/\/t\\.me\/[^"']+/g, 'https://t.me/+rc5Psv_S2VJkMGM1')
    .replace(/StudyUK/gi, 'NAKODA BHAIRAV');

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.send(html);
};
