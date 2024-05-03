def solution(num_list):
    count = 0;
    while not all(x == 1 for x in num_list):
        for i in range(len(num_list)):
            while not num_list[i] == 1:
                if not num_list[i]%2:
                    num_list[i] /=2
                else:
                    num_list[i]= (num_list[i]-1)/2
                count+=1
    return count 