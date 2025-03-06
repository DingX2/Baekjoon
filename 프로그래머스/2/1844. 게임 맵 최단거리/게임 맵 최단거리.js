const solution = (maps) => {
    const queue = new Array(maps.length * maps[0].length * 3);
    let front = 0, rear = 0;

    queue[rear++] = 0;  // x
    queue[rear++] = 0;  // y
    queue[rear++] = 1;  // level (초기값 1)

    const dir = [[0,1], [-1,0], [0,-1], [1,0]];

    while (front < rear) {
        const x = queue[front++];
        const y = queue[front++];
        const level = queue[front++];

        if (x === maps.length - 1 && y === maps[0].length - 1) {
            return level;
        }

        for (const [dx, dy] of dir) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length && maps[nx][ny] === 1) {
                queue[rear++] = nx;
                queue[rear++] = ny;
                queue[rear++] = level + 1;
                maps[nx][ny] = 0;  // 방문 처리
            }
        }
    }
    return -1;
};
