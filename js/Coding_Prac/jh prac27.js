//프로그래밍 기초문제 27.콜라츠 추측
//https://school.programmers.co.kr/learn/courses/30/lessons/12943

//num이 짝수면 2로 나눔 (1이 될때까지 반복)
//num이 홀수면 *3 + 1 (1이 될때까지 반복)
// 몇번 반복 후에 1이 되는지 반복 수 리턴
//num = 1은 return 0 반환
//반복 수 500이상이라면 return -1

function solution(x) {
    let answer = 0;

    for (let i = 0; i <x.length; i++) {
    if (x % 2 === 0) {
        answer = x / 2
    }   else {
        answer = (x * 3) + 1
    }
        };  
    };   
    console.log(answer);

// for(let i = 0; i < x.length; i++)
// //num이 짝수면 2로 나눔 (1이 될때까지 반복)
// if(x % 2 === 0) {x = x / 2}
// //num이 홀수면 *3 + 1 (1이 될때까지 반복)
// else {x = (x * 3) + 1}
// // 몇번 반복 후에 1이 되는지 반복 수 리턴
// //num = 1은 return 0 반환
// //반복 수 500이상이라면 return -1

//두 번째 시도
function solution(x) {
    let answer = 0;
    
    while (x != 1) {          //어떻게 1에서 멈출지 고민하다가 while함수를 써보기로 했다. 이렇게 사용하는게 맞는가?
    
    for (let i = 0; i < 500; i++) {
    if (x % 2 === 0) {
        answer = x / 2
    } else if(x % 2 !== 0) {
            answer = (x * 3) + 1
        }   
}        
        if (x === 1) {
            answer = x[i]
        }   else if (x[i] >= 500) {
            answer = -1
        }
        
        }
    return answer;
    }
    //계속해서 잘못 된 값이 나온다.
    //세 번쨰 시도
    function solution(x) {
        var answer = 0;
        
        while (x != 1) { //1이 아닐때까지 반복
            
            // for (let i = 0; i < 500; i++) {
                if(x % 2 === 0) {
                    x = x / 2
                } else {
                    x = (x * 3) + 1
                };
                answer += 1; //이 부분을 정확히 알지 못했다. i, x, x[i]등을 생각했는데 그냥 1만 중첩되서 더해지면 횟수가 구해지겠지..
            }; if (answer >= 500) {
                return -1
            } else if (x == 1) {
                return 0
            }
         return answer;
        } 
        //계속해서 오류가 나온다. answer += 1;까지 했을때는 리턴값 -1,0 빼고는 잘 나왔다.
        //예외사항 조건 걸어주니 잘 나오던 것까지 오류가 나고 예외사항은 맞아졌다. 뭐가 문제인지 한참을 찾았다.
        //마지막 return위 71번째return 0이 잘못되었는데 저기서 바로 return answer가 나온다. 왜 return은 answer가되고
        //0인값은 따로 안 주는지 이해가 가지 않는다. 저렇게하면 코드가 맞다. 공부 후 다시 봐야겠다. 