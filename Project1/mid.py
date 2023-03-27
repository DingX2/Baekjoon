

def main():
    k = int(input("피보나치 수의 개수"))

    #list = [90,80,70,60,50,40,30,20,10]

    for n in range(1,k+1):
        print(n,fibo(n))

    #bubbleSort(list)
    #print(list)

def fibo(n):
    return fibo(n-1) + fibo(n-2) if n>=2 else n


def fibo2(n):
    if n<2:
        return n
    a,b = 0,1
    for i in range(n-1):
        a.b = a, b+a

    return b


def fibo3(num):
    if num==0:
        return 0
    elif num ==1:
        return 1

    return fibo3(num-1)+fibo3(num-2)



def fibo(n,memory=dict()):
    if n ==1 or n ==2:
        return 1

    if n in memory:
        return memory[n]

    memory[n] = fibo(n-1, memory) + fibo(n-2,memory)

    return memory[n]







def bubbleSort(list):

    for i in range(len(list)-1,0,-1):
        print(i)
        for j in range(i):
            if (list[j] > list[j + 1]):
                 list[j], list[j + 1] = list[j + 1], list[j]
            print(list)


     # length = len(list)
     # j = 0
     # while(j<length-1):
     #     if (list[j] > list[j + 1]):
     #         list[j], list[j + 1] = list[j + 1], list[j]
     #     j+=1

     # for i in range(length):
     #     for j in range(length-1):
     #         if(list[j]>list[j+1]):
     #             list[j],list[j+1] = list[j+1],list[j]


    #N = int(input())

    # for i in range(1,N+1):
    #     for j in range(N,i,-1): #4~0 #N-1~0
    #         print(j,end="")
    #     for _ in range(1,i*2):
    #         print("*",end="")
    #     print("")

    # nlist = [10,20,30,40]
    # print(nlist)
    # nlist.append(50)
    # print(nlist)
    # nlist.insert(2,44) # 이 자리에 들어감
    # print(nlist)
    # nlist.remove(10)
    # print(nlist)
    # #nlist.del(nlist[2])
    # del(nlist[2])
    # print(nlist)
    # nlist.clear()
    # print(nlist)
    #
    # if 60 in nlist:
    #     nlist.remove(60)
    #
    # list = ["바나나","딸기","포도","복숭아","레몬","키위"]
    # print(list[1:3])
    # print(list[::-1])
    # print(list[-3::])
    # print(list[::-2])
    # print(list[1:5:])
    #
    # print(min(list))
    # print(max(list))
    # list.reverse()
    # print(list)






def star(N):

    # 삼각형
    for i in range(N-2):
        for j in range(N-2-i):
            print(" ",end="")
        for a in range(0,i+1):
            print("*",end="")
        print("")

    #사각형
    for k in range(N-2+1): #0~N-2
        print("",end="")
        for m in range(N-2+1):
            print("*",end="")
        print("")



main()