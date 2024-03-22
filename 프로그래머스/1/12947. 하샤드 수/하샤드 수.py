def solution(x):
    answer = True
    count = 0
    list_x = list(str(x))
    
    for number in list_x: #x -> number로 수정, 지역변수가 아님
        count += int(number)  
    
    print(int(x))
    return True if int(x) % count == 0 else False