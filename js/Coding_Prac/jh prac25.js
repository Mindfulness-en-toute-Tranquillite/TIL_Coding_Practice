//프로그래밍 기초문제 25.정수 제곱근 판별
//https://school.programmers.co.kr/learn/courses/30/lessons/12934

//최종
function solution(n) {
    let answer = 0;
    let x = Math.sqrt(n); //제곱근이 되는지 거르는 ->정확히는 루트3 등은 들어가지만 아래 if문에서 나머지가 생기기때문에 else
    
    if(x % 1 === 0) {       //음수를 거르는
     return (x+1) * (x+1);
}
    else {
        return -1;
}
}
//--------------------------------------
//처음 시도
function solution(n) {
    let answer = 0;
    let x = Math.sqrt(n);
    
    if(n === (x * x)) {                     //음수는 걸러지지 않음.
       return (x+1) * (x+1);
}
    else {
        return -1;
}
}