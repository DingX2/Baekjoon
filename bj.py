N = int(input())

lists = []
for i in range(N):
    lists.append(int(input()))

def bubbleSort(lists):
    for i in range(len(lists)):
        for j in range(len(lists)-1-i):
            if (lists[j]>lists[j+1]):
                lists[j],lists[j+1] = lists[j+1],lists[j]
    return lists


def selectionSort(lists):
    length = len(lists)
    for i in range(length - 1):
        indexMin = i
        for j in range(i + 1, length):
            if lists[indexMin] > lists[j]:
                indexMin = j
        lists[i], lists[indexMin] = lists[indexMin], lists[i]
    return lists



def insertionSort(lists):
    for i in range(1, len(lists)):
        j = i - 1
        key = lists[i]
        while lists[j] > key and j >= 0:
            lists[j + 1] = lists[j]
            j = j - 1
        lists[j + 1] = key
    return lists



def shellSort(lists):
    h = 1
    while h < len(lists):
        h = 3*h + 1
    h = h//3
    while h > 0:
        for i in range(h,len(lists)):
            k=i-h
            key=lists[i]
            while k>=0 and key < lists[k]:
                lists[k+h] = lists[k]
                k=k-h
            lists[k+h] = key
        h = h//3
    return lists




print(bubbleSort(lists))
print(selectionSort(lists))
print(insertionSort(lists))
print(shellSort(lists))
