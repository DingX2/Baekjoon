import sys

input = sys.stdin.readline
INF = int(1e9)


def solution():
    N = int(input())
    graph = [[INF] * (N + 1) for _ in range(N + 1)]

    # for a in range(1, N + 1):
    #     for b in range(1, N + 1):
    #         if a == b:
    #             graph[a][b] = 0

    for i in range(N):
        row = list(map(int, input().split()))
        for j in range(N):
            # if row[j] = 0이면 INF을 넣어야함
            graph[i + 1][j + 1] = INF if row[j] == 0 else row[j]

    # 플로이드 워셜 알고리즘
    for k in range(1, N + 1):
        for a in range(1, N + 1):
            for b in range(1, N + 1):
                graph[a][b] = min(graph[a][k] + graph[k][b], graph[a][b])

    for i in range(1, N + 1):
        for j in range(1, N + 1):
            if graph[i][j] != INF:
                print(1, end=" ")
            else:
                print(0, end=" ")
        print()


solution()
