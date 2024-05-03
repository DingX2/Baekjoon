def solution(arr, queries):
    answer = []
    for s, e, k in queries:
        num = 10000001;
        for i in range(s, e+1):
            if(arr[i] > k and arr[i] < num):
                num = arr[i]
        if num == 10000001 : num = -1
        answer.append(num)
    return answer