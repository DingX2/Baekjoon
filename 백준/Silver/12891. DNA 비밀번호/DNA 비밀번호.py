#12891
import sys
input = sys.stdin.readline
ACGT = [0]*4
ACGT_T = [0]*4
checkSecret = 0
cnt =0

def myadd(c):
    global ACGT, ACGT_T, checkSecret
    if c == 'A':
        ACGT_T[0] +=1
        if ACGT_T[0] == ACGT[0]:
            checkSecret+=1
    elif c == 'C':
        ACGT_T[1] += 1
        if ACGT_T[1] == ACGT[1]:
            checkSecret +=1
    elif c == 'G':
        ACGT_T[2] += 1
        if ACGT_T[2] == ACGT[2]:
            checkSecret += 1
    elif c == 'T':
        ACGT_T[3] += 1
        if ACGT_T[3] == ACGT[3]:
            checkSecret += 1


def myremove(c):
    global ACGT, ACGT_T, checkSecret

    if c == 'A':
        if ACGT_T[0] == ACGT[0]:
            checkSecret -= 1
        ACGT_T[0] -= 1
    elif c == 'C':
        if ACGT_T[1] == ACGT[1]:
            checkSecret -=1
        ACGT_T[1] -= 1
    elif c == 'G':
        if ACGT_T[2] == ACGT[2]:
            checkSecret -= 1
        ACGT_T[2] -= 1
    elif c == 'T':
        if ACGT_T[3] == ACGT[3]:
            checkSecret -= 1
        ACGT_T[3] -= 1

S, P = map(int,input().split())
lists = input()
ACGT = list(map(int,input().split()))

for i in range(4):
    if ACGT[i] == 0:
        checkSecret += 1

for i in range(P):
    myadd(lists[i])
if checkSecret == 4:
    cnt += 1

for i in range(P,S):
    j = i-P
    myadd(lists[i])
    myremove(lists[j])
    if checkSecret == 4:
        cnt += 1

print(cnt)