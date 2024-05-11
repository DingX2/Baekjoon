solution = ($, k, a = []) => {
    $.forEach((item)=>{
        if (!a.includes(item)){
            a.push(item)
        }
    })
    if (a.length < k){
        a.push(Array.from({ length: k - a.length }).fill(-1))
    }
    return a.length > k ? a.slice(0, k) : a.flat();
}