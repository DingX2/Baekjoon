#1940
import sys
input = sys.stdin.readline
N = int(input())
lists = list(map(int,input().split()))

lists.sort()
cnt = 0

for K in range(N):
    S = 0
    E = N - 1
    while S < E:
        if lists[S] + lists[E] == lists[K]:
            if S != K and E !=K:
                cnt += 1
                break
            elif  S == K:
                S += 1
            elif E == K:
                E -= 1
        elif lists[S] + lists[E] <lists[K]:
            S += 1
        else:
            E -= 1


print(cnt)