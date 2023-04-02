def solution(array, n):
    answer = 0
    min = 100
    
    array.sort()
    for i in array[::-1]:
        new = abs(i-n)
        if (new <= min):
            min = new
            answer = i
            
    return answer