solution = ($, c = 1, l = $.length) => {
    while(l>c){c*=2}
    $.push(Array(c-l).fill(0));
    return $.flat();
}