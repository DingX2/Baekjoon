#1874
import sys
input = sys.stdin.readline

N= int(input())
A = [0]*N

for i in range(N):
    A[i] = int(input())
stack = []
num =1
result = True
answer = ""

for i in range(len(A)):
    new = A[i]
    if num <= new:
        while num <= new:
            stack.append(num)
            answer+='+\n'
            num += 1

        stack.pop()
        answer += '-\n'

    else:
        n = stack.pop()
        if n > new:
            result = False
            print("NO")
            break
        else:
            answer+='-\n'

if result:
    print(answer)