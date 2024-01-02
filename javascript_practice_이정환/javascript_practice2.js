

// 이정환이 한입 리액트 강의 Javascript 정리본 이므니다.

// 1~2 강) 
console.log('hello');

let age = 32; console.log(age);

/* 
변수명은 기호와 사용 불가능, 단 언더바만 사용 가능
숫자를 먼저 붙이면 안됨 ex) 3dragon - ERROR!
내장함수 이름이나 예약어 지정 안됨 ex) let if - ERROR! 

var와 달리 let은 변수 중복하여 선언 하는 것 허용 X
변수 선언시 var 보다는 let을 선언할 것

const : 변하지 않는 값, 재선언 안됨
const age = 25; 후 age = 23; Error!
*/

/* 
3강) 자료형
자스 자료형 :
원시 - '한번에 하나 값 고정' 된 저장 공간 let number = 12;
비원시 - '한번에 여러 개 값' 가질수 있음, 여러 개의 고정되지 않는 동적 저장 공간 
                                        // let array = [1,2,3,4];  
*/
/* 템플릿 리터럴 방식 선언 - 중요*/
let name2 = "안철수";                                        
let name3 = "이건희";
                     
console.log(`V3 : ${name2}` ); // 백틱(`)으로 선언
console.log(`삼성 : ${name3}` );                     

//boolean 형
//undefined 형

let numA = 12;
let numB = "2"; //문자의 숫자 자동해석 - 묵시적 형 변환

console.log(numA + numB); 
// * 하면 24 (묵시적 형 변환)
// + 하면 12+2 가 되어 122가 됨 (명시적 형 변환) 
// 만약 14가 되려면, 문자열 숫자 변환 함수 parseInt를 사용 할 것   

   // 4강) 연산자 
   // 대입 연산자 - = 
   // 산술 연산자 - +, -,  *, /, % 
   // 연결 연산자 - "1" + "2"  = 3 이 아니라 12, 문자열을 이어 줌
   // 복합 연산자 - += , -= *= /=
   // 증감 연산자 - a++ , ++a
   let a = 10;
   console.log(a++); // 이러면 이거 훑어내고 1이 올라감 - '후위' 연산
   console.log(++a); // 1부터 올라가고 훑어냄 - '전위' 연산

   // 논리 연산자 - ! (boolean 값을 바꿔줌) , &&(and) , ||(or) 

   // 비교 연산자 
   let compareA = 1 == "1";
   console.log(compareA); //true? 왜? ==를 쓰면 비교 연산이 값만 비교하게 처리

   let compareB = 2 === "2";
   console.log(compareB); 
   // ★ false  === '자료형' 까지 전부 비교 하기 떄문에 false 가 판별

   // 대소 비교 연산자 
   // typeof 함수 - 변수의 자료형 형태 공유
   let b = 7; b = "7";
   console.log(typeof b); // String 나옴, 마지막으로 선언한 형태가 string!

   // null 병합 연산자 - ??
   let c; //undifined! null 아님,

   c = c ?? 10;

   console.log(c); // 10

   // 5강) 조건문
   let f =3;

   if(f>=7) {
      console.log("7 이상");
   } else if (a>=5) {
      console.log("5 이상");
   } else {
      console.log("5 이하");
   }

   let country = "ko";

   // if(country === "ko") {
   //    console.log("한국");
   // } else if (country === "us") {
   //    console.log("미국");
   // } else if (country === "jp") {
   //    console.log("일본");
   // } else if (country === "cn") {
   //    console.log("중국");
   // } else {
   //    console.log("미 분류")
   // }

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

// 나머지 정리 본 - 함수 

let width = 10; let height = 20;
let area = width * height;
console.log(area);

