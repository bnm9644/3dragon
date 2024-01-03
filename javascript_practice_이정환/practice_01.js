
// ★ HTML 태그 접근 법 
   document.getElementByid(id);
   document.getElementsByName(name);
   document.getElementsByClassName(className);
   document.querySelector("css 선택자");

// 1~2 강) 
console.log('hello'); // hello 출력

let age = 32;       console.log(age); // 32 출력

/* 
    변수명은 기호와 사용 불가능, 단 언더바는 예외 적으로 사용 가능
    숫자를 먼저 붙이면 안됨 ex) 3dragon - ERROR! , 내장함수 이름이나 예약어 지정 안됨 ex) let if - ERROR! 

    var와 달리 let은 변수 중복하여 선언 하는 것 허용 X, 변수 선언시 var -> 'let' 을 선언할 것

   ★ const : 변하지 않는 값, 재선언 안됨, const age = 25; 후 age = 23; Error!
*/

/* 
    3강) 자료형
    원시 - '한번에 하나 값 고정' 된 저장 공간 let number = 12;
    비원시 - '한번에 여러 개 값' 가질수 있음, 여러 개의 고정되지 않는 동적 저장 공간 
    // let array = [1,2,3,4];  
*/

// ★ 템플릿 리터럴 방식 선언 - 중요
let name2 = "양준혁";                                        
let name3 = "홍준표";
                     
console.log(`삼성 : ${name2}` ); // ★ 백틱(`)으로 선언
console.log(`민선 : ${name3}` );                     

//boolean (T/F), undefined(값 없이 선언만 함) 

let numA = 12;
let numB = "2"; // 문자의 숫자 자동해석 - 묵시적 형 변환

console.log(numA + numB); 
/* 
    * 하면 24 ('묵'시적 형 변환) 가 되고  
    + 하면 12+2 가 되어 122가 됨 ('명'시적 형 변환) 

    -> 만약 14가 되려면, 문자열 숫자 변환 함수 parseInt를 사용 할 것   
*/

/* 
    4강) 연산자
     
    대입 연산자 - = , 산술 연산자 - +, -,  *, /, % 
    연결 연산자 - "1" + "2"  = 3 이 아니라 12, 문자열을 이어 줌 , 복합 연산자 - += , -= *= /=
    증감 연산자 - a++ , ++a
*/ 

   // 그 중, 증감 연산자는 개념이 헷갈려 따로 정리. 
   let a = 10;
   console.log(a++); // 이러면 이거 훑어내고 1이 올라감 - '후위' 연산
   console.log(++a); // 1부터 올라가고 훑어냄 - '전위' 연산

   // 논리 연산자 - ! (boolean 값을 바꿔줌) , &&(and) , ||(or) 

   // 비교 연산자 
   let compareA = 1 == "1";     console.log(compareA); //true? 왜? ==를 쓰면 비교 연산이 값만 비교하게 처리

   let compareB = 2 === "2";    console.log(compareB); 
   // ★ false  === '자료형' 까지 전부 비교 하기 떄문에 false 가 판별

   // 대소 비교 연산자 , < > 등등

   // ★ typeof 선언문 - 변수의 자료형 형태 공유, 리액트에서도 종종 쓰임!
   let b = 7; b = "7";
   console.log(typeof b); // String 나옴, 마지막으로 선언한 형태가 string!

   // null 병합 연산자 - ??
   let c; //undifined,  ★ null이 아니다 주의할 것!

   c = c ?? 10;   console.log(c); // 10

   // 5강) 조건문 
   
   //if - else if
   let f =3;

   if(f>=7) {
      console.log("7 이상");
   } else if (f>=5) {
      console.log("5 이상");
   } else {
      console.log("5 이하");
   }


   // switch 
   let country = "ko";

   switch (country) {
      case "ko" :
         console.log ("한국");
         break;

      case "us" :
         console.log ("미국");
         break;
         
      case "jp" :
         console.log ("일본");
         break;

      case "cn" :
         console.log ("중국");
         break;

      default :
         console.log ("미 분류");
         break;
   }
 
