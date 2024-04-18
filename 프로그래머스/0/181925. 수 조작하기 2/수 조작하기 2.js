solution = (numLog, answer = '') => {
    const convert = {
        '1' : 's', '-1' : 'w', '10' : 'a', '-10' : 'd'
    }
    
    for (let i = 1; i < numLog.length; i++){
        let key = numLog[i-1] - numLog[i];
        answer += convert[key]
    }
    return answer
}