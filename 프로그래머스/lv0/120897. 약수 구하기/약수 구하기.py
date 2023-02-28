def solution(n):
    answer = [1,]
    for i in range(2,(n+1)):
        if (n%i == 0):
            answer.append(i)
            continue
        
    return answer