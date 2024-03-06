import sys

input = sys.stdin.readline


def solution():
    stick, cnt = 64, 0
    X = int(input())
    stick_sum = 0
    while stick_sum != X:
        if stick_sum + stick <= X:
            stick_sum += stick
            cnt += 1
        stick /= 2

    print(cnt)


solution()
