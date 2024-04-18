solution= (n) => {
    let answer = 0;
    for(let i=0; i <=n; i+=2){
         n % 2 ? answer += i+1 : answer += i**2;
    }
    return answer;
}