// sort로 등수 매겨서 Index 돌려놓기
// const solution = (score, rank=1, prevScore=0) => {
//     const makeArray = score.map(([Eng, Math], i) => [(Eng+Math)/2, i]);
//     const ary = makeArray.sort((a, b) => b[0] - a[0]).map((item, index) =>{
//         const temp = (item[0] === prevScore) ? rank : rank=index+1;
//         prevScore = item[0];
//         return [item, temp].flat()
//     });
//     return ary.sort((a,b) => a[1]-b[1]).map((item)=>item[2]);
// }

// IndexOf 사용해서, 등수 정하기 .sort()는 원본배열을 변경하므로, 스프레드 문법 사용
const solution = (score) => {
    const avgArray = score.map(([Eng,Mat]) => (Eng+Mat)/2);
    const sortedArray = [...avgArray].sort((a,b) => b - a);
    return avgArray.map(el => sortedArray.indexOf(el)+1);
}