def solution(num_list, n):
    answer = []
    
    count = 0
    
    for i in range(round(len(num_list)/n)):
        if(count >= len(num_list)):
             break
        answer.append(num_list[i*n:i*n+n])
        count += 1

    
    return answer