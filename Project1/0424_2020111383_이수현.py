#2020111383 이수현

import math
import sys

# ary = [[]]
# for i in range(3):
#     ary[i][0] = int(input().split()[0])
#     ary[i][1] = int(input().split()[1])
# ary = []
# temp = list(map(int, input().split()))
# for i in range(3):
#     ary.append([temp[i*2], temp[i*2+1]])
#
#
# def parallelQ(m1,m2):
#     return(math.fabs((m1[0]/m1[1])-(m2[0]/m2[1]))<=sys.float_info.epsilon)
#
# def same_lineQ(m1,m2):
#     return(parallelQ(m1,m2)and math.fabs((m1[2]/m1[1])-(m2[2]/m2[1])) <= sys.float_info.epsilon)
#


# ary = []
# temp = list(map(int, input().split()))
# for i in range(3):
#     ary.append([temp[i*2], temp[i*2+1]])

# def parallelQ(m1, m2):
#     return(math.fabs((m1[0]/m1[1])-(m2[0]/m2[1]))<=sys.float_info.epsilon)
#
# def same_lineQ(m1, m2, m3):
#     return parallelQ(m1, m2) and parallelQ(m1, m3)
#
# print(ary)
# if same_lineQ(ary[0], ary[1], ary[2]):
#     print("yes")
# else:
#     print("no")


#1
import sys
import math

p = []
ary = []
temp = list(map(int, input().split()))
for i in range(3):
    ary.append([temp[i*2], temp[i*2+1]])
def parallelQ(m1, m2): # 두 직선이 평행한 경우 참을 반환
    if math.fabs(m1[1]) <= sys.float_info.epsilon and math.fabs(m2[1]) <= sys.float_info.epsilon:
        return True
    elif math.fabs(m1[1]) <= sys.float_info.epsilon or math.fabs(m2[1]) <= sys.float_info.epsilon:
        return False
    else:
        return math.fabs(m1[0]/m1[1] - m2[0]/m2[1]) <= sys.float_info.epsilon

def same_lineQ(m1, m2): # 두 직선이 같은 경우 참을 반환
    return parallelQ(m1, m2) and math.fabs(m1[2]/m1[1] - m2[2]/m2[1]) <= sys.float_info.epsilon

def slope(line):
    if math.fabs(line[1]) <= sys.float_info.epsilon:
        return [sys.float_info.max, 0]
    else:
        return [-line[0] / line[1], -line[2] / line[1]]

def intersection_point(m1, m2): # 두 직선이 만나는 점을 찾음 */
    p = [0.0, 0.0] #초기화
    if same_lineQ(m1, m2):
        print("Warning: identical lines.\n")
        p = [0.0, 0.0]
    if parallelQ(m1, m2):
        print("Error: Distinct parallel lines do not intersect.\n")

    p[0] = ((m2[1]*m1[2] - m1[1]*m2[2]) / (m2[0] * m1[1] - m1[0] * m2[1]))
    if math.fabs(m1[1]) > sys.float_info.epsilon: # 수직 선의 경우*/
        p[1] = - (m1[0] * p[0] + m1[2] ) / m1[1]
    else:
        p[1] = - (m2[0] * p[0] + m2[2] ) / m2[1]

    return p

m1 = [ary[1][1] - ary[0][1], ary[1][0] - ary[0][0], ary[0][0]*ary[1][1] - ary[1][0]*ary[0][1]]
m2 = [ary[2][1] - ary[0][1], ary[2][0] - ary[0][0], ary[0][0]*ary[2][1] - ary[2][0]*ary[0][1]]

# print(ary)
# print(m1)
# print(m2)
if same_lineQ(m1, m2):
    print("Yes")
else:
    print("No")

# 두 직선이 만나는 점을 찾는 함수

#2
# 입력
N = int(input()) # 직선 개수
lines = [] # 각 직선의 정보를 저장할 리스트
for i in range(N):
    temp = list(map(float, input().split()))
    m = [temp[3] - temp[1], temp[2] - temp[0], temp[0]*temp[3] - temp[2]*temp[1]]
    lines.append(m)

print(lines)

# 교차하는 모든 점 찾기
for i in range(N):
    for j in range(i+1, N):
        p = intersection_point(lines[i], lines[j])
        #print(p)
        print("({},{}): ({}, {})".format(i+1, j+1, p[0], p[1]))


# 두 선분이 교차하는지 판단하는 함수
# 두 선분이 교차하는지 판단하는 함수
def is_intersect(x1, y1, x2, y2, x3, y3, x4, y4):
    # 벡터 외적 계산
    v1 = (x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)
    v2 = (x4-x3)*(y2-y3) - (y4-y3)*(x2-x3)
    v3 = (x2-x1)*(y3-y1) - (y2-y1)*(x3-x1)
    v4 = (x2-x1)*(y4-y1) - (y2-y1)*(x4-x1)

    # 서로 다른 부호인 경우 교차
    return (v1*v2 < 0) and (v3*v4 < 0)

# 수직선 교차 여부 계산
def is_vertical_intersect(x1, y1, x2, y2, x3, y3, x4, y4):
    if x1 == x2:  # 선분 1이 수직선인 경우
        x, y = x1, y3 + (y4-y3)/(x4-x3)*(x1-x3)
        if min(y1, y2) <= y <= max(y1, y2) and min(y3, y4) <= y <= max(y3, y4):
            return True
    elif x3 == x4:  # 선분 2가 수직선인 경우
        x, y = x3, y1 + (y2-y1)/(x2-x1)*(x3-x1)
        if min(y1, y2) <= y <= max(y1, y2) and min(y3, y4) <= y <= max(y3, y4):
            return True
    else:  # 두 선분이 모두 수직선이 아닌 경우
        return False


# 입력 받기
n = int(input()) # 선분 개수
lines = []
for i in range(n):
    x1, y1, x2, y2 = map(float, input().split())
    lines.append((x1, y1, x2, y2))
print(lines)


# 선분 교차 판정 후 출력
for i in range(n-1):
    for j in range(i+1, n):
        if is_vertical_intersect(lines[i][0], lines[i][1], lines[i][2], lines[i][3],
                                  lines[j][0], lines[j][1], lines[j][2], lines[j][3]):
            print((i+1, j+1))
        elif is_intersect(lines[i][0], lines[i][1], lines[i][2], lines[i][3],
                          lines[j][0], lines[j][1], lines[j][2], lines[j][3]):
            print((i+1, j+1))



'''
0 1 1 3 2 5

3
1.0 1.0 1.0 2.0
2.0 2.0 3.0 3.0
1.0 2.0 2.0 4.0

3
1.0 1.0 1.0 2.0
2.0 2.0 3.0 3.0
0.5 1.0 2.0 4.0
'''
