#1
for i in range(5):
    print("*",end="")

print("")

#2
for i in range(5):
    for i in range(5):
        print("*",end="")
    print("")


#3
for i in range(6):
    for j in range(i):
      print("*",end="")
    print("")


print("")

#4
#4 1
#3 3
#2 5
#1 7
#0 9
for i in range(0,5):
    for k in range(3-i,-1,-1):
        print(" ",end="")
    for j in range(0,i*2+1,1):
        print("*",end="")
    print("")


print("")


#5
list = [90,86,75,50,98,64]
print("minimun is :" + (str(min(list)) + " index is " + str(list.index(min(list)))))
print("maximun is :" + (str(max(list)) + " index is " + str(list.index(max(list)))))



#6
answer = int(input())

if answer in list:
    print("탐색 성공 index : " + str(list.index(answer)))
else :
    print("탐색 실패 index : -1")



#7
n = len(list)
i = 0
while(i<n-1):
    if list[i] > list[i+1]:
        list[i],list[i+1] = list[i+1],list[i]

print(list)




