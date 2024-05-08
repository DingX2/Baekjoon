solution = (n, slicer, num_list, result = []) => {
    type = {
        1: [0, slicer[1], 1],
        2: [slicer[0], num_list.length-1, 1],
        3: [slicer[0], slicer[1], 1],
        4: [slicer[0], slicer[1], slicer[2]]
    }
    const results = Array.from({length: Math.floor((type[n][1]-type[n][0]) /type[n][2])+1}, ((_, i)=> num_list[type[n][0]+i*type[n][2]]));
    return results;
}