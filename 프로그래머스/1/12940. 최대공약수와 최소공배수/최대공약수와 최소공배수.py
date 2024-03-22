import math

def gcd(n, m):
    return gcd(m, n%m) if m else n

def solution(n, m):
    answer = []
    answer.append(gcd(n,m))
    answer.append(n*m//math.gcd(n,m))
    return answer