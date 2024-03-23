def solution(n):
    ary = list(str(n))
    ary.sort(reverse=True)
    
    return int("".join(ary))