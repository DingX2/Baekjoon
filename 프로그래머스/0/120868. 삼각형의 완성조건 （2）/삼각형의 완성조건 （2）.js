solution = (sides) => {
    let [answer1, answer2] = [0, 0];
    // const max = (Math.max(sides[0], sides[1]));
    const min = (Math.min(sides[0], sides[1]));
    return 2*min -1;
}