def solution(s):
    answer = ''
    flag = 0
    
    for idx_1, str in enumerate(s):
        # 문자가 시작되면 flag
        if str == " ":
            flag = -1
        if flag % 2 == 0:
            answer += str.upper()
        else:
            answer += str.lower()
        flag += 1
                
    return answer


