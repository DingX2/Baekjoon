def solution(s):
    answer = 0
    answers = []
    nums = []
    dic = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    for x in s:
        if x.isdigit():
            answers.append(x)
        else:
            nums.append(x)
            if ''.join(nums) in dic.values():
                for key, value in dic.items():
                    if value == ''.join(nums):
                        answers.append(str(key))
                        nums = []

    answer = int(''.join(answers))
    return answer