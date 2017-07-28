/**
 * 	170728_node.js 1일차
 */


console.log('Hello, World!');
var name = 'JOHN CENAAAAAA';
var age = 30;
var sex = true;
//console.log('이름: ' + name); //대신
//console.log('이름: %s, 나이: %d, 성별: %b', name, age, sex);

//위에거 안나오니까 템플릿문자루다가 쓰자
console.log(`이름: ${name}, 나이: ${age}, 성별: ${sex}`);

var Person = {
	name : 'John Cena',
	age : 45,
	address : '서울시 은평구'
};

console.log(Person);


//////////////////////////////////////////
console.time('sTime');
var sum = 0;

for(var i = 0; i < 10000; i++){
	sum += i;
}
console.log(`sum: ${sum}`);
console.timeEnd('sTime');

console.log('fileName : ' + __filename);
console.log('dirname : ' + __dirname);

// ^ f11: 실행이아니라 방금작업 다시실행이라는 표현이 더 옳다











