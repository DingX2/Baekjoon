def bubbleSort(arr):
    for i in range(len(arr) - 1, 0, -1):
        for j in range(i):
            if (arr[j] > arr[j + 1]):
                arr[j], arr[j + 1] = arr[j + 1], arr[j]


arr = [3, 2, 1, 4, 23, 1, 2]
bubbleSort(arr)

print(arr)

# 2
print("2020111383")
print("이수현")
print("2020111383")
print("이수현")
print("")

for i in range(2):
    print("2020111383")
    print("이수현")
print("")


def sn():
    print("2020111383")
    print("이수현")


sn()
sn()
print("")

for i in range(2):
    sn()


def print19():
    for i in range(1, 10):
        print(i, end="")


print19()
print("")


#3

def avg(a,b,c):
    return((a+b+c) / 3)

#사용자로부터 3개의 수를 입력받음
num1 = float(input("값 1: "))
num2 = float(input("값 2: "))
num3 = float(input("값 3: "))

#avg
print("평균= ",avg(num1,num2,num3))


import turtle

import turtle
def triangle (x1, y1, x2, y2, x3, y3):
    turtle.penup()
turtle.goto(x1, y1)
turtle.pendown()
turtle.goto(x2, y2)
turtle.goto(x3, y3)
turtle.goto(x1, y1)
def main():
turtle.setup()
triangle(100, 100, 100, 0, -100, -100)
turtle.done()
main()


#4
N = int(input("단 : "))
for i in range(1,10):
    print(f"{N} * {i} = {(N*i)}")
