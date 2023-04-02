def solution(numer1, denom1, numer2, denom2):
    answer = []
    
    # 두 분모를 같게 해준다.
    
    answer.append((numer1*denom2) + (numer2*denom1))
    answer.append((denom1*denom2))
    
    gcd1 = gcd(answer[0],answer[1])
    for i in range(len(answer)):
        answer[i]/=gcd1
    
    return answer

# 라이브러리 사용 x
def gcd(a, b):
    for i in range(min(a, b), 0, -1):
        if a % i == 0 and b % i == 0:
            return i