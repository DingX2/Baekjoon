def solution(my_string):
    answer = 0
    buf = ""

    for i in my_string[::-1]:
        if i.isdigit():
            buf = i + buf
        elif i == '+':
            answer += int(buf)
            buf = ""
        elif i == '-':
            answer -= int(buf)
            buf = ""
    answer += int(buf)
    return answer