/*
    함수 선언식 - 함수 생성!
    function getArea(){
    1) let width = 10; let height = 20;
    2) let area = width * height;
    3) console.log(area);
    }
   
   함수 호출, 저걸 호출하면 getArea 함수 중괄호 안의 동작이 시작. 1) -> 2) -> 3) 순서대로 실행

   getArea();

   함수의 '값' 을 전달 시 '매개변수' 라는 것을 사용 
   소괄호 '()' 로 전달, 매개변수를 전달하고 받는 과정
   
   // 여기 함수에서 '매개변수'는 width, height 가 된다.
   function getArea (width, height) {
    let area = width * height;
    console.log(area);
   }

   area(함수의 결과 값) 를 console로 직접 출력하려는게 아닌,
   변수 같은 곳에 할당해서 받아 보고 싶으면
   
   console.log (area) -> return area 로 바꾸고 실행하면 된다 말그대로 area를 반환하라 토해내라 이 뜻,

   function getArea (width, height) {
    let area = width * height;
    return area;
   }

   let total = getArea (100,200); <- return area 값을 total 변수에다 저.장.
   console.log(total);

   ★ 함수 내부에 선언한 변수와 상수는 그 함수 외부에서 접근 할수가 없음!
   ★ 여기서 'area' 는 이 '지역' 을 벗어날 수 없다 라는 의미로 - '지역 변수' !!!

   ★ 함수 외부에서 선언한 변수는 함수 내부에 접근이 가능 - '전역 변수'  또는 '글로벌 변수' 
   ★ 여기서 'count' 는 getArea 함수 내부에 접근 가능하여 count값이 콘솔에 찍힘!
   
   let count = 1;

   function getArea (width, height) {
    let area = width * height;
    console.log(count);
    return area;
   }

   // 함수표현식 & 화살표 함수 정리 : (함수의 표현식 vs 선언식) 

    // 함수를 값에 담을 때는 함수 이름을 굳이 명시 안 해도 됨 let hello = function 이름()

    let hello = function () {
        return "문송합니다";
    } -> 함수 표현식 - 함수를 변수처럼 값 담아 선언 즉, 무명 함수 이름 없도록 만든 뒤 변수 담아 활용

    function hello () {
        return "7% 못해 죄송합니다";
    } -> 함수 선언식

    console.log(hello); // 이 변수는 함수를 담고 있음,

    const helloText = hello(); -> hello 함수 호출 하듯이 가져와도 됨
    console.log(helloText); -> 위의 결과 값과 동일하게 - 문송합니다. 가 나옴


    ★ '함수 선언식'과 '함수 표현식'의 차이점 : '함수 선언식'은 "Hoisting"이 가능,
    -> Hoisting 이란? 
    -> '함수 선언식'으로 만들어진 함수들은 프로그램 실행 시 코드의 최상단으로 자동으로 끌어 올려짐
       ex) Line 3에 함수 호출 했는데 함수 선언식은 Line 13에 있을때, 
           Line 13에 선언한 함수는 자동으로 호이스팅 되어 끌어 올려 정상적으로 실행 가능
      
      '함수 표현식'은 Hoisting 이 이루어지지 않음, 함수가 직접적으로 선언되지 전까진 접근이 불가능함!
      사용 하려면 변수담아 둔 뒤에 밑에서부터 사용


    함수 표현식의 또 다른 방법 - 화살표 함수 ('=>')
    
    ★ 기존 표현식 방법                        화살표 함수 표현식 
    let hello = function () {                 let hello = () => {
      return "문송합니다";          =>           return "문송합니다";                  
    }                                         }                
                                              function 지우고 () 뒤에 '=>'' 기입

    ★ 콜백함수(Callback Function) 
    -> 어떤 다른 함수의 매개변수로 함수를 넘겨주는 행위
    
    function checkMood (mood) {
        if(mood === "good") {
            sing(); 
        } else {
            cry(); 
        }
    }

    function cry () {console.log("야아 기분좋다아~");}
    function sing() {console.log("여긴 XX시티이~");}
    function dance() {console.log("흔들어라잇!");}

    checkMood ("good"); // sing 함수 발동 - 콘솔에 여긴 XX시티이~ 가 노출
    checkMood ("sad");  // good 이 아니므로 else 가서 cry함수 발동, 콘솔에 야아 기분좋다가 노출

    ★ Callback 함수
    function checkMood (mood, goodCallback, badCallback) {
        if(mood === "good") {
           goodCallback(); -> 결과적으로 sing 함수 노출, 
        } else {
           badCallback(); -> cry 함수 노출,
        }
    }

    function cry () {console.log("야아 기분좋다아~");}
    function sing() {console.log("여긴 XX시티이~");}
    function dance() {console.log("흔들어라잇!");}

    checkMood ("sad", sing, cry); 
    // checkMood 함수에서 badCallback 함수는 cry라는 함수를 호출...


    ★ '함수 표현식' 의 개념을 이용,  
       cry와 sing 이라는 함수 자체를 
       각각 goodCallback 과 badCallback 이라는 매개변수로 값을 담고 
       sad에 해당하는 badCallback 의 매개변수인 cry 함수를 호출

    함수의 파라미터로 함수 자체를 넘기는 행위!


*/ 

