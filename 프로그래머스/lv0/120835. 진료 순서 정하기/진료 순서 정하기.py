def solution(emergency):
    answer = []
    index = emergency.copy()
    emergency.sort(reverse=True)

    for i in index:
        answer.append(emergency.index(i)+1)

    return answer