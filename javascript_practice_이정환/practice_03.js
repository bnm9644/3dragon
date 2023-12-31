// 이정환이 한입 리액트 강의 Javascript 정리본,  객체 (비원시 타입에 해당)

/* 객체 만드는 방법 */

// 1) 객체 생성자 (new)
let perso = new Object(); // new 라는 키워드가 붙으면, 뒤에 있는 Object 객체 생성 
// 현재, perso 라는 Object 객체 생성

// 2) 중괄호로 인한 객체 생성 - 객체 리터럴 방식, 예를 들면

   /*
      주의할 점  
      - 중괄호 내부 : 객체가 저장하고 싶거나 갖고 있을 데이터를 넣어주면 됨.  
    - 여러 가지 데이터를 동시에 가질 수 있는 비 원시형 자료형
    - 데이터 넣을 땐 무조건 Key : Value 방식으로 넣어야 함
    - 자료형이 다른 프로퍼티를 저장해도 상관 없음
    - ★ 단 Key 부분에는 항상 문자열만 들어가야 함. '중복' 시 가장 뒤에 선언한 것이 나옴!! 주의!

    - 값을 꺼내고 싶을때는 2가지 방법이 있는데
      
      첫번째,
    - . 을 사용, 예를 들어 person.Key2 이런 식으로 가져오면 되고 - '점 표기법' 이라 함, Value 값인 123이 나옴 단, 
      없는 프로퍼티 키 불러올 시는 undifined 가 뜬다.
      
      두번째, 
    - [] 를 사용한다 하여 '괄호 표기법', ★ 단 괄호 안 Property(속성)은 무조건 문자열이 들어가야 함
    
    */ 

   let person = {
      Key : "Value",    // '프로퍼티 (Property) - 속성' or 객체 프로퍼티 라고 부름! 
      Key2 : 123,       //  person이라는 객체가 어떤 속성을 가지고 있는가, 가지고 있는 데이터
      Key3 : true,      // boolean
      Key4 : undifined, 
      Key5 : [1,2],        // 배열(Array)
      Key6 : function() {} // 함수도 가능
    };

    console.log (person.Key2);  // 123 출력, 점 표기법
    console.log (person[key3]); // true 출력, 괄호 표기법
    console.log (person[key7]); // undifined

   // getPropertyValue 함수는 괄호표기법 으로 return값을 줘 사용할수 있다.
    let person2 = {
        name : "강민영",
        age : 32
    };

    getPropertyValue("name"); // 강민영
    getPropertyValue("age");  // 32
    
    function getPropertyValue(key) {
       return person2[key]; 
    }

/*
   동적인 파라미터를 전달받는 상황이나, 
   키를 꺼내야 하는 상황에서 키가 고정이 되어 있지 않은 상황인 경우 사용 용이
    - 속성의 추가 , 수정은 대입 연산자(=) 이용하여 그냥 다른 값 주면 된다...     
 */ 

   // 현재 person3의 Object는 name과 age 속성 밖에 존재 하지 않음
   let person3 = {
      name : "강민영", 
      age : 32
   }

   //But, 저렇게 속성을 바꿀수 있고, 추가도 할수 있음.
   person3.name = "강민영A" ,  person3["name"] = "강민영A" // 동일한 선언과 저장
   person3.nickname = "인천 미친개";
   person3["car"] = "grandeur"

   // 결과적으로 , name 속성은 재 명명되고, nickname과, car 속성이 추가되었음.
   let person3 = {
      name : "강민영A",         // 멤버            person3 객체 속성은 2가지가 아닌 5가지가 나옴,    
      age : 32 ,                // 멤버    ->      {name: "강민영A", age : 32, nickname : "인천 미친 개", car : "grandeur"}  
      nickname : "인천 미친 개", // 멤버
      car : "grandeur",         // 멤버
      say : function() {        // method (이 객체를 다루는 방법(method) - 함수가 아닌 프로퍼티들은 멤버라고 부름)
          console.log(`나는 ${this.name = this["name"]} ` + `별명은 ${this.nickname}` );
          // 나는 강민영 별명은 인천 미친 개 가 출력됨
          // ★ 여기서 this는 자기 자신의 객체, 객체 안에 method를 만들게 되면, method 안에서는 자기 자신을 this 라고 부를수 있음
          // 저기서는 person3.name , person3.nickname 이라고 쓴것과 동일! 
      } 
   } 

