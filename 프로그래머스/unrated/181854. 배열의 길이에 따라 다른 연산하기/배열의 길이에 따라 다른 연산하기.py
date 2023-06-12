def solution(arr, n):
    flag = 0
    if len(arr) %2==0:
        flag = 1    
    for i in range(0,len(arr),2):
        arr[i+flag]+=n
    return arr