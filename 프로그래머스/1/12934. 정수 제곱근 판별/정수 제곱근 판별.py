import math

def solution(n):
    m = math.sqrt(n)
    if n%m == 0:
        return math.pow((m+1),2)
    return -1