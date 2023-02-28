def solution(my_string):
    answer = ''
    lists = list(my_string)
    answer = []

    idx=0
    for j in my_string: #find 맨 처음 반환
        if (my_string.find(j) == idx):
            answer.append(j)
        idx+=1

    answer = ''.join(answer)
    return answer