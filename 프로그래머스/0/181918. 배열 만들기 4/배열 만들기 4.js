function solution(arr) {
    // 1. stk 빈 배열이라면 stk에 arr[i] 추가
    const isEmptyArrayPushItem = (element, returnArray) =>{
        if (returnArray.length === 0) {
            return [element];
        }
        return returnArray;
    }
    
    // 2. stk 마지막 원소가 작으면 push
    const isSmallerPushItem = (element, arrayElement, array) =>{
        if (element > arrayElement){
            return [...array, element];
        }
        return array
    }
    
    // 3. stk 마지막 원소가 크거나 같다면 pop
    const isBiggerPushItem = (element, arrayElement, array) => {
        if(element <= arrayElement){
            array.pop()
        }
        return array
    }
    
    // 4. i === arr.length 종료
    const arrayLengthSameFinish = (i, array) =>{
        if(i === array.length){
        }
    }
    
    let stk = [arr[0]];
    let i = 1;
    let temp;
    while(i < arr.length){
        if (arr[i] > stk[stk.length - 1]){
            stk = isSmallerPushItem(arr[i], stk[stk.length - 1], stk);
            i += 1;
        }
        else if(arr[i] <= stk[stk.length - 1]){
            stk = isBiggerPushItem(arr[i], stk[stk.length - 1], stk);
        }
        else{
            stk = isEmptyArrayPushItem(arr[i], stk);
            i += 1
        }
    }
    
    return stk;
}