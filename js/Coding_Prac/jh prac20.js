//참여자배열 participant [arrPar]
//완주자배열 completion [arrCom]
//arrPar.length = arrCom.length + 1
//return = 완주 못 한 선수 이름. (참여자목록과 비교했을 때 완주자 목록 하나 작음 그 한명)
//동명이인 있을 수 있음. 해당 선수 x라면 x는 참여자 명단에 a명 있고 완주자 명단에는 a-1 있음. 
//return값은 
//"x"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다. 또는
//"x"는 참여자 명단에는 a 명이 있지만, 완주자 명단에는 a-1 명밖에 없기 때문에 한명은 완주하지 못했습니다.

// function solution(participant, completion) {
//     var answer = '';
    
//     let arrPar = [];
//     let arrCom = [];
//     // arrCom.length = arrPar.length - 1
    
//     for (let i = 0; i < arrPar.length; i++) {
//         for (let j = 0; j < arrCom.length; j++) {
//             if (arrPar[i] = arrCom[j]) {
//             answer = arrPar.splice(arrPar[i])
//             } 
//         }
//     } 
//     return answer;
// }
// //

// function solution(arrPar, arrCom) {
//     var answer = '';
    
//     for (let i = 0; i < arrPar.length; i++) {
//         for (let j = 0; j < arrCom.length; j++) {
//             if (arrPar[i] = arrCom[j]) {
//             answer = arrPar.splice(arrPar[i])
//             } 
//         }
//     } 
//     return answer;
// }

//두번쨰시도
// function solution(arrPar, arrCom) {
//     var answer = "";
    
//     for (let i = 0; i < arrPar.length; i++) {
//         for (let j = 0; j < arrCom.length; j++) {
//             if (arrPar[i] = arrCom[j]) {
//             answer = arrPar.splice(arrPar[i])
//             } else {arrPar.push([i])}
//         }
//     } 
//     return String(answer);
// }

//세번째시도
// function solution(arrPar, arrCom) {
//     arrPar.sort();
//     arrCom.sort();
    
//     for (let i = 0; i < arrPar.length; i++) { 
//             if (arrPar[i] != arrCom[i]) {
//                 return arrPar[i]
//             } console.log(arrPar[i])
//     }
    
// } 


function solution(arrPar, arrCom) {
    arrPar.sort();
    arrCom.sort();
    
    for (let i = 0; i < arrPar.length; i++) { 
            if (arrPar[i] != arrCom[i]) {
                return arrPar[i]
            }
    }
    // console.log(arrPar[i])
}