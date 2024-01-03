// 나머지 정리 본 - 함수 

let width = 10; let height = 20;
let area = width * height;
console.log(area);

// 함수 선언식 - 함수 생성 및 구동 순서
function getArea(){
   let width = 10; let height = 20; // 1)
   let area = width * height;       // 2) 
   console.log(area);               // 3)
}

   /* 
      getArea(); - 함수 호출, 저걸 호출하면 getArea 함수 중괄호 안의 동작이 시작. 1) -> 2) -> 3) 순서대로 실행

      함수의 '값' 을 전달 시 '매개변수' 라는 것을 사용 
      소괄호 '()' 로 전달, 매개변수를 전달하고 받는 과정

      현재 밑의 함수에서 '매개변수'는 width, height 가 된다. 예를 들면
   */   

   function getArea (width, height) {
      let area = width * height;
      console.log(area);
   }

   /*
     area(함수의 결과 값) 를 console로 직접 출력하려는게 아닌 변수 같은 곳에 할당해서 받아 보고 싶으면
     console.log (area) -> return area 로 바꾸고 실행하면 된다. 말그대로 area를 반환하라는 뜻 예를 들면, 
   */

      function getArea (width, height) {
        let area = width * height;
        return area;
      }
   
      let total = getArea (100,200);   // <- return area 값을 total 변수에다 저.장.
      console.log(total);              // area에 파라미타로 준 100과 200을 곱한, 20000이 담기고 노출


   /*
      전역 변수 , 지역 변수 정리
      ★ 함수 내부에 선언한 변수와 상수는 그 함수 외부에서 접근 할수가 없음!
      ★ 여기서 'area' 는 이 '지역' 을 벗어날 수 없다 라는 의미로 - '지역 변수' !!!

      ★ 함수 외부에서 선언한 변수는 함수 내부에 접근이 가능 - '전역 변수'  또는 '글로벌 변수' 
      ★ 여기서 'count' 는 getArea 함수 내부에 접근 가능하여 count값이 콘솔에 찍힘!
   */

   let count = 1; // 전역 변수

   function getArea (width, height) {
     let area = width * height; // 지역 변수 , 함수 내부에만 접근 가능
     console.log(count);
     return area;
   }

   /* 
      함수표현식 , 화살표 함수의 차이점과 정리 (함수의 '표현' 식, 화살표 함수는 함수의 '정의' 식)
      함수를 값에 담을 때는 함수 이름을 굳이 명시 안 해도 됨 let hello = function 이름(),  
      밑의 예시 참조,
   */
   
     let hello = function () {
         return "안녕하세요";
     } // -> 함수 표현식 - 함수를 변수처럼 값 담아 선언 즉, 무명 함수 이름 없도록 만든 뒤 변수 담아 활용도 가능
 
     function hello () {
         return "안녕하세요";
     } // -> 함수 선언식
   
     console.log(hello); // 이 변수는 무명 함수를 담고 있고 return으로 '안녕하세요' 를 반환함,

     const helloText = hello();   // hello 함수 호출, 변수에 담아 가져와도 됨
     console.log(helloText);      // 위의 결과 값과 동일하게 - 안녕하세요 가 나옴

     /*
         ★ '함수 선언식'과 '함수 표현식'의 차이점 : '함수 선언식'은 "Hoisting"이 가능,
         -> 호이스팅(Hoisting) 이란? 
         -> '함수 선언식'으로 만들어진 함수들은 프로그램 실행 시 코드의 최상단으로 자동으로 끌어 올려짐
            ex) Line 3에 함수 호출 했는데 함수 선언식은 Line 13에 있을때, 
                Line 13에 선언한 함수는 자동으로 호이스팅 되어 끌어 올려 정상적으로 실행 가능
           
          반면, '함수 표현식'은 Hoisting 이 이루어지지 않음, 함수가 직접적으로 선언되기 전까진 접근이 불가능함!
          사용 하려면 변수에 담아 둔 뒤에 밑에서부터 사용
      
         함수 표현식의 또 다른 방법 - 화살표 함수 ('=>')
      
         ★ 기존 표현식 방법                        화살표 함수 표현식 
         let hello = function () {                 let hello = () => {
           return "안녕하세요";          =>           return "안녕하세요";                  
         }                                         }     

                                                   function 지우고 () 뒤에 '=>'' 기입
      */
   /*             
    ★ 콜백함수(Callback Function) ,  어떤 다른 함수의 매개변수로 함수를 넘겨주는 행위
   */  
   
    function checkMood (mood) {
        if(mood === "good") {
            sing(); 
        } else {
            cry(); 
        }
    }

    function cry () {console.log("크라이");}
    function sing() {console.log("노래");}
    function dance() {console.log("댄스");}

    checkMood ("good"); // sing 함수 발동 - 콘솔에 여긴 노래 가 노출
    checkMood ("sad");  // good 이 아니므로 else 가서 cry함수 발동, 콘솔에 크라이가 노출

    // ★ Callback 함수, 어떤 다른 함수의 매개변수로 함수를 넘겨주는 행위라고 했음 밑의 함수 참고, 

    function checkMood (mood, goodCallback, badCallback) {
        if(mood === "good") {
           goodCallback();    // -> checkMood 함수의 매개변수로 goodCallback 함수를 넘겨줌, 
        } else {
           badCallback();     // -> checkMood 함수의 매개변수로 badCallback 함수를 넘겨줌, 
        }
    }

    function cry () {console.log("크라이");}
    function sing() {console.log("노래");}
    function dance() {console.log("댄스");}

    checkMood ("sad", sing, cry); 
    // checkMood 함수에서 첫번째 일반 파라미터, mood를 체크, 현재 sad라, badCallback 함수는 cry라는 함수를 호출...

    /*
      ★ '함수 표현식' 의 개념을 이용, cry와 sing 이라는 함수 자체를 
       각각 goodCallback 과 badCallback 이라는 매개변수로 값을 담고 
       sad에 해당하는 badCallback 의 매개변수인 cry 함수를 호출

       함수의 파라미터로 함수 자체를 넘기는 행위!
    */ 

