solution = ($, q) => (q.forEach(([s, e])=>{[$[s], $[e]] = [$[e], $[s]]}), $)