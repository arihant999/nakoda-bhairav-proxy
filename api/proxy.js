// /api/proxy.js

export default async function handler(req, res) {
  try {
    const targetUrl = 'https://studyuk.fun/goal/';
    const response = await fetch(targetUrl);
    let html = await response.text();

    // Replace all StudyUK branding with your info
    html = html.replace(/https:\/\/t\.me\/[^\s"'<>]+/g, 'https://t.me/MockManager');
    html = html.replace(/studyuk\.fun/g, 'nakoda-bhairav-clone.vercel.app');
    html = html.replace(/StudyUK/gi, 'NAKODA BHAIRAV');

    // ✅ Set headers properly for UTF-8 support and caching
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

    // ✅ Return the final HTML
    res.status(200).end(html);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).send('Proxy failed');
  }
}
