const solution = (phone_book) => {
    let answer = true;
    
    phone_book.sort(); //문자열 순으로 정렬 ? 핵심힌트 !
    
    for (let i=0; i<phone_book.length-1; i++){
        if(phone_book[i+1].startsWith(phone_book[i])){
            return false
        }
    }
    
    return answer;
}