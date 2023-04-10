def solution(my_str, n):
    answer = []
    buf = []
    cnt = 0

    for i in my_str:
        cnt += 1
        buf.append(i)
        if (cnt % n == 0) :
            buf = "".join(buf)
            answer.append(buf)
            buf = []

    if (cnt % n != 0 ):
        buf = "".join(buf)
        answer.append(buf)
    return answer