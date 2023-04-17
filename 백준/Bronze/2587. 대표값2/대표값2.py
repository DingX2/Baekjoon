def main():
    lists = []
    for _ in range(5):
        lists.append(int(input()))

    print(round(sum(lists)/len(lists)))

    lists.sort()
    if len(lists)%2 !=0:
        print(lists[len(lists)//2])
    else:
        print(lists[2])

main()

#확인용