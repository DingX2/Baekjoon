import sys

input = sys.stdin.readline
sys.setrecursionlimit(10**6)


def solution():
    M, N, K = map(int, input().split())
    ary = [[0 for i in range(N + 1)] for i in range(M + 1)]
    depths = []
    # 상우하좌 (시계방향)
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]

    # 직사각형 채우기
    for _ in range(K):
        x1, y1, x2, y2 = map(int, input().split())
        for i in range(y1, y2):
            for j in range(x1, x2):
                ary[i][j] = 1

    def dfs(ny, nx, ary, depth):
        if 0 <= ny < M and 0 <= nx < N and ary[ny][nx] == 0:
            ary[ny][nx] = 1
            depth += 1
            for i in range(4):
                depth = dfs(ny + dy[i], nx + dx[i], ary, depth)
        return depth

    for i in range(M):
        for j in range(N):
            if ary[i][j] == 0:
                depth = 0
                depths.append(dfs(i, j, ary, depth))

    print(len(depths))
    print(*sorted(depths))


solution()
