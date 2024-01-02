
// 계산 기능을 하는 파일
const add = (a,b) => a+b;
const sub = (a,b) => a-b;

//console.log(add(1,2)); // 내보내기, 모듈 : 어떤 기능을 담당하는 분리된 파일 각각을 말함


//모듈 객체 단위로 내보낼 수 있음 - 불러오는 건 require 로
module.exports = {
    moduleName : "calc module",
    add : add,
    sub : sub
};
