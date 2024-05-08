function solution(order, answer = 0) {
        Menu = {
        'americano': 4500,
        'iceamericano': 4500,
        'americanoice': 4500,
        'hotamericano': 4500,
        'americanohot': 4500,
        'anything': 4500,
        'cafelatte': 5000,
        'icecafelatte': 5000,
        'cafelatteice': 5000,
        'hotcafelatte': 5000,
        'cafelattehot': 5000
    }
    
    order.map((item)=>{
        answer += Menu[item] || 0;
    })
    return answer;
}