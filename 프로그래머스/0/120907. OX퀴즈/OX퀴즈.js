const solution = (quiz)=> {
    return quiz.map((string) => {
        const [n1, sign, n2, _, result] = string.split(" ");
        return sign === "+" && (+result=== +n1 + +n2) || 
            sign === "-" && (+result === +n1 - +n2) ? "O" : "X"
    })
}

// 구조분해할당을 사용할 것 => 0
// 코드 반복을 줄일 수는 없나? => answer.push.... => && 연산을 사용해보자
        // switch(sign){
        //     case '+':
        //         answer.push(+n1 + +n2 === +result ? "O" : "X"); break;   
        //     case '-':
        //         answer.push(+n1 - +n2 === +result ? "O" : "X");
        // }
// for map 을 사용하면 return 문을 줄일 수 있겠다 => O
    // for(let i =0; i<quiz.length; i++){
    //     const [n1, sign, n2, _, result] = quiz[i].split(" ");
    //     return sign === "+" && (result=== +n1 + +n2) || 
    //         sign === "-" && (result === +n1 - +n2) ? "O" : "X"
    // }
// -로 인한 문제는 없을까?