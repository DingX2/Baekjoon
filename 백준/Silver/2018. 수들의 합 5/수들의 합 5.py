#2018

N = int(input())

cnt = 1
S = 1
E = 1
sum = 1

while E != N:
    if sum < N:
        E +=1
        sum += E
    elif sum > N:
        sum -= S
        S += 1
    elif sum == N:
        cnt += 1
        E += 1
        sum += E

print(cnt)