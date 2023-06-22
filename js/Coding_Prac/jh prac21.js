//프로그래밍 기초문제 21.이상한 문자 만들기
//https://school.programmers.co.kr/learn/courses/30/lessons/12930

// 1.s는 단어로구성. 띄어쓰기로 구분.
// 2.string.split( separator, limit )로 단어 쪼개줘. ->split으로 변경
// 3.쪼갠 각 단어(짝수번째는 대문자, 홀수번째 소문자)
// 4.단어들 쭉 검사하면서 짝수,홀수에다 글자 넣도록 반복문?
// 5.짝수,홀수 구분 ( n& === 0은 짝수)
// 6.다시 다 더해서 return
//

function solution(s) {
    let answer = '';
    let word = s.split(' ')
    for(let i = 0; i < word.length;i++){    //word.length인지,s.length인지 헷갈린다
        for(let j = 0; j < word[i].length; j++) {
            //이거는 하나의 단어 때어온거에서 그 각각 한 단어 안에서 반복문
            if (j % 2 === 0) {
                answer += word[i][j].toUpperCase();
            }   else {
                answer += word[i][j].toLowerCase();
            }
        }
        console.log(word)
        if (i < word.length -1) {   //이 부분은 조금 이해가 가지 않는다.
            answer += ' ';          //i는 word.length보다 1 작은 건 마지막 단어에는 띄어쓰기 할 필요가 없기때문에.
        } 
    } 

    return answer;
}