
        let ans = ['apple','pasds','savor']; // 단어 리스트 배열
        let numbers = Math.floor(Math.random() * 3); // 단어 리스트 배열 갯수만큼 담기
        let word = ans[numbers];        
        
        /* 
           배열의 index 즉 0 ~ 2 : 3개 중 랜덤 지정
           알파벳 비교는 - word 의 5자리 단어 하나하나를 input 값과 비교
           문자열 까지 일치 해야 하므로 === 연산자 사용 
        */ 
        document.querySelector('button').addEventListener('click', 
        function () {

            let inputer = document.querySelectorAll('.inputer');

            // 1. 위치까지 맞으면 정답 (초록칠)
            for (let i = 0; i < 5; i++) {
                if(inputer[i].value === word[i]) {
                    inputer[i].style.background = 'green';
                } else if (word.includes(inputer[i].value)) {
                    inputer[i].style.background = 'yellow';
                } else if (inputer[i].value === ''){
                    alert('공백 발생');
                } else {
                    inputer[i].style.background = 'grey';
                }

                
                /*
                for문 돌려 단어 하나하나 씩 다 비교해보고 저렇게 처리 후 
                template로 붙일 것에다 단어 인덱스와 
                새로 단어를 비교 하기 위해 
                기존 단어 비교한 영역은 class 삭제 처리
                */
                inputer[i].classList.remove('inputer');                
                
            }
                        
            let template = `<div>   
                            <input class = "inputer" maxlength = "1">
                            <input class = "inputer" maxlength = "1">
                            <input class = "inputer" maxlength = "1">
                            <input class = "inputer" maxlength = "1">
                            <input class = "inputer" maxlength = "1">
                            </div>`;

            document.querySelector('body').insertAdjacentHTML
            ('beforeend', template);
                        
            /* 제출 버튼 누르고 뒤에 생기는 template에다가 답을 입력하기 위해
               기존의 class는 삭제 처리를 함, 
            */

        }); //제출 버튼 지정 클릭 이벤트 시 지정 함수 실행
