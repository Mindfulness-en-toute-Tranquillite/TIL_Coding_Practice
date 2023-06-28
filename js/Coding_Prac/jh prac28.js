//프로그래밍 기초문제 28.하샤드
//https://school.programmers.co.kr/learn/courses/30/lessons/12947

//내 풀이
function solution(x) {
    let answer = "";
    let Hashad = x % (x.split("").map((a,b) => (a-b))) === 0 ? True : False)
    if (x % Hashad === 0 ? True : False);
  return answer
}

//두 번째 풀이
function solution(x) {
    return if(x % (x.split().map((a,b) => (a-b))) === 0 ? True : False)}

//세 번쨰 풀이
function solution(x) {
    let answer = 0;
    let arr = x.toString().split('')
    
    for(let i = 0; i < arr.length; i++) {
        answer += Number(arr[i])
    }
    return x % answer === 0 ? true : false;
}