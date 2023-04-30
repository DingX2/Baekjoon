#11003
import sys
input = sys.stdin.readline

from collections import deque
mydeque = deque()

N, L = map(int,input().split())
lists = list(map(int,input().split()))


for i in range(N):
    while mydeque and mydeque[-1][0] > lists[i]:
        mydeque.pop()
    mydeque.append((lists[i],i))
    if mydeque[0][1]<= i-L:
        mydeque.popleft()
    print(mydeque[0][0],end=" ")