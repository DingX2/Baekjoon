import sys
import math
sys.setrecursionlimit(10**7)

def solution(n):
    max = 0
    for i in range(1,11): #1~10
        if (fac(i)<=n):
            max = i
    return max

def fac(n):
    return math.factorial(n)
