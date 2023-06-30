//1번

//르탄이가 1000원을 가지고 편의점에서 물건을 사려고 한다. 편의점에는 500원, 100원, 50원, 10원이 충분히 있고, 편의점 직원은 언제나 거스름돈 개수가 가장 적게 잔돈을 준다. 
//르탄이가 편의점에서 물건을 사고 1000원 지폐 한 장을 냈을 때, 받을 잔돈의 개수를 구하는 프로그램을 작성하여라. 
//(단, 물건의 가격은 10원 이상 1000원 미만이며, 1원 단위는 고려하지 않는다.) 


//잔금은 1000 - 물건 값
//잔금

// function solution(num){
// 	let answer= 0;
//     let change = 1000 - num
//     let fiveHund = math.floor(change / 500); 
//     let oneHund = 0;
//     let fifty = 0;
//     let ten = 0;

    

// 	return answer;
// }

// function solution(num){
// 	let answer= 0;
//     let change = 1000 - num
//     while (change % 1 === 0)
//     for (let i = 0; i < change; i++)
//         if (x * 500)
//     }
    
    

// 	return answer;
// }


// let num1 = 160;
// console.log(solution(num1))

function solution(num){
	let answer = 0;
    let x = 1000 - num;

    for(let i = 0; i < x.length; i++) {
        if (x % 500 !== 0) {
            answer += parseInt(x / 500)
        }   else if (x % 100 !== 0) {
            answer += parseInt(x / 100)
        }   else if (x % 50 !== 0) {
            answer += parseInt(x / 50)
        }   else if (x % 10 !== 0) {
            answer += parseInt(x / 10)
        }
        console.log(x)
    }
	return answer;
}
// console.log(x)
// function solution(num){
// 	let answer = parseInt(chan / 500) + parseInt((chan % 500) / 100) + parseInt(((chan % 500) % 100) / 50) + parseInt((((chan % 500) % 100) % 50) / 10);
//     let chan = 1000 - num;
//     return answer;
//     } 
//     let num = 320;
//     console.log(solution(num))

function solution(num){
	let answer = 0;
    let x = 1000 - num;

    // for(let i = 0; i < x; i++) {
        if (x % 500 !== 0) {
            answer += parseInt(x / 500)
            // console.log(answer)
        }   else if (x % 100 !== 0) {
            answer += parseInt(x / 100)
            // console.log(answer)
        }   else if (x % 50 !== 0) {
            answer += parseInt(x / 50)
            console.log(answer)
        }   else if (x % 10 !== 0) {
            answer += parseInt(x / 10)
}            
// console.log(answer)
        
    // }
    // console.log(answer)
	return answer;
}



// function calculateChange(payment, cost) {
//     let payBack = payment - cost
//     let fiftyThousand = Math.floor(payBack / 50000);
//     let tenThousand = Math.floor((payBack - fiftyThousand * 50000) / 10000);
//     let fiveThousand = Math.floor((payBack - fiftyThousand * 50000 - tenThousand * 10000)/ 5000);
//     let oneThousand = Math.floor((payBack - fiftyThousand * 50000 - tenThousand * 10000 - fiveThousand * 5000)/1000);


    function solution(num){
    let change = 1000 - num
    let fiveHund = Math.floor(change / 500); 
    let oneHund = Math.floor((change - fiveHund * 500) / 100);
    let fifty = Math.floor((change - fiveHund * 500 - oneHund * 100)/ 50)
    let ten = Math.floor((change - fiveHund * 500 - oneHund * 100 - fifty * 50)/ 10);

    return fiveHund + oneHund + fifty + ten
    }















    //2번
// ## 중. 동그라미 엑스로 숫자를?
// "OOXXOXXOOO"와 같은 OX문의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 
// 예를 들어, 10번 문제의 점수는 3이 된다.
// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.
// (단,  OX문의 결과는 0보다 크고 80보다 작은 문자열이 주어진다. 또한 문자열은 O와 X만으로 이루어져 있다.)
//예를 들어, "OOXXOXXOOO"를 입력받으면 10이 출력됩니다.

function solution(str){
	let answer = str.indexOf("O")
    let sum = 

    let O = 1
    let OO = 3
    let OOO = 6
    let OOOO = 10
    let OOOOO = 15
    let OOOOOO = 21
    let OOOOOOO = 28
    let OOOOOOOO = 36
    let OOOOOOOOO = 45
    let OOOOOOOOOO = 55

    let arr = str.split(X)

    console.log()



	return answer;
}
function solution(seoul) {
    answer = seoul.indexOf("Kim");
    return "김서방은 " + answer + "에 있다"
}



function solution(str){
	let answer= 0;
    // let arr = str.split()
    // for (let i = 0; i < str.length; i++)
        
    let str.filter(str => str = O);

	return answer;
}

function solution(str){
str.splice('X');
// str x빼고 O 배열로 바꾸기.
console.log()
sum += [j].length
    for ( let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i]; j++) {

        }      
    }
    return 
}