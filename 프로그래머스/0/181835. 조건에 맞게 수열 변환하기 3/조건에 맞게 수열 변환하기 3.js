solution = (arr, k) => k % 2 ? arr.map(a=> a *= k) : arr.map(a=>a+=k)
