solution = (n) => Array.from(Array(n), (_, i) => Array.from(Array(n), (_, j) => (i===j ? 1 : 0)))
