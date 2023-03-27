def needleman_wunsch(seq1, seq2, match_score=1, mismatch_score=-1, gap_score=-1):
    # Initialize the scoring matrix
    rows = len(seq1) + 1
    cols = len(seq2) + 1
    score_matrix = [[0] * cols for _ in range(rows)]

    # Initialize the first row and column of the scoring matrix
    for i in range(rows):
        score_matrix[i][0] = i * gap_score
    for j in range(cols):
        score_matrix[0][j] = j * gap_score

    # Fill in the remaining cells of the scoring matrix
    for i in range(1, rows):
        for j in range(1, cols):
            # Calculate the match/mismatch score
            if seq1[i-1] == seq2[j-1]:
                match = match_score
            else:
                match = mismatch_score

            # Calculate the scores for the three possible operations
            diagonal = score_matrix[i-1][j-1] + match
            up = score_matrix[i-1][j] + gap_score
            left = score_matrix[i][j-1] + gap_score

            # Choose the maximum score among the three options
            score_matrix[i][j] = max(diagonal, up, left)

    # Traceback to find the optimal alignment
    align1 = ''
    align2 = ''
    i = rows - 1
    j = cols - 1
    while i > 0 and j > 0:
        current_score = score_matrix[i][j]
        diagonal_score = score_matrix[i - 1][j - 1]
        up_score = score_matrix[i - 1][j]
        left_score = score_matrix[i][j - 1]

        if i==1 and j==1:
            align1 = seq1[i - 1] + align1
            align2 = seq2[j - 1] + align2
            i -= 1
            j -= 1
            print("대각선")
            continue

        if i==1:
            align1 = '-' + align1
            align2 = seq2[j - 1] + align2
            j -= 1
            print("왼쪽")
            continue

        if j==1:
            align1 = seq1[i - 1] + align1
            align2 = '-' + align2
            i -= 1
            print("위쪽")
            continue

        if current_score == diagonal_score + match_score or seq1[i - 1] == seq2[j - 1]:
            align1 = seq1[i - 1] + align1
            align2 = seq2[j - 1] + align2
            i -= 1
            j -= 1
            print("대각선")

        elif current_score == left_score + gap_score:
            align1 = '-' + align1
            align2 = seq2[j - 1] + align2
            j -= 1
            print("왼쪽")

        elif current_score == up_score + gap_score:
            align1 = seq1[i - 1] + align1
            align2 = '-' + align2
            i -= 1
            print("위쪽")

        else:
            # 기타 경우 처리
            align1 = seq1[i - 1] + align1
            align2 = seq2[j - 1] + align2
            i -= 1
            j -= 1
            print("대각선")

    while i > 0:
        align1 = seq1[i-1] + align1
        align2 = '-' + align2
        i -= 1
    while j > 0:
        align1 = '-' + align1
        align2 = seq2[j-1] + align2
        j -= 1

    for i in range(rows):
        for j in range(cols):
            print(f"{score_matrix[i][j]:3d}",end="")
        print()

    score = calculate_score(align1,align2,match_score,mismatch_score,gap_score)

    print(f"score : {score}")

    return align1, align2

def calculate_score(seq1, seq2, match_score, mismatch_score, gap_score):
    m = len(seq1)
    n = len(seq2)

    score = 0
    for i in range(m):
        if seq1[i] == seq2[i]:
            score += match_score
        else:
            score += mismatch_score

    gap_count = abs(m - n)
    score -= gap_count * gap_score

    return score


seq1 = "AGACCGA"
seq2 = "AAAAGA"
print(needleman_wunsch(seq1,seq2))
