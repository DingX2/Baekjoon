from itertools import permutations


def solution():
    N, M = map(int, input().split())
    arr = list(map(int, input().split()))
    arr.sort()

    answer = set(permutations(arr, M))

    for i in sorted(answer):
        print(*i)


solution()
