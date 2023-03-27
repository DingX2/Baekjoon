

import sys
input = sys.stdin.readline
#N, K = map(int, input().split())
#A = list(map(int, input().split()))

def quickSort(S, E, K):
    global A
    if S<E:
        pivot = partition(S, E)
        if pivot == K:
            return
        elif K<pivot:
            quickSort(S, pivot -1, k)
        else:
            quickSort(pivot + 1, E, K)

def swap(i, j):
    global A
    temp = A[i]
    A[i] = A[j]
    A[j] = temp

def partition(S, E):
    global A

    if S+1 == E:
        if A[S] > A[E]:
            swap(S, E)
        return E

    M = (S + E) // 2
    swap(S, M)
    pivot = A[S]
    i = S + 1
    j = E
    while i <= j:
        while pivot < A[j] and j > 0:
            j = j-1
        while pivot > A[i] and i < len(A) - 1:
            i = i + 1
        if i <= j:
            swap(i, j)
            i = i + 1
            j = j - 1

    A[S] = A[j]
    A[j] = pivot
    return j

quickSort(0, N - 1, K - 1)
print(A[K - 1])