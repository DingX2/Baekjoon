const solution = (picture, k) => 
    picture.map(content => {
        const _ = content.split("").map(item=> item.repeat(k)).join("")
        return Array(k).fill(_);
    }).flat()