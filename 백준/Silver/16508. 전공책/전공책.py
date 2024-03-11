import sys
from collections import defaultdict

input = sys.stdin.readline


def dfs(depth, temp_cost, text):
    global my_dict, str_dict, visited, result
    # 모든 글자가 있어 조건을 충족한다면
    if all(str_dict[char] >= text.count(char) for char in text):
        result = min(result, temp_cost)
        return

    if temp_cost >= result:
        return

    # DFS
    for idx, book in enumerate(my_dict):
        if not visited[idx]:
            visited[idx] = True  # 넣는다
            # 책을 넣었으면 word 모든 문자 증가
            for letter in book[1]:
                str_dict[letter] += 1
            # dfs
            dfs(depth + 1, temp_cost + book[0], text)

            visited[idx] = False  # 백트래킹 책 빼기 word 모든 문자 감소
            for letter in book[1]:
                str_dict[letter] -= 1


def solution():
    global my_dict, str_dict, answer, visited, result
    result = float("inf")

    my_dict = []
    str_dict = defaultdict(int)
    answer = None

    text = input().strip()
    N = int(input())
    visited = [False] * (N + 1)

    for i in range(N):
        # 35000 COMPUTERARCHITECTURE
        temp_cost, word = input().split()
        my_dict.append((int(temp_cost), word))

    temp_cost = 0

    # DFS
    answer = dfs(0, temp_cost, text)
    print(result if result != float("inf") else -1)


solution()
