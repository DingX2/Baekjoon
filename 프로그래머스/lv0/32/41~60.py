# 가위 바위 보
import math


def solution(rsp):
    answer = []
    for i in rsp:
        if (i == '2'):
            answer.append('0')
        elif i == '0':
            answer.append('5')
        else:
            answer.append('2')
    answer = ''.join(answer)
    return answer


# 세균 증식
def solution(n, t):
    for i in range(t):
        n *= 2
    return n


# 암호 해독
def solution(cipher, code):
    answer = ''
    for i in range(code-1, len(cipher), code):
        answer += cipher[i]
    return answer


# 대문자와 소문자
def solution(my_string):
    answer = ''
    for i in my_string:
        if (i.isupper() == True):
            answer += i.lower()
        else:
            answer += i.upper()
    return answer


# 문자열 정렬하기 (1)
def solution(my_string):
    answer = []
    for i in my_string:
        if (i.isalpha() != True):
            answer.append(int(i))
    answer.sort()
    return answer


# 직각삼각형 출력하기
n = int(input())
for i in range(n):
    for j in range(i+1):
        print('*', end='')
    print('')


# n의 배수 고르기
def solution(n, numlist):
    answer = []
    for i in numlist:
        if (i % n == 0):
            answer.append(i)
    return answer


# 주사위의 개수
def solution(box, n):
    answer = 1
    answer *= box[0] // n
    answer *= box[1] // n
    answer *= box[2] // n
    return answer


# 인덱스 바꾸기
def solution(my_string, num1, num2):
    answer = ''
    li = []
    li = list(my_string)

    li[num1], li[num2] = li[num2], li[num1]

    my_string = ''.join(li)
    return my_string


# 최댓값 만들기 (2)
def solution(numbers):
    answer = 0
    numbers.sort()

    max1 = numbers[-1]*numbers[-2]
    max2 = numbers[0] * numbers[1]

    if max1 > max2:
        return max1
    else:
        return max2


# 가장 큰 수 찾기
def solution(array):
    answer = []
    answer.append(max(array))
    answer.append(array.index(answer[0]))
    return answer


# 배열 회전시키기
def solution(numbers, direction):
    answer = []
    if (direction == 'right'):
        answer.append(numbers[-1])
        for i in numbers[0:len(numbers)-1]:
            answer.append(i)
    else:  # left
        for i in numbers[1:len(numbers)]:
            answer.append(i)
        answer.append(numbers[0])
    return answer


# 외계행성의 나이
def solution(age):
    answer = ''
    arr = list(str(age))
    for i in range(len(arr)):
        answer += chr(int(arr[i])+97)

    return answer


# 피자 나눠 먹기 (2)


def solution(n):
    # 6개 피자랑 n사람의 최소 공배수?
    # 6 x n/ 최대공약수(GCD)
    # A B A%B = B a%b
    answer = 0
    answer = n*6 / math.gcd(6, n) / 6

    return answer


# 약수 구하기
def solution(n):
    answer = [1,]
    for i in range(2, (n+1)):
        if (n % i == 0):
            answer.append(i)
            continue

    return answer


# 369게임
def solution(order):
    answer = 0
    lists = list(str(order))
    for i in lists:
        i = int(i)
        if (i != 0 and i % 3 == 0):
            answer += 1
    return answer


# 숫자 찾기
def solution(num, k):
    answer = 0
    num = str(num)
    k = str(k)
    answer = num.find(k)+1
    if (answer != 0):
        return answer
    else:
        return -1


# 문자열 정렬하기 (2)
def solution(my_string):
    answer = ''
    my_string = my_string.lower()
    my_string = sorted(my_string)
    return ''.join(my_string)


# 합성수 찾기
def solution(n):
    answer = 0
    cnt = 0

    for i in range(1, n+1):  # 1~10
        cnt = 0
        for j in range(1, i+1):  # 합성수 개수
            if (i % j == 0):
                cnt += 1
            if (cnt >= 3):
                answer += 1  # 약수의 개수
                cnt = 0
                print(f"합성수: {i}, {j}")
                break

    return answer


# 중복된 문자 제거
def solution(my_string):
    answer = ''
    lists = list(my_string)
    answer = []

    idx = 0
    for j in my_string:  # find 맨 처음 반환
        if (my_string.find(j) == idx):
            answer.append(j)
        idx += 1

    answer = ''.join(answer)
    return answer
