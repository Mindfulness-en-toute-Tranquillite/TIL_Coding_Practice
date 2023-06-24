//프로그래밍 기초문제 23.자연수 뒤집어 배열로 만들기
//https://school.programmers.co.kr/learn/courses/30/lessons/12932

//이거 오름차순, 내림차순 문제인가?
//n을 각각으로 쪼개야해.
//쪼개고 내림차순으로 정렬(아마도 sort인듯)
//배열형태로 리턴해야해.

//내 풀이
function solution(n) {
    var answer = arr = String(n).reverse().sort((a,b) => b - a) //문자열로 바꾸고 순서뒤집고 내림차순정렬
                                                                //문자하나하나 나누어줘야해)(split)
    return answer;
}
//한번더풀이
function solution(n) {
    return String(n).split("").reverse().map((data) => Number(data)) //뒤집었는데 내림차순정렬 필요없어/ 슛자로 다시 바꿔줘야해.
}                                                                   //숫자로 다시 바꾸기 위해 map을 한 번 사용해봤다
//String(), split(), revers(), map(()=>()) 다양한 매소드를 공부하고 사용해 볼 좋은 기회였다. 익히고 연습하기.