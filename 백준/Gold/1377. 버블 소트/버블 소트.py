import sys

def main():
    input = sys.stdin.readline
    N = int(input())

    lists = []
    lists3 = []
    for i in range(N):
        lists.append((int(input()),i))

    max = 0
    lists = sorted(lists)

    # list의 변경을 확인
    for i in range(N):
        if max < lists[i][1] - i:
            max = lists[i][1] - i


    print(max+1)

def bubbleSort(lists):
    for i in range(len(lists)):
        for j in range(len(lists)-1-i):
            if (lists[j]>lists[j+1]):
                lists[j],lists[j+1] = lists[j+1],lists[j]
    return lists



main()