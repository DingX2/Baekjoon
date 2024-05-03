def solution(strArr):
    count = dict()
    for item in strArr:
        if len(item) in count:
            count[len(item)] += 1
        else:
            count[len(item)] = 1
        
    return max(count.values())