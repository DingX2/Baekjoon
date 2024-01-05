def solution(array, commands):
    answer = []
    for i,j,k in commands:
        # i,j,k =idx
        # i, j, k = idx[0],idx[1],idx[2]
        new_array = []
        new_array= array[i-1:j]
        new_array.sort()
        answer.append(new_array[k-1])
        
    return answer