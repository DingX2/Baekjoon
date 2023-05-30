#1
print("2020111383",end="")
print(" 이수현")
print("2020111383"+"이수현")
print()

#2
student = "2020111383"+"이수현"
print(student*3)
print()

#3
for i in range(2):
    print("#"*3+"*"*4,end="")
print()

#4
sum=0
for i in range(1,11):
    if i%2 == 1:
        print(i,end="")
        sum = i+sum
        if(i<9):
            print("+",end="")
print(" = "+ str(sum))
print()

#5
print("(",end="")
sum=0
count = 0
for i in range(1,11):
    if(i%2==0):
        sum += i
        count += 1
        print(i,end="")
        if(i!=10):
            print("+", end="")
print(") / " + str(count) +" = " + str(sum/count),end="")
print()

#6
import turtle

turtle.shape("turtle")
for i in range(3):
    turtle.forward(100)
    turtle.left(120)

#7
turtle.reset()
turtle.circle(100,steps=3)
turtle.circle(100)

#8
turtle.reset()
for i in range(6):
    turtle.forward(100)
    turtle.left(60)

#9
turtle.reset()
turtle.circle(100)
turtle.circle(100,steps=6)


#10
turtle.reset()
turtle.forward(50)
turtle.left(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(50)
turtle.right(90)
turtle.forward(100)
turtle.left(90)
turtle.forward(40)
turtle.left(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.left(90)
turtle.forward(50)


#
# #11
turtle.reset()
turtle.forward(100)
turtle.up()
turtle.goto(0,50)
turtle.down()
turtle.forward(100)
turtle.up()
turtle.goto(0,100)
turtle.down()
turtle.speed(1)
turtle.forward(100)


# #12
turtle.reset()
turtle.right(90)
turtle.forward(100)
turtle.up()
turtle.goto(50,0)
turtle.down()
turtle.forward(100)
turtle.up()
turtle.goto(110,0)
turtle.down()
turtle.speed(1)
turtle.forward(100)


#14
turtle.reset()
length = int(input())
distance = int(input())
turtle.reset()
turtle.forward(length)
turtle.up()
turtle.goto(0,-(distance*1))
turtle.down()
turtle.forward(length)
turtle.up()
turtle.goto(0,-(distance*2))
turtle.down()
turtle.forward(length)


#15
turtle.reset()
length = int(input())
distance = int(input())
turtle.forward(length+distance*0)
turtle.up()
turtle.goto(0,-(distance*1))
turtle.down()
turtle.forward(length+distance*1)
turtle.up()
turtle.goto(0,-(distance*2))
turtle.down()
turtle.speed(1)
turtle.forward(length+distance*2)

#16
turtle.reset()
length = int(input())
turtle.circle(length)
turtle.up()
turtle.goto(0,length*2)
turtle.speed(1)
turtle.down()
turtle.circle((length/2))
