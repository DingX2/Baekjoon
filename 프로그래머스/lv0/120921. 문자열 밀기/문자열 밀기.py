def solution(A, B):
    if A in B+B:
        return (B + B).index(A)
    else:
        return -1