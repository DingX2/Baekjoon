def solution(n):
    answer = []
    p = []
    
    i = 2
    
    while i<=n:
        if n% i == 0: #나뉜다
            p.append(i)
            n = n//i
        else :
            i +=1
    
    print(p)
    
    for i in p:
        if i not in answer:
            answer.append(i)
            
    return answer