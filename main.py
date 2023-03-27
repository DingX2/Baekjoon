
n,m = int(input().split())
lists = list(map(int, input()))
answer = []

def swap(a,b):
    a,b = b,a

def main(data,m,n):
    answer = 0
    answer = [i for i in range(1,n+1)]
    for i in range(m):
        swap(lists)
    return lists


print(main(lists,m,n))

