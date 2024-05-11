solution = (arr, row = arr.length, col = arr[0].length) => {
    if(col === row) {return arr;}
    if (col < row) return arr.map(item=> item.concat(Array(row - col).fill(0)).flat());
    else Array.from({length:col-row}, () => Array(col).fill(0)).forEach(subArr => arr.push(subArr));
    return arr;
}