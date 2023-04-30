#1940
import sys
input = sys.stdin.readline
N = int(input())
M = int(input())
lists = list(map(int,input().split()))

lists.sort()
cnt = 0
S = 0
E = N-1

while S < E:
    if lists[S] + lists[E] < M:
        S += 1
    elif lists[S] + lists[E] > M:
        E -= 1
    else:
        cnt += 1
        E -= 1
        S += 1

print(cnt)