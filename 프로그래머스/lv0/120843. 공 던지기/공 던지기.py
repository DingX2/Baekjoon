def solution(numbers, k):
 
    answer = 1
    answer += (k-1)*2 % len(numbers)
    
    return answer
'''
    for i in range(1,k):
        if(answer==len(numbers)) : #4번이 4명일때 던지면 2번에게
            answer = 2
        else:
            answer+=2
            answer%=len(numbers)
        print(answer)
'''  