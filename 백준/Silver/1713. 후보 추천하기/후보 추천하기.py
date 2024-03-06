import sys

input = sys.stdin.readline


def solution():
    answer = []
    candidates = {}
    time = 0
    N = int(input())
    M = int(input())
    recommend = list(map(int, input().split()))

    for x in recommend:
        time += 1
        cost = 0
        if x not in candidates:
            cost = 1
        else:
            cost, phototime = candidates.get(x)
            cost += 1
            candidates[x] = (cost, phototime)
            continue

        if len(candidates) >= N:  # 후보자의 수가 N칸 이상이면
            if x in candidates:
                continue
            else:
                min_student = min(
                    candidates, key=lambda k: (candidates[k][0], candidates[k][1])
                )
            # 가장 낮은 cost를 가진 학생의 정보를 업데이트
            del candidates[min_student]

        candidates[x] = (cost, time)

    print(*sorted(candidates))


solution()
