/**
 * 아이고ㅓ 졸려
 */

//const http = require(b.js);
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
});

/*	외부 함수
 * 	add, sub, multi, devide 함수를 생성하여 그 함수를 부라와서 실행하ㅡㄴ 소스 구현
 *  (인자는 두 개씩) 
 *  외부함수의 이름: calc.js
 *  실행하는 함수는 calcTest.js
 * 
 * 
 * 
 */