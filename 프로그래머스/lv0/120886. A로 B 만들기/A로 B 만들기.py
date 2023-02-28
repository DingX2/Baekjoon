def solution(before, after):
    answer = 1
    before = sorted(before)
    after = sorted(after)
    if before == after:
        return 1
    else:
        return 0