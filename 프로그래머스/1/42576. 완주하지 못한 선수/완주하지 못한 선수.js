const solution = (participant, completion) => {
    // 필터링 있는지 확인하는 방법
    // MAP *중복을 고려해야 하는 경우 누적
    
    const runnerMap = new Map();
    for (const name of participant){
        runnerMap.set(name, (runnerMap.get(name) || 0) +1 );
    }
    
    for (const name of completion){
        runnerMap.set(name, (runnerMap.get(name)||0)-1);
    }

    for (const [name, count] of runnerMap.entries()){
        if(count >= 1){
            return name;
        }
    }
}