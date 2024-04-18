solution = (numLog, answer = '') => {
    for (let i = 1; i < numLog.length; i++){
        let key = numLog[i-1] - numLog[i];
        switch(key){
            case 1 : 
                answer += 's';
                break;
            case -1 :
                answer += 'w';
                break;
            case 10 :
                answer += 'a';
                break;
            case -10 :
                answer += 'd';
                break;
            default: 
        }
    }
    return answer
}