import sys
from collections import deque

input = sys.stdin.readline


def solution():
    answer = []
    N, M, K, X = map(int, input().split(" "))
    graph = [[] for i in range(N + 1)]
    visited = [False] * (N + 1)
    distance = [0] * (N + 1)
    for _ in range(M):
        S, E = map(int, input().split())
        graph[S].append(E)

    # depth: K bfs(x)
    queue = deque([X])
    visited[X] = True
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if distance[v] > K:
                break
            if not visited[i]:
                distance[i] = distance[v] + 1
                if distance[i] == K:
                    answer.append(i)
                queue.append(i)
                visited[i] = True

    if not answer:
        return print(-1)
    for i in sorted(answer):
        if isinstance(i, int):
            print(i)
        else:
            print(*i)


solution()
