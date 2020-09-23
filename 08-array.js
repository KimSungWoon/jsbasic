// // 배열의 생성 : 객체 이용생성
// const a1 = new Array(10); //10개짜리 빈배열
// const a2 = new Array(); // 빈배열
// const a3 = new Array(1, "ABC", true); //형식을 가리지 않음

// //property: .length
// console.log(a1.length,a2.length,a3.length);

// // 리터럴 생성 : [] => 추천
// const a4 = []; // 빈 배열
// const colors = ["red","green","blue"];

// console.log(typeof a4, typeof colors);

// // 갹체도 배열처럼 접근할 수 있다.
// const person ={
//     name:"홍길동",
//     job:"도적",
// };
// console.log(person['name'],person['job']);

// // 인덱스를 엄격히 체크하지 않는다.
// const arr = [ ]; // 빈 배열
// // console.log(arr , "length =", arr.length);
// arr[10] = "인덱스 범위밖에 입력";
// console.log(arr , "length = ", arr.length);

// // 메서드들
// // 배열 합치기 : concat
// const veges = ["배추","무","쪽파"];
// const sources = ["소금","고춧가루","새우젓"];
// const ingrs = veges.concat(sources);
// console.log("김장 재료:",ingrs);

// // 배열 요소 연결 : join
// console.log("목록 : ",ingrs.join(", "));

// // 자료의 입출력
// // push : 맨 마지막에 요소 추가
// // pop : 맨 마지막에 요소 추출
// /// shift : 맨 앞 요소 추출

// // push + pop -< Stack처럼 사용
// let fruits = ["Banana","Orange","Apple","Mango"];
// console.log("STACK",fruits);
// fruits.push("Kiwi");
// console.log("STACK:",fruits);
// console.log("POP:",fruits.pop());
// console.log("POP:",fruits.pop());
// console.log("STACK:",fruits);


// //push + shift => Queue
// console.log("QUEUE:",fruits);
// console.log("SHIFR:", fruits.shift());
// console.log("SHIFR:", fruits.shift());
// console.log("QUEUE", fruits);

// fruits = ["Banana","Orange","Apple","Mango"];
// console.log("원본:", fruits);
// // 반전 " reverse"
// fruits.reverse();
// console.log("REVERSE:", fruits);


// // 잘라내기 : slice 
// let slices = fruits.slices(1,3);
// console.log("SLICE:",slices);

// // 정렬 : sort
// console.log("원본 : ",fruits);
// fruits.sort();
// console.log("SORT:", fruits);
// // 사용자 정의 기준으로 소트 :
// fruits.sort(function(a,b){

//     return a<b;
// });
// console.log("CUSTOM SORT:" ,fruits);


// //문자열 분리 : split ( 특정 구문자를 기준으로 분리 -> 배열)
// const str = "JavaScript is something strange than other lauguage"
// let words = str.toUpperCase().split(" "); // 공백기준 분리


// console.log(words);

// for(let i = 0; i < words.length; i++){
//     console.log("WORD:", words[i]);
//}

//splice
// 배열의 추출, 삽입 , 삭제를 한번에 할 수 있는 메서드
fruits = ["Banana","Orange","Apple","Mango"];

//인수가 1개 -> 인덱스부터 끝까지 추출
//console.log("원본:",fruits);
//console.log("SPLICE:",fruits.splice(2));
//console.log("SPLICE:", fruits.splice(1,2));

//인수가 3개 이상 -< 인덱스 부터 갯수 지정 추출
console.log("SPLICE:",fruits.splice(1,2,"Kiwi","Orange"));
console.log("원본:",fruits);