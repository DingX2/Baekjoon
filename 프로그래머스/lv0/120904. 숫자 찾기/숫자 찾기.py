def solution(num, k):
    answer = 0
    num = str(num)
    k = str(k)
    answer = num.find(k)+1
    if (answer != 0):
        return answer
    else : return -1