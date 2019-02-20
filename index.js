var http = require('http');
http.createServer((request, response) => {

    // 发送 HTTP 头部
    // HTTP 状态码： 200 ：ok
    // 内容类型 text/plain
    response.writeHeader('200', {'Content-type': 'text/plain'});

    // 发送相应数据 "hello world"
    response.end("hello world");

}).listen(8080);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8080/');
