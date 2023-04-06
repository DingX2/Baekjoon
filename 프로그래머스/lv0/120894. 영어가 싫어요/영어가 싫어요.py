def solution(numbers):
    answer = ""
    lists = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    buf = []
    for i in numbers:
        buf.append(i)
        word = "".join(buf)
        print(word)

        if word in lists:
            buf.clear()
            answer += str((lists.index(word)))
    answer = int(answer)

    return answer