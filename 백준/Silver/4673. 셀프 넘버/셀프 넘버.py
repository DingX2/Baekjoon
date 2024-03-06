import sys

input = sys.stdin.readline


def d(n):
    return n + sum(map(int, str(n)))


def solution():
    limit = 10000
    numbers = set(range(1, limit))

    for i in range(1, limit):
        generated_number = d(i)
        if generated_number in numbers:
            numbers.remove(generated_number)

    for x in numbers:
        print(x)


solution()
