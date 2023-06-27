def solution(name, yearning, photo):
    dic = dict(zip(name, yearning))
    answer = []
    for i in range(len(photo)):
        sum = 0
        score = 0
        for j in range(len(photo[i])):
            score = dic.get(photo[i][j])
            if score is not None:
                sum += score
        answer.append(sum)
    return answer