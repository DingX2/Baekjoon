const solution = (s, skip, index) => {
    let result = '';
    [...s].forEach((key) => {
        let count = 0;
        while (count !== index) { 
            key = String.fromCharCode(key.charCodeAt() + 1); 
            if (key > 'z'){
                key = 'a';
            }
            if ([...skip].includes(key)) {
                continue;
            }
            count++;
        }
        result += key;
    });
    return result;
}
