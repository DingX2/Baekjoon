def solution(i, j, k):
    answer = 0
    lists = []

    for m in range(i, j+1):
        for number in str(m):
            lists.append(number)
    answer = lists.count(str(k))


    return answer