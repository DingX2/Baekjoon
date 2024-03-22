def solution(n):
    answer = []
    for x in list(str(n)):
        answer.insert(0,int(x))
    return answer