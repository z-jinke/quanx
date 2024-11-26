const { body } = $response;
const { countryCode,query:ip } = JSON.parse(body);

const title= ` `;
const subtitle = `IP:${ip} 地区${countryCode}`;

$done({ title,subtitle,ip });
