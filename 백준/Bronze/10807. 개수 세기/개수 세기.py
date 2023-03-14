
data = int(input())
lists = list(map(int,input().split()))
v = int(input())

def main(data,lists,v):
    answer = 0
    for i in range(len(lists)):
        if v == lists[i]:
            answer += 1
    return answer


print(main(data,lists,v))