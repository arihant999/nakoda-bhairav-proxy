const https = require('https');

export default function handler(req, res) {
  https.get('https://studyuk.fun/goal/', (response) => {
    let data = '';

    response.on('data', chunk => { data += chunk; });
    response.on('end', () => {
      let html = data
        .replace(/studyuk\.fun/g, 'nakoda-bhairav-clone.vercel.app')
        .replace(/@SDV_BOTX/g, '@MockManager')
        .replace(/https:\/\/t\.me\/[^"']+/g, 'https://t.me/+rc5Psv_S2VJkMGM1')
        .replace(/StudyUK/gi, 'NAKODA BHAIRAV');

      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
      res.status(200).end(html);
    });

  }).on('error', err => {
    console.error('Fetch failed:', err);
    res.status(500).end('Proxy error!');
  });
}
