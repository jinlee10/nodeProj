/**
 * 	
 */
var pri = function(){		//은닉
	console.log('내부함수');
}

//함수는 여기 저장댐
exports.add = function( a, b){
	pri();
	return a + b;
};
//요 객체가 

var num = 100;
exports.MAX = 100;