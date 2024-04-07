def solution(s):
    answer = ''
    ary = []
    for item in s.split(" "):
        ary.append(int(item))
    ary.sort()
    answer = str(ary[0]) + " " + str(ary[-1])
    return answer