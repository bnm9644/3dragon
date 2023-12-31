
// 이정환이 한입 리액트 강의 Javascript 정리본 이므니다.
// Truthy , Falsy
let a = "";  

if(a) { // 값 있으면 참
    console.log("TRUE");
} else { // 값 없으면 거짓
    console.log("FALSE");
}

/*

분리형 값을 넣지 않아도 참/거짓 인식 되는 속성 
자신만의 어떤 특정한 기준으로 값을 참/거짓으로 분류

[](배열), {}(객체 리터럴), 숫자값, 문자값 : 참
-> 참이 아니어도 참으로 분류, 참 같은 값 -> Truthy!

거짓이 아니어도 거짓으로 분류되는 값 -> Falsy!
: null , undifined(null 포함 변수에 아무것도 안 넣은 상태) , 0 , -0 , NaN (숫자 아니다) , "" (빈 문자열) -> Falsy

*/

const getName = (person) => {
    if(!person) { // FALSY : if(person === undefined || person === null) 
        // False NOT : TRUE! 를 이용 null 과 undefined 예외 처리 가능!
        return "객체가 아님";
    }
    
    return person.name;
};

// person 객체를 파라미터로 전달, const name에는 강민영이 들어옴
let person = {name : "강민영"}; //{name : "강민영"}; // 객체 전달이 아닌, undifined를 넣으면 에러
                                // Why? : undifined는 객체가 아니기 떄문에 내부 프로퍼티 접근 안됨)
const name = getName(person); //person객체의 name 속성을 그대로 return 해 받아옴

console.log(name);

// 삼항 연산자 (조건문? T일때 명령 : F일때 명령) 
let c = 3;
c>=3 ? console.log("3보다 큼") : console.log("3보다 작음");

let d = [];
const arrayStatus = d.length === 0 ? "빈 배열" : "안 빈 배열"; 
console.log(arrayStatus);

let e; 
const result = e? true : false;
console.log(result);
    
// 학점 계산 프로그램 (삼항 연산자 중첩)
let score = 100;

//score >= 90 ? console.log("A+") : score >= 50 ? console.log("B+") : console.log("F");

if(score >=90) {
    console.log("A+");
} else if (score >= 50) {
    console.log("B+");
} else {
    console.log("F");
}


// 단락 회로 평가 : 논리 연산자 속성 이용, and , or , not

console.log(true && true); // 참 : 단락 회로 평가 (앞의 연산자가 False면 뒤에는 보지 않는 현상)
console.log(true || false); // 참
console.log(!true); // 거짓

const getNamee = (persons) => {
    /*
        if(!persons) {
            return "객체가 아님";
        }
        return persons.name;
    */
    
    /* return persons && persons.name; 
     - persons 값이 현재 Falsy로 뒤의 persons.name은 볼것도 없이 persons 를 리턴 
    */ 

    const namee = persons && persons.name; // True && True : 참 
    return namee || "객체가 아닙니다."; 
    // persons에 null을 넣게 되면, 
    // persons 값은 Falsy로 namee는 Falsy로 넘어 가고, 대신 객체가 아닙니다. 리턴

}

let persons = null; 
const names = getNamee(persons);
console.log(names);

// 단락 회로 평가 : 왼쪽에서 오른쪽으로 연산하게 되는 논리연산자의 순서를 이용하는 문법
/*
ex) 
console.log(true && true); // false && true 일 경우는, 굳이 볼 필요가 없음 
console.log(true || false); // true가 앞으로 오면 false는 굳이 볼 필요가 없음 
console.log(!true);
*/

//truthy 와 Falsy 사용
const getNamess = (personer) => {
    /*
    if(!personer) {
        return "객체가 아닙니다.";
    }
    return personer.name;
    */
   
    // return personer && personer.namer;
    // undefined 인 상태에서 앤드다 보니 personer 만 보고 아예 undifined 처리 함
    
    const fame = personer && personer.namer; // 강민영, Truethy && Truethy 면 객체의 namer 값 저장 
    return fame || "객체가 아닙니다.";
};

let personer = {namer : "강민영"}; // undefined 
const namer = getNamess (personer);
console.log(namer); 

