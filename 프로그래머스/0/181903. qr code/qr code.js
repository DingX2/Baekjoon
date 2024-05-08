function solution(q, r, code) {
    return [...code].map((item, index)=>
        index % q === r ? code[index] : null
    ).join('')
}