def solution(arr, queries):
    for s,e,k in queries:
        for index, i in enumerate(arr[s:e+1]):
            if s + index % k == 0: 
                arr[index] +=1 
    return arr