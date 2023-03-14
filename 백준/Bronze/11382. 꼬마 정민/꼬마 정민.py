
def main2(data):
    answer = 0
    for number  in range(len(data)):
        answer = answer + data[number]
    return answer

data = list(map(int,input().split()))
print(main2(data))
