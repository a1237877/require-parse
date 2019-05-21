// http
const http = require('http');
const url = require('url');
const qs = require('querystring')

http.createServer((req,res)=>{
    //自己的服务器
    if(req.url == '/favicon.ico')return;
    const reqObj = url.parse(req.url);
    //get 请求 在query 属性
    const queryObj = qs.parse(reqObj.query);
    console.log('正在请求',queryObj);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      ${JSON.stringify(queryObj)}
    </body>
    </html>
    `);
}).listen(3000,()=>{
    console.log('服务正在 3000 端口运行');
})