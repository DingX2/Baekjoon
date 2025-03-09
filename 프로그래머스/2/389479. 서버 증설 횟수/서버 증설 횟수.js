solution = (players, m, k, answer=0) => {
    const useServer = []; // 증설된 서버의 수, k
    const useServerMap = new Map(); // index시간에 addServer얼만큼 끈다.
    let useServerCount = 0; // 증설횟수
    let currentServer = 0;
    players.forEach((player, index)=>{
        const minServer = Math.floor(player/m); // 필요한 최소 서버
        currentServer = currentServer - (useServerMap.get(index) || 0 ); // 서버 끄기
        
        const addServer = minServer - currentServer; // 서버증설하기
        if(addServer>0) { useServerMap.set(index+k, addServer) } // 서버 타이머 설정
        currentServer += Math.max(addServer, 0); // 현재사용서버
        useServerCount += Math.max(addServer, 0); // 증설횟수
        
        //console.log(useServerMap)  
        //console.log(player, index, currentServer, minServer, addServer, useServerCount);
        
    })
    
    return useServerCount;
}