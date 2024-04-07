def solution(k, tangerine):
    answer = 0
    count = 0
    my_dict = dict()
    for item in tangerine:
        if item in my_dict:
            my_dict[item] += 1
        else:
            my_dict[item] = 1
    sorted_dict = sorted(my_dict.items(), key=lambda x: x[1], reverse=True)
    for item in sorted_dict:
        if count < k:
            answer += 1
            count += item[1]
        else: break
    return answer