/**
 * 4시~
 */

//var os = require('os');

//console.log(os.cpus());

//console.log(os.freemem());

//var hostname = os.hostname();
//console.log('hostname: ' + hostname);


/////////////////////////////////////////////


// filewriting
//비동기 방식의 파일쓰기		----> Node는 비동기방식이 기본!
var fs = require('fs');

var data = '티아마데미의 등대, John CENAAAAAA';
var fname = 'johncena.txt';

//fs.writeFile(fname, data, function(err){
//	if(err != null){	//에러가 넘어왔다는 뜻
//		console.log('쓰기 실패' + err);
//		return;	//보편적으로 오류났으면 할일없으니 걍 리턴시킨다
//	}
//	console.log('쓰기 성공!');
//});
//
//console.log('john cena');


////// 동기방식으루다가간다!


//fs.writeFileSync(fname, data);
//console.log('john cena');



///////////////////////////////////////////////////////////////


//읽기
var newData = 'abcd';
fs.readFile(fname, (err, data) => {
	//다 읽으면 얘가 실행된다
	if(err != null){
		console.log('읽기 실패' + err);
		return;
	}
	console.log('읽기 성공');
	newData = data;
	console.log('inside readfile()' + newData);
	
	
	//다읽고 클라한테 쏴주는부분이 여깄어야돼!!!!!
	//node.js의 처리흐름을 이해해야지
	
});

console.log('out of readfile' + newData);

//js에선 비동기방식이 기본이라 위에서 write하고
//밑에서 read할떄 에러가 날 수 있음이야!!
//callback함수 안에서 호출해야 작업이완벽히 완료된 후
//안정적으로 뭔가 된다(무조건 위에서 아래로 흐르는게아니다)









