// 최단경로 bfs
const solution = (begin, target, words) => {
    // 하나만 다른것을 찾아내는게 관건
    // bfs 연결은 동일
    if(!words.includes(target)){ return 0; }
    queue = [[begin, 0]];
    const visited = new Set();
    visited.add(begin);
    
    while(queue.length){
        const [word, level] = queue.shift();
        if(word === target) { return level; }
        for (const nextWord of words){
            //console.log(nextWord, queue, visited);
            if(IsOneDiffrentWord(nextWord, word)){
                visited.add(nextWord);
                queue.push([nextWord, level+1]);
            }
        }
    }
    return 0;
}

const IsOneDiffrentWord = (nextWord, word) => {
    if (nextWord.length !== word.length) { return false };
    let diffcount = 0;
    for (let i=0; i<nextWord.length; i++){
        if(nextWord[i] !== word[i]) {diffcount+=1;}
        if(diffcount>1) return false;
    }
    return diffcount === 1;
}