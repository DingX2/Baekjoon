import sys

input = sys.stdin.readline


def solution():
    N = int(input())
    A = list(map(int, input().split()))
    B = list(map(int, input().split()))
    answer = 0
    B_list = {}
    origin_B = B.copy()

    A.sort(reverse=True)
    B.sort()
    for i in range(len(A)):
        B_list[B[i]] = A[i]

    for i in range(len(A)):
        answer += A[i] * B[i]

    # A배열 돌려놓기
    # B배열 돌려놓기
    A.clear()
    B.clear()
    for x in origin_B:
        B.append(x)
        A.append(B_list[x])

    print(answer)
    # print(A, B)


solution()
