from itertools import permutations

def solution(friends, gifts):
    prize_dict = {friend: [0, 0, 0] for friend in friends} 
    n = len(friends)
    prize_score = [0] * n
    prize_matrix = [[0] * n for _ in range(n)] 

    for names in gifts:
        giver, taker = names.split(" ")
        prize_dict[giver][0] += 1
        prize_dict[taker][1] += 1
        prize_matrix[friends.index(giver)][friends.index(taker)] += 1

    for giver, (give, take, _) in prize_dict.items():
        prize_dict[giver][2] = give - take

    for i in range(n):
        for j in range(i + 1, n):
            if prize_matrix[i][j] > prize_matrix[j][i]:
                prize_score[i] += 1
            elif prize_matrix[i][j] < prize_matrix[j][i]:
                prize_score[j] += 1
            else: 
                friend1 = friends[i]
                friend2 = friends[j]
                if prize_dict[friend1][2] > prize_dict[friend2][2]:
                    prize_score[i] += 1
                elif prize_dict[friend1][2] < prize_dict[friend2][2]:
                    prize_score[j] += 1

    return max(prize_score)
