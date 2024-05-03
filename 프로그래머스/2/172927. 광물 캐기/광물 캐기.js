function solution(picks, minerals) {
    let pickCount = Math.ceil(minerals.length/5);
    let picksSum = picks.reduce((a, b) => a + b);
    let fatigue = [];
    let answer = 0;
    if (picksSum === 0) return 0;
    
    minerals = minerals.splice(0, picksSum*5);    
    
    for (let i=0; i<pickCount; i++){
        let obj = {diamond:0, iron:0, stone: 0};
        
        minerals.splice(0,5).map((element)=>{
            obj[element]++;
        })
        fatigue.push([obj.diamond+obj.iron+obj.stone,obj.diamond*5+obj.iron+obj.stone,obj.diamond*25+obj.iron*5+obj.stone])
    }
    fatigue.sort((a,b) =>b[2]- a[2])
    
    for(let i = 0;i<picks.length;i++){
        let  pickCount =picks[i];
        while(pickCount--){
        if(fatigue.length ===0){
            return answer;
        }
        answer+=fatigue.shift()[i];
    }
  }
    return answer;
}