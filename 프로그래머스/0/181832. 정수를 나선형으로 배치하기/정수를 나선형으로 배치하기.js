const solution = (n) => {
    let answer = Array.from({length: n}, () => Array(n).fill(0));
    let top = 0;
    let bottom = n-1;
    let left = 0;
    let right = n-1;
    let count = 1;
    
    while(left <= right && top <= bottom){
        for (let i=left; i<=right; i+=1){
            answer[top][i] = count;
            count+=1;
        }
        top +=1;
        
        for (let i=top; i<=bottom; i+=1){
            answer[i][right] = count;
            count+=1;        
        }
        right -=1;
        
        for (let i=right; i>=left; i-=1){
            answer[bottom][i] = count;
            count+=1;        
        }
        bottom -=1;
        
        for (let i=bottom; i>=top; i-=1){
            answer[i][left] = count;
            count+=1;     
        }
        left +=1;
           
        }
    return answer;
}