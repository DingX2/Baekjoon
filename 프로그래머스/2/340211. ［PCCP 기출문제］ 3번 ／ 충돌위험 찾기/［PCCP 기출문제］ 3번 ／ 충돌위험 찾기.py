from collections import deque, defaultdict

def solution(points, routes):
    #상하 > 좌우로 먼저 이동
    #병렬 큐를 사용하여 위험한 상황을 count
    queue = deque()
    cols = list(zip(*routes))
    answer = 0
    
    # routes[], currentX, currentY > 도달하면 routes에서 빼버리기
    
    def move_to_next (arrivalPoints, current_pos):
        cX, cY = current_pos
        if not arrivalPoints:
            return [],  (cX, cY)
        target = points[arrivalPoints[0] -1]
        nX, nY = cX, cY
        
        if(target[0] < cX): nX = cX-1
        elif (target[0] > cX): nX = cX+1
        elif (target[1] < cY): nY = cY-1
        elif (target[1] > cY): nY = cY+1
        else: 
            return move_to_next(arrivalPoints[1:], (cX,cY))
        return arrivalPoints, (nX, nY)
    
    temp = []
    for route in routes:
        point = points[route[0]-1]
        temp.append((route[1:], point))
    queue.append(temp)
    
    while(len(queue)>0):
        one_move = queue.popleft()
        
        #충돌 검사여부
        moves_list = (list(zip(*one_move))[1])
        if not moves_list:
            continue 
            
        coord_counter = defaultdict(int)
        for move in moves_list:
            key = tuple(move)
            coord_counter[key] += 1
        #2개이상이면 충돌이므로 answer에 count
        collision_count = sum(1 for count in coord_counter.values () if count > 1)
        collsions = [key for key, count in coord_counter.items() if count > 1]
        
        # print("충돌:", collision_count, collsions)
        answer += collision_count
        
        moves_list = []
        
        #이동
        for item in one_move:
            # print(item[0], item[1])
            arrivalPoints, (nX, nY) = move_to_next(item[0],item[1])
            # print(arrivalPoints,": next:", [nX,nY])
            
#            #상하>좌우 무브
                
#            # 위치 확인 충돌 검사여부
            if arrivalPoints:
                moves_list.append((arrivalPoints, (nX, nY)))
    
        # print(moves_list)
        # queue.append(moves)
        
        if moves_list:
            queue.append(moves_list)
            
    return answer