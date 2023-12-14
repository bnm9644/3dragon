

// 이정환이 한입 리액트 강의 Javascript 정리본 이므니다.
// 조건문 업그레이드 
/*
  function isKoreanFood (food) {
    // food === '불고기' || food === '비빔밥' || food === '떡볶이'
    if(['불고기', '떡볶이', '비빔밥'].includes(food)) { // 여러개 중 하나 일떄 includes 로 사용 하면 됨
        return true;
    }

    return false;
  }

  const food1 = isKoreanFood("불고기");
  const food2 = isKoreanFood("파스타");
  console.log(food1);
  console.log(food2);  
*/

/*
  const getMeal = (mealType) => {
    if(mealType === "한식") return "불고기";
    if(mealType === "양식") return "파스타";
    if(mealType === "중식") return "멘보샤";
    if(mealType === "일식") return "초밥";
    return "굶기";
  }

  console.log(getMeal("한식"));
  console.log(getMeal("중식"));
*/

const meal = {
    한식 : '불고기',
    중식 : '멘보샤',
    일식 : '초밥',
    양식 : '스테이크',
    인도식 : '카레'
};

const getMeal = (mealType) => {
    return meal[mealType] || "굶기"; 
}

console.log(getMeal("한식")); // 한식이라는 Key의 값을 return
console.log(getMeal());

// 많은 유형의 대표적인 뭔가 하나를 리턴해야 할시 객체의 괄호 표기법 사용


// 객체의 비 구조화 할당 (구조분화 할당)
// let [one, two, three] = ["one", "two", "three"]; // 배열의 선언분리 비구조화 할당
// console.log (one, two, three)

/*
    할당 받지 못한 배열에는 기본 값 전달이 가능
    let [one, two, three, four = "four"] = ["one", "two", "three"];
    console.log (one, two, three, four);
*/ 

/* 
    let arr  = ["one","two","three"];

    let one = arr[0];
    let two = arr[1];
    let three = arr[2];

    let [one,two,three] = arr;
    console.log (one, two, three)
    // 배열의 비구조화 할당 : 대괄호를 이용하여 배열 값을 순서대로 할당받아 사용할수 있는 방식
*/

/* 
    let a = 10; let b = 30; let tmp = 0;
    tmp = a; a = b; b = tmp;

    [a,b] = [b,a];
    console.log(a,b);
*/

// 객체의 비구조화 할당

let object = {one : "one", two : "two",  three : "three"};

/* 
    let one = object.one;
    let two = object.one;
    let three = object.one;
*/
let {one,two,three:four} = object;
console.log (one, two, four); // 순서가 아니라 Key 값 기준으로 비구조화 할당 이뤄짐
// one, two, three 그대로 찍힘

// Spread 연신자, 
// 중복된 객체 프로퍼티를 사용 시 유용 , 현재 base와 madeIn 의 프로퍼티 중복! 
const cookie = {
    base : "cookie",
    madeIn : "korea"
};

const chocochipCookie = {
    /*base : "cookie",
    madeIn : "korea",*/
    ...cookie,
    toping : "chocochip"
};

const blueberryCookie = {
    /*base : "cookie",
    madeIn : "korea",*/
    ...cookie,
    toping : "blueberry"
};

const strawberryCookie = {
    /*base : "cookie",
    madeIn : "korea",*/
    ...cookie,
    toping : "strawberry"
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

//배열에 spread 쓸수도 있음
const noTopingCookies = ['촉촉한 쿠키', '안촉촉한쿠키'];
const topingCookies = ['바나나쿠키','블루베리쿠키','딸기쿠키','초코칩쿠키'];

const allCookies = [...noTopingCookies , ...topingCookies];
// concat 함수와 같은 병합의 기능으로도 사용
