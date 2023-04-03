N, K = (map(int,input().split()))
lists = list(map(int,input().split()))

def solution(N,K,lists):
    answer = 0

    lists.sort()
    answer = lists[K-1]
    return answer

print(solution(N,K,lists))