/*
   만약 저기서 없는 멤버(없는 프로퍼티) 를 갖고 오려면 undifined가 뜬다.
   저기서 만약에 저 멤버가 있는지 없는지 확인 하려면 'in' 을 사용

   ${"name" in person3} // true
   ${"sex" in person3}  // false (없음)

   다만, 참고 할 점은, 
   객체 선언 한 person3 의 현재 자료형이 지금 let 인데, 이걸 const로 바꾸면 (값을 바꿀수 없음, 상수) 에러가 나지 않음.
   
   Why?
   -> 프로퍼티 수정 하는 행위는, person3 이라는 '상수' 자체를 수정하는 행위가 아니기 떄문에 그렇다,
      person3 이라는 상수가 갖는 'Object를 수정' 하는 행위지, 상수 자체를 수정하는 게 아니기 떄문에 문제 없음.
      여기서 상수를 훼손하는 행위는, 새로운 객체를 대입 연산자 통해 할당하는 행위가 바로 그것이다.
*/

   // 객체의 함수 선언은 
   person3.say();  person3["say"](); //동일 방식이다. 

   // 객체의 property 안에 함수를 담는 것, 객체 안에 들어있는 함수 - method(메서드) 라고 부름, Line 79번 참조,

   // property 삭제 (delete 와 null 로 삭제)
   // 첫번째는 delete, 
   delete person3.car;  delete person3["car"]; // 동일 방식이다.

   // 두번째는 null, 
   person3.car = null; 

/*
    배열) - 비원시 자료형 (Array) - List, 여러개의 데이터를 가지고 올수 있음
    객체와 마찬가지로 두 가지 방법으로 생성 가능 
*/
    let Arr = new Array(); // Array 생성자 이용 하여 객체 만드는 방법

    let arr = [1,"2", true, null, undifined, {}, [], function() {}]; // 배열 리터럴 - 대괄호 사용

    // 배열도 자료형 상관없이 아무거나 들어 올수 있음

    let Arr2 = [1,2,3,4,5]; //  key 대신에 배열은 데이터가 위치한 순서 즉 index를 통하여 각각 값에 0부터 접근이 가능하다.
    Arr2[0] - 1, Arr2[1] - 2, Arr2[2] - 3, Arr2[3] - 4, Arr2[4] - 5 

    Arr2.push(6) //  push() : 배열 가장 마지막에다가 원소 추가 가능함. 
    Arr2.length // length : 배열 길이  

   /* 매우 중요, 반복문 */     
    
    for (let i = 0; i<= 100; i++) {
        //반복 수행할 명령
    }

    // 객체 순회도 가능 - 
    let person4 = {
        name : "강민영",
        age : 32,
        tall : 175
    };

    const personKeys = Object.keys(person4); 
    // ★ Object.keys : 객체 안에 있는 Key 값들을 순서대로 배열로 전달 받을 수 있음.
    const personValues = Object.values(person4); 
    // ★ Object.values : 객체 안에 있는 Value 값들을 순서대로 배열로 전달 받을 수 있음.
    
    personKeys = ["name", "age", "tall"];
    console.log(personKeys); // ["name" ,"age" ,"tall"]

    for (let i =0 ; i < personKeys.length; i++) {
        const curKey = personKeys[i];
        const curValue = person4[curkey];
    }

    console.log(`${curKey} : ${curValue}`); // name : "강민영" , age : 32 , tall : 175 가 순차적으로 나옴

    for (let i = 0; i < personValues.length; i++) {
        console.log(personValues[i]);
    }

    // 배열 내장 함수 (1/4 정리 하겠음)
    // foreach 

    // map 

    // includes 

    // indexOf

    // findIndex , find

    // filter

    // slice

    // concat

    // sort (문자열 정렬 / 숫자형 정렬) 

    // join 

