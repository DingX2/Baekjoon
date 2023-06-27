def solution(players, callings):
    dic_str_i = {str : i for i,str in enumerate(players)}
    dic_i_str = {i : str for i,str in enumerate(players)}
    answer = []
        
    for i in range(len(callings)):
        j = dic_str_i.get(callings[i]) # 등수가 나온다
        dic_str_i[dic_i_str.get(j-1)] = j
        dic_str_i[callings[i]] = j-1
        
        dic_i_str[j] = dic_i_str.get(j-1)
        dic_i_str[j-1] = callings[i]
        
    #등수순으로 출력해야함
    for i in range(len(dic_i_str)):
        answer.append(dic_i_str.get(i))

    return answer