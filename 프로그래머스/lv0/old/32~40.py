import math


def solution(n):
    answer = 0
    for i in range(n+1):
        if (n % (i+1) == 0):
            answer += 1
    return answer


def solution(sides):
    index = 0
    sum = 0
    for i in range(len(sides)):
        sum += sides[i]
        if (sides[index] < sides[i]):
            index = i
    if (sides[index] < sum - sides[index]):
        return 1
    else:
        return 2


def solution(array):
    array.sort()
    answer = len(array)/2
    if ((answer) % 2 == 0):  # 짝수
        return (array[answer]+array[answer+1]/2)
    else:  # 홀수
        return array[math.trunc(answer)]


def solution(n):
    answer = 0
    n = list(str(n))
    for i in range(len(n)):
        answer += int(n[i])

    return answer


def solution(my_string):
    answer = 0
    # list(my_string)
    for i in my_string:
        if (i.isalpha() == True):
            continue
        else:
            answer += int(i)
    return answer


def solution(str1, str2):
    if (str1.find(str2) == -1):
        return 2
    else:
        return 1


def solution(my_string):
    arr = ['a', 'e', 'i', 'o', 'u']
    for i in arr:
        my_string = my_string.replace(i, "")
    return my_string


def solution(hp):
    answer = 0
    answer += hp // 5
    hp %= 5
    answer += hp // 3
    hp %= 3
    answer += hp // 1
    return answer


# 40 제곱수 판별하기


def solution(n):
    a = math.sqrt(n)
    if n == math.pow(a, 2):
        return 1
    else:
        return 2


# case 7,8 오류


def solution(n):
    a = int(math.sqrt(n))
    if n == math.pow(a, 2):
        return 1
    else:
        return 2
