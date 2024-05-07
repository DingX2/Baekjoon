solution = (myString, pat, before=-1, index=0, result=0) => {
    index = myString.indexOf(pat, index);
    while(index !== -1){
        if(index !== before){
            result++;
            before = index;
         }
        index = myString.indexOf(pat, index+1);
    }
    return result;
}