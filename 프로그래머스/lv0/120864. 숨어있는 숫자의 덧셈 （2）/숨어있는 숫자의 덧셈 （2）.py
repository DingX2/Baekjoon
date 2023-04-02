import math

def solution(my_string):
    answer = 0
    buffer = []
    count = 0
    my_string+='a' #아무 글자나 추가해서 늘리기
    for i in my_string:

        #다음번이 숫자인지 확인 해야한다.
        if (i.isdigit()):
            count += 1
            buffer.append(i)
            #buffer += int(i) * int(math.pow(10, count) // 10)
        else:
            if(count != 0):
                buffer = "".join(buffer)
                answer += int(buffer)
                buffer = []
            count = 0


    return answer
