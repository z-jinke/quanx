var body = $response.body;

var obj = JSON.parse(body);
var ip = obj.query;

var title = ' '; 
var subtitle = 'IP地址:' + ip;

$done({ title, subtitle, ip });
