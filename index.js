const calc = require('./calc');
//node - require 내장함수로 경로 이용하여 모듈 사용 가능

console.log(calc.add(1,2));

console.log(calc.add(4,5));

console.log(calc.sub(10,2));
// 확장 프로그램 설치 하여 실행 , Pritter  소스 코드 저장

// View - Appearance - Show Panel, ctrl + j

// GUI : Graphic User Interface : 윈도우에 명령하는 역할, 실행 : 마우스 클릭만으로 명령 역할하게 함 

// CLI : Command Line Interface : 명령을 직접 텍스트로 타이핑하여 명령 내림, 명령어를 입력하여 명령

// console 찍을 시, 개발자 도구의 콘솔 탭에서만 확인 가능했으나
// node.js는 실행된 터미널에 콘솔이 바로 찍힘
