def solution(s):
    answer = 0
    buffer = []
    buffer = s.split()
    print(buffer)

    for i in range(len(buffer)):

        if (i == len(buffer) - 1):
            if (buffer[i]!='Z'):
                answer += int(buffer[i])
                print(buffer[i])
        else:
            if (buffer[i + 1] != 'Z' and buffer[i] != 'Z'):
                print(buffer[i])
                answer += int(buffer[i])
            else:
                continue

    return answer
