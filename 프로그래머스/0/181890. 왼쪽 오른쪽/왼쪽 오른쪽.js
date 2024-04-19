solution = (str_list) => {
    for (const item of str_list){
        if(item === 'l'){
            return str_list.slice(0, str_list.indexOf('l'))
        }
        else if (item ==='r'){
            return str_list.slice(str_list.indexOf('r')+1, str_list.length)
        }
    }
    return [];
}