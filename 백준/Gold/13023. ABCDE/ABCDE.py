#13023
import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

N,M = map(int,input().split())
A = [ []for _ in range(N)]
visited = [False]*(N)
result = False

#graph
for _ in range(M):
    s, e = map(int,input().split())
    A[s].append(e)
    A[e].append(s)

def DFS(v,depth):
    global result
    if depth == 5:
        result = True
        return
    visited[v] = True
    for i in A[v]:
        if not visited[i]:
            DFS(i,depth+1)
    visited[v] = False

for i in range(N):
    if not visited[i]:
        DFS(i,1)
        if result : break

if result:
    print(1)
else:
    print(0)