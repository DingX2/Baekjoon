import sys
input = sys.stdin.readline
N, M = map(int,input().split())
numbers = list(map(int, input().split()))
prefix_sum = []
remainder = [0]*M
temp = 0
cnt = 0

for i in numbers:
    temp = (temp+i)%M
    if(temp == 0): cnt+=1
    prefix_sum.append(temp)
    remainder[temp] += 1

for i in range(M):
    if remainder[i]>1:
        cnt += (remainder[i]*(remainder[i]-1) //2)
print(cnt)