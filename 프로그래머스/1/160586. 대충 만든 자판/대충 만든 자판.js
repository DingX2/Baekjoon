solution = (keymap, targets) => {
    // 문자를 묶어서 합성 O(2n)
    const map = [];
    const result = [];
    
    for (let i =0; i < keymap.length; i++) {
        for (let j =0; j < keymap[i].length; j++){
            if (map[j]){
                map[j] = map[j] + keymap[i][j]
            }
            else{
                map.push(keymap[i][j])
            }
        }
    }
    
    for (const item of targets){
        let count = 0;
        for (let i=0; i< item.length; i++){
            let temp = map.findIndex((key)=>{
                return key.includes(item[i]);
            })+1;
            if (temp === 0){ 
                count =-1
                break
            }
            count += temp
        }
        if (count == 0){ count = -1; }
        result.push(count);
    }
    return result;
}