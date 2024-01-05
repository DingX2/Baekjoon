def solution(x, n):
    answer = [x]
    for i in range(1,n):
        answer.append(answer[i-1]+x)
    
    return answer