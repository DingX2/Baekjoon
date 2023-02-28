def solution(my_string):
    answer = ''
    my_string = my_string.lower()
    my_string = sorted(my_string)
    return ''.join(my_string)