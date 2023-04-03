def solution(s):
    answer = ''

    lists = [0 * i for i in range(26)]

    for i in s:
        lists[ord(i) - 97] += 1

    for j in range(len(lists)):
        if (lists[j] == 1):
            answer += chr(j + 97)
    return answer
