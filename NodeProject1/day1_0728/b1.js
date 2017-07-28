/**
 *  3시~
 */

//var calc = require('./b2.js');	//객체하나만듦

//require('b2.js').add();	//b2.js를불러온다음 그것의 add()메소드를 호출한다

var calc = require('./b2.js');

var MAX = 100;

//var add = function ( a, b ){
//	return a + b;
//};
//
//calc.add = add;		//property 추가한것 (함수가 객체의 메소드화)
//console.log(add(3, 4));			//그냥 호출하거나
console.log(calc.add(3, 4));	//객체 메솓화시켜서 부르거나
//require하고나면 내부 함수 0ㅂ0


//이걸 여기만이 아니라 여러곳에서 쓰고 싶어!




console.log(calc.MAX);

exports.MAX = 100;	//얘는 public 같은 의미
console.log(calc.MAX);	//얘는 priovate같은 느낌


