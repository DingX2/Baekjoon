
#1
a = int(input('첫번째 수를 입력하세요:'))
b = int(input('두번째 수를 입력하세요:'))

print(f"{a} 더하기 {b} 는 {a+b} 입니다.")
print(f"{a} 빼기 {b} 는 { a-b} 입니다.")
print(f"{a} 곱하기 {b} 는 {a*b} 입니다.")
print(f"{a} 나누기 {b} 는 {a/b} 입니다.")


#2
Kor = int(input("국어 점수를 입력하세요."))
Eng = int(input("영어 점수를 입력하세요."))
Mat = int(input("수학 점수를 입력하세요."))
print(f"평균은 { ((Kor+Eng+Mat)//3) }")

#3
# for i in range(2):
#     for j in range(3):
#         print("#",end="")
#     for k in range(4):
#         print("*",end="")
#
#
# print("")

#4
# sum = 0
# for i in range(10):
#     if( i % 2 != 0):
#         print(i,end="")
#         sum += i
#         if( i != 9):
#             print('+',end="")
# print(f' = {sum}')


#5
# sum2 = 0
# for i in range(1,11):
#     if( i % 2 == 0):
#         print(i,end="")
#         sum2 += i
#         if (i != 10):
#             print('+', end="")
# avg = format((sum2/5),".1f")
# print(f' = {avg}')


#6
age = int(input("나이를 입력하세요."))
if age <= 15:
    print(str(age) + '세는 아동입니다.')
elif 15 < age <= 18:
    print(str(age) +'세는 청소년입니다.')
else:
    print(str(age)+'세는 성인입니다.')


#7
Kor = int(input("국어 점수를 입력하세요."))
Eng = int(input("영어 점수를 입력하세요."))
Mat = int(input("수학 점수를 입력하세요."))

avg = (Kor+Eng+Mat) / 3
if(avg <70):
    print('False')
else:
    if(70<=Eng<=90):
        print('True')
    elif (70 <= Mat <= 90):
        print('True')
    else:
        print('False')