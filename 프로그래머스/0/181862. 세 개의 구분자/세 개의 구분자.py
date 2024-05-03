def solution(myStr):
    result = [s for s in myStr.replace('b', 'a').replace('c', 'a').split('a') if s]
    return result if result else ["EMPTY"]
