//프로그래밍 기초문제 22.자릿수 더하기
//https://school.programmers.co.kr/learn/courses/30/lessons/12931

//N이라는 자연수. 이걸 자릿수마다 나눠야해 (ex>123->1,2,3)
//나눈 N의 각 자릿수를 더해라. 아마 반복문 써야해
//그 값을 return

function solution(n)
{
    var answer = 0;
    let div = String(n)  //split은 -> str에서만 사용 가능. string으로 변환 먼저해라.
    for(i=0;i < div; i++)
        answer += div[i]
    
    
    return answer;
}

//우선 먼저 자연수를 string으로 변환해라.
//그리고 for구문 돌리고. div의 길이만큼 돌려.
//돌리면 answer에 쌓이도록 해줘.
//div는 숫자로 바꿔주고
//쌓아서 더해줘

//다시 풀이
function solution(n)
{
    var answer = 0;
    var div = String(n);
    
    for ( let i = 0; i < div.length; i++); {
        answer += Number(div[i]);
    }
    return answer;
}
//예시답안
function solution(n)
{
    var answer = 0;
    var m = String(n);
    
    for ( let i = 0; i < m.length; i++) {
        answer += parseInt(m[i]);
    }
    return answer;
}
////아무리 해도 아무리고쳐도 계속 오류가 남. 답지랑 비교해도 다를게없고 심지어 글자도 똑같이 바꿔보고 Number를 답지에 parseInt로도 바꿈
//아무리 해도 안됨 30분 넘게. 결국 보니까 for 구문에 ; 때문에 오류...