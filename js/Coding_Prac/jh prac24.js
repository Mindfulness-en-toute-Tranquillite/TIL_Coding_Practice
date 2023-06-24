//프로그래밍 기초문제 24.내림차순으로 배치하기
//https://school.programmers.co.kr/learn/courses/30/lessons/12933

//내풀이
//1.n은 정수.
//2.우선 각 자릿수로 쪼개야해
//3.정렬 내림차순으로(큰거부터 작은거니까)

function solution(n) {
    let answer = 0;
    n = n + "";
    //string으로 변환
    let x = "";
    let arr = n.split("").sort((a,b) => (b - a));
    for(let i = 0; i < arr.length; i++) {
        x += arr[i];
    }
    return answer = x
    // arr.join(",").split(",")

    console.log(x);
//내림차순으로 된 배열을 붙여서 Number로 변환.
}

//오류.
//n	= 118372
//sort는 배열을 받고. split은 arr을 받는다.
// function solution(n) {
//     var answer = 0;
//     return answer;
// }


//풀이
function solution(n) {
    let answer = 0;
    n = n + "";
    //string으로 변환
    let x = "";
    let arr = n.split("").sort((a,b) => (b - a));
    for(let i = 0; i < arr.length; i++) {
        x += arr[i];
    }
    return answer = Number(x)
}
//type 변화 정확히 알고 매소드마다의 type 잘 이해하기. console 많이 찍어보기.