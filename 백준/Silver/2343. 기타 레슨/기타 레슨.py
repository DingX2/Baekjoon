import sys

input = sys.stdin.readline


def solution():
    N, M = map(int, input().split())
    bluerays = list(map(int, input().split()))
    answer = 0

    start = max(bluerays)
    end = sum(bluerays)

    while start <= end:
        cnt = 1
        mid = (start + end) // 2
        temp = 0
        for blueray in bluerays:
            if temp + blueray > mid:
                cnt += 1
                temp = 0
            temp += blueray

        if cnt > M:
            start = mid + 1
        elif cnt <= M:
            end = mid - 1
            answer = mid

    print(answer)


solution()
