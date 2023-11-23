def solution(survey, choices):
    answer = ''
    
    first = 0
    second = 0
    third = 0
    fourth = 0
    
    for i in range(len(choices)):
        if survey[i] == "RT" :
            first+= choices[i] - 4
        elif survey[i] == "TR":
            first-= choices[i] - 4
        elif survey[i] == "CF":
            second += choices[i] -4
        elif survey[i] == "FC":
            second -= choices[i] -4
        elif survey[i] == "JM":
            third += choices[i]-4
        elif survey[i] == "MJ":
            third -= choices[i]-4
        elif survey[i] == "AN":
            fourth += choices[i]-4
        elif survey[i] == "NA":
            fourth -= choices[i]-4
            

            
    answer = answer + 'R' if first <= 0 else answer + 'T' 
    answer = answer + 'C' if second <= 0 else answer + 'F'
    answer = answer + 'J' if third <= 0 else answer + 'M'
    answer = answer + 'A' if fourth <= 0 else answer + 'N'
    print(first,second,third,fourth)
    
    return answer