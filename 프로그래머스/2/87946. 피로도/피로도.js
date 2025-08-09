function solution(k, dungeons) {

    const getPermutation = (arr, r) =>{
        const result = [];
        if(r === 1) return arr.map(v =>[v]);
        
        arr.forEach((fixed, idx, origin)=>{
            const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
            const perms = getPermutation(rest, r-1);
            const attached = perms.map(p => [fixed, ...p]);
            result.push(...attached)
        })
        return result;
    }
    
    const routes = (getPermutation(dungeons, dungeons.length))
    
    let max_route = 0;
    for(const route of routes){
        let current_hp = k;
        let count = 0;
        
        for(const go of route){
            const [min_hp, consume_hp] = go;
            //console.log(go, current_hp, typeof consume_hp, min_hp, consume_hp)
            if(current_hp < min_hp) break;
            current_hp -= consume_hp;
            count += 1
        }
        max_route = Math.max(max_route, count);
    }
    return max_route;
}