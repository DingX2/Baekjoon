const solution = (gems) => {
    let answer = [];
    
    const kindsOfGems = new Set(gems)
    const gemsMap = new Map();
    
    let bestLength = Infinity;
    let bestStart = Infinity;
    let bestEnd = Infinity;
    
    const max = gems.length;
    let [left, right] = [0, 0];
    while(left<max && right<max){
        // gem 늘리기
        gemsMap.set(gems[right], (gemsMap.get(gems[right])||0) +1);
        
        //조건이 불합할때까지
        while (gemsMap.size === kindsOfGems.size){
            answer.push([left+1, right+1])
            
            let currentLength = (right-left);
            if( (currentLength < bestLength) || 
               currentLength === bestLength && left < bestStart) {
                bestLength = currentLength;
                bestStart = left;
                bestEnd = right
            }
            gemsMap.set(gems[left], (gemsMap.get(gems[left])||0)-1)
            if(gemsMap.get(gems[left]) === 0) { 
                gemsMap.delete(gems[left]); 
            }
            left +=1; 
        }
        right+=1;
    }
    
    return [bestStart+1, bestEnd+1];
}