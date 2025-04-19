def convertToMM(time):
    h, m = map(int, time.split(":"))
    return h * 60 + m

def solution(plans):
    answer = []
    # 시간 순 정렬
    plans = sorted([[name, convertToMM(start), int(duration)] for name, start, duration in plans], key=lambda x: x[1])
    
    stack = []
    
    for i in range(len(plans) - 1):
        name, start, playtime = plans[i]
        next_start = plans[i + 1][1]
        gap = next_start - start
        
        if playtime <= gap:
            # 다 끝낼 수 있다면
            answer.append(name)
            gap -= playtime
            # 중단된 작업 처리
            while gap > 0 and stack:
                s_name, s_time = stack.pop()
                if s_time <= gap:
                    answer.append(s_name)
                    gap -= s_time
                else:
                    stack.append((s_name, s_time - gap))
                    break
        else:
            # 못 끝냄 → 남은 거 스택에
            stack.append((name, playtime - gap))
    
    # 마지막 작업은 무조건 끝남
    answer.append(plans[-1][0])
    
    # 남은 스택 처리
    while stack:
        answer.append(stack.pop()[0])
        
    return answer
