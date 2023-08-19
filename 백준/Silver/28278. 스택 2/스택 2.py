import sys
import sys
input = sys.stdin.readline

N = int(input())
ary = []
def stack(cmd, X):
    if cmd == 1:
        ary.append(X)
    elif cmd == 2:
        if len(ary) != 0:
            print(ary.pop())
        else:
            print(-1)
    elif cmd == 3:
        print(len(ary))
    elif cmd == 4:
        if len(ary) == 0:
            print(1)
        else:
            print(0)
    elif cmd == 5:
        if len(ary) != 0:
            print(ary[-1])
        else:
            print(-1)

for i in range(N):
    cmd = list(map(int,input().strip().split()))
    if len(cmd) == 1:
        stack(cmd[0], 0)
    else:
        stack(cmd[0], cmd[1])
