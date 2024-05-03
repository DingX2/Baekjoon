def solution(myString, pat):
    return myString[0:myString.rfind(pat)+len(pat)]