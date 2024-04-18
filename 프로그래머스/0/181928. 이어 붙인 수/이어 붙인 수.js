solution = (l) => {
    let oddNum = '', evenNum = '';
    for (const [index, item] of l.entries()){
        item % 2 ? oddNum += (item) : evenNum += item
    }
    return +oddNum+(+evenNum)
}