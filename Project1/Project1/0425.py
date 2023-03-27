import math
import sys

def parallelQ(m1, m2): # 두 직선이 평행한 경우 참을 반환
    if math.fabs(m1[1]) <= sys.float_info.epsilon and math.fabs(m2[1]) <= sys.float_info.epsilon:
        return True
    elif math.fabs(m1[1]) <= sys.float_info.epsilon or math.fabs(m2[1]) <= sys.float_info.epsilon:
        return False
    else:
        return math.fabs(m1[0]/m1[1] - m2[0]/m2[1]) <= sys.float_info.epsilon

def same_lineQ(m1, m2): # 두 직선이 같은 경우 참을 반환
    return parallelQ(m1, m2) and math.fabs(m1[2]/m1[1] - m2[2]/m2[1]) <= sys.float_info.epsilon

def intersection_point(m1, m2): # 두 직선이 만나는 점을 찾음
    p = [0.0, 0.0] # 초기화
    if same_lineQ(m1, m2):
        print("Warning: identical lines.\n")
    elif parallelQ(m1, m2):
        print("Error: Distinct parallel lines do not intersect.\n")
    else:
        p[0] = (m2[1] * m1[2] - m1[1] * m2[2]) / (m2[0] * m1[1] - m1[0] * m2[1])
        if math.fabs(m1[1]) > sys.float_info.epsilon: # 수직 선의 경우
            p[1] = - (m1[0] * p[0] + m1[2]) / m1[1]
        else:
            p[1] = - (m2[0] * p[0] + m2[2]) / m2[1]
    return p

# 입력 받기
n = int(input())
lines = []
for i in range(n):
    line = list(map(float, input().split()))
    lines.append(line)

# 교차하는 점 찾기
for i in range(n-1):
    for j in range(i+1, n):
        if not parallelQ(lines[i], lines[j]): # 교차하는 경우
            p = intersection_point(lines[i], lines[j])
            print(f"({i+1},{j+1}) : ({p[0]:.1f}, {p[1]:.1f})")
