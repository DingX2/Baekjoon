def solution(order):
    answer = 0
    lists = list(str(order))
    for i in lists:
        i = int(i)
        if(i!=0 and i%3 == 0):
             answer+=1
    return answer