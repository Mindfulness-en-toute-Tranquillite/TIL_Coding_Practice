//프로그래밍 기초문제 26.정수 제곱근 판별
//https://school.programmers.co.kr/learn/courses/30/lessons/12934
function solution(arr) {
    var answer = [];
    // console.log(...arr)
    let arrMin = Math.min(...arr) //...arr는 arr에 있는 인덱스 다 비교해준다.

}
//1.arr에서 가장 작은 수 찾기.
//2.가장 작은 수 제거
//3.배열 주기.
//4.배열이 비어있으면 -1 리턴.


// function solution(arr) {
//     var answer = [];
    
//     let arrMin = Math.min(...arr) //...arr는 arr에 있는 인덱스 다 비교해준다.
    
//     console.log(arrMin)
    
//     return answer;
// }



function solution(arr){
    var answer = [];
    //1.가장 작은 수 찾기
    let arrMin = Math.min(...arr);

    //arr[i] = 가장 작은 수
    for ( let i = 0; i < arr.length; i++){
        if(arr[i] !== arrMin){
        answer.push(arr[i]);
    }
    return answer;
    }
    if (arr.length === 1) {
        answer = [-1];
    }
    return answer; //return자리때문에 이 문장 돌기 전에 끝나버린다
}
//-----------------------------------------
function solution(arr){
    var answer = [];
    //1.가장 작은 수 찾기
    let arrMin = Math.min(...arr);
    if (arr.length === 1) {
        answer = [-1];
        return answer;
    }
    //arr[i] = 가장 작은 수
        for ( let i = 0; i < arr.length; i++){
            if(arr[i] !== arrMin){
            answer.push(arr[i]);
            }
    return answer;
        }
    if (arr.length === 1) {
        answer = [-1];
    }
    return answer;
}
//return이랑 괄호 코드블럭 더욱 신경쓰기.