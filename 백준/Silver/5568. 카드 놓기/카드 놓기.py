import sys

input = sys.stdin.readline


def solution():
    n = int(input())
    k = int(input())
    ary = []
    duplicate_check = set()
    for _ in range(n):
        ary.append(int(input()))

    ary.sort()

    def dfs(v, current_idx, depth, before):
        if not visited[current_idx]:
            depth += 1
            visited[current_idx] = True
            before = int(str(before) + str(v))
        if depth >= k:
            duplicate_check.add(before)
            visited[current_idx] = False
            return before
        # 다음 탐색
        for next_idx, x in enumerate(ary):
            if not visited[next_idx]:
                dfs(x, next_idx, depth, before)
        visited[current_idx] = False

    visited = [False] * (n + 1)
    for idx, x in enumerate(ary):
        depth = 0
        dfs(x, idx, depth, "")

    # print(sorted(duplicate_check))
    print(len(duplicate_check))


solution()
