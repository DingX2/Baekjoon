const solution = (id_list, report, k) => {

    
    // 코테에서는 Map이 객체 "참조"를 저장한다.
    // user = userMap.get(id) 로 가져오면 같은 객체를 바라본다.
    // user.mailCount++ 처럼 내부 값을 바꾸면 Map 안 값도 즉시 변경된다.
    // user = { ... } 처럼 새 객체를 만들면 Map과는 다른 객체다.
    // 코테는 렌더 개념이 없으므로 불변보다 가변(mutation)이 메모리/성능에 유리하다.

    // React는 참조 비교(prev !== next)로 변경 감지한다.
    // 내부 값만 mutate하면 참조가 같아서 리렌더링이 발생하지 않는다.
    // 그래서 setState 시 반드시 새 객체를 만들어야 한다.
    // setCount(prev => prev + 1) 같은 함수형 업데이트는 최신 상태를 안전하게 보장한다.
    // useEffect([])는 최초 렌더 상태를 캡처하므로 stale closure에 주의한다.
    
    const userMap = new Map();
    
    for (const id of id_list){
        userMap.set(id, {reportSet: new Set(), mailCount: 0});
    }
    
    console.log(userMap);
    
    for (const items of report) {
        const [send, stop] = items.split(" ");
        
        let temp = userMap.get(stop);
        
        if(temp.reportSet.has(send)){
            continue;
        }
        temp.reportSet.add(send);

    }
    
    
    // 정지 결과 발송 메일 준비, 수신인 설정
    for (const user of userMap.values()){
        //K이상 건 접수시
        if(user.reportSet.size >= k){
            user.reportSet.forEach(id=> {
                userMap.get(id).mailCount++;
            })
        }
    }
    
    const answer = id_list.map(id => userMap.get(id).mailCount);
    
    return answer;
}