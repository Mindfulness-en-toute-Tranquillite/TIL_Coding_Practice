//프로그래밍 기초문제 18. 김서방 찾기
//https://school.programmers.co.kr/learn/courses/30/lessons/12919

// 1.arr는 string
// 2.array seoul에서 "Kim" 찾기.
// 3.Kim의 위치는 x
// 3.Kim은 한 번만.
// 4.return은 "김서방은 seoul[i]에 있다"

// function solution(seoul) {
//     let answer = '';
//     let x = '';
//     for (let i = 0; i < seoul.length; i++);
//     answer = seoul[ix;
    
//     return "김서방은 " + seoul.indexOf([x]) + "에 있다"
// }
//seoul array에서 x를 찾고 그 x의 인덱스 값을 뺴서 넣으면 되잖아.

function solution(seoul) {
    let answer = '';
    let x = seoul["Kim"];
    for (let i = 0; i < seoul.length; i++) {
        x = seoul[i]
        answer = x;
    }
    return "김서방은 " + seoul.indexOf([x]) + "에 있다"
}
//최종
function solution(seoul) {
    answer = seoul.indexOf("Kim");
    return "김서방은 " + answer + "에 있다"
        
}
//이렇게 간단한 걸 왜이렇게 꼬아서 생각해??