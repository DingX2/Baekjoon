function solution(nums) {
    let answer = 0;
    
    const getCombination = (arr, r) => {
        const result = [];
        if(r === 1) return arr.map(v => [v]);
        if(r > arr.length) return [];
        
        arr.forEach((fixed, idx, origin)=>{
            const rest = origin.slice(idx+1);
            const combs = getCombination(rest, r-1);
            const attached = combs.map(c => [fixed, ...c]);
            result.push(...attached);
        })
        return result;
    }
    
    const combs_array = getCombination(nums, 3);
    //console.log(combs_array);
    
    const isPrime = (n) => {
        if(n<2) return false;
        for(let i =2; i*i<= n; i++){
            if(n%i ===0) return false;
        }
        return true
    }
    
    for (const arr of combs_array){
        const sum_num = arr.reduce((a,b) => a+b, 0);
        if(isPrime(sum_num)) answer +=1;
    }
    
    return answer;
}