def solution(n, m, section):
    answer = 0
    last_painted = 0 
    section.sort()
    
    for s in section:
        if last_painted >= s:
            continue 
        
        answer += 1
        last_painted = s + m - 1  
    
    return answer
