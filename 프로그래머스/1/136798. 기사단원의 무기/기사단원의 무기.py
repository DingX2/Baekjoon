import math

#약수구하기
def getFactors(number):
    cnt = 0
    for i in range(1, int(math.sqrt(number))+1):
        if math.sqrt(number) == i:
            cnt += 1
            continue
        if number % i == 0:
            cnt += 2
    return cnt
        
    
def solution(number, limit, power):
    answer = 0
    for i in range(1, number+1):
        factor = getFactors(i)
        if factor > limit:
            answer += power
        else:
            answer += factor
    return answer