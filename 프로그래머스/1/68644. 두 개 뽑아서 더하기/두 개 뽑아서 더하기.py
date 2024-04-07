def back(numbers, ans, idx):
    if len(ans) == 2:
        return ans[0] + ans[1]

    result = set()
    for i in range(idx, len(numbers)):
        ans.append(numbers[i])
        result.add(back(numbers, ans, i + 1))
        ans.pop()

    return result

def solution(numbers):
    final_answer = set()
    for i in range(len(numbers)):
        final_answer |= back(numbers, [numbers[i]], i + 1)

    return sorted(final_answer)
