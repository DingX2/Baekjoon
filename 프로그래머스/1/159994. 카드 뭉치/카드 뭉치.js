solution = (cards1, cards2, goal) => {
    for (let card of goal) {
        if (card === cards1[0]) {
            cards1.shift();
        } else if (card === cards2[0]) {
            cards2.shift();
        } else {
            return 'No'; 
        }
    }
    return 'Yes'; 
}
