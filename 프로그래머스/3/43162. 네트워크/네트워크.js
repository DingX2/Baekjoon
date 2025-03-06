function solution(n, computers) {
    const parent = Array.from({ length: n }, (_, i) => i);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); // 경로 압축
        }
        return parent[x];
    }

    function union(a, b) {
        const rootA = find(a);
        const rootB = find(b);
        if (rootA !== rootB) {
            parent[rootB] = rootA; // 작은 값이 부모가 되도록
        }
    }

    // 네트워크 연결 정보 적용
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (computers[i][j] === 1) {
                union(i, j);
            }
        }
    }

    const correctSet = new Set();
    for (let i = 0; i < n; i++) {
        correctSet.add(find(i));
    }

    return correctSet.size;
}

