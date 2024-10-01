const solution = (spell, dic) => {
    let items = dic.filter(item=> item.length === spell.length);
    for (const spelling of spell){
        items = items.filter(item => item.includes(spelling));
    }
    return items.length ? 1 : 2
}