import sys
import random
import turtle
import math


def plot():
    turtle.penup()
    turtle.goto(-150,100)
    turtle.pendown()
    for x in range(0,360):
        x_rad = 0.0175 * x
        y = math.cos(x_rad)

        turtle.goto(x-150,y*100)

def line(x1,y1,x2,y2):
    turtle.penup()
    turtle.goto(x1,y1)
    turtle.pendown()
    turtle.goto(x2,y2)
    turtle.penup()


# t = 0.5 * 3.14
# x1 = t
# y1 = t
# x2 = pow(math.sin(t),3)
# y2 = 13*math.cos(t) - 5*math.cos(2*t) - 2*math.cos(3*t)-math.cos(4*t)

pnum=100#하트를그리기위한점의개수를100으로설정
size=15#하트그림의크기를15로설정

for i in range(1,pnum+1):
    h=math.pi*i/(pnum/2)#변수h는각도(radian)를의미함(π*1/50~π*100/50)
    x=size*16*math.sin(h)**3#변수x,y에는‘하트방정식’공식에의해하트모양의좌표값이입력됨
    y=size*13*math.cos(h)-size*5*math.cos(2*h)-size*2*math.cos(3*h)-size*math.cos(4*h)
    turtle.goto(x,y)#좌표(x,y)로이동
    turtle.delay(10)

