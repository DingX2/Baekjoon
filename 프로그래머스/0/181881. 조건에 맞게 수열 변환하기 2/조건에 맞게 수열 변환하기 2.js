// function solution(arr) {
//     function transform(array) {
//         let newArray = [];
//         for (let num of array) {
//             if (num >= 50 && num % 2 === 0) {
//                 newArray.push(num / 2);
//             } else if (num < 50 && num % 2 !== 0) {
//                 newArray.push(num * 2 + 1);
//             } else {
//                 newArray.push(num);
//             }
//         }
//         return newArray;
//     }

//     function findRepetition(arr) {
//         let seen = {};
//         let count = 0;
//         while (true) {
//             let key = arr.join(',');
//             if (seen.hasOwnProperty(key)) {
//                 return seen[key];
//             }
//             seen[key] = count;
//             arr = transform(arr);
//             count++;
//         }
//     }

//     return findRepetition(arr);
// }



function solution(arr) {
    let flag = true;
    let answer = -1;
    
    while(flag){
        answer += 1;
        flag = false;
        let temp = []
        temp = arr.map((item)=>{
            if(item >= 50 && !(item%2)){
                flag = true;
                item /= 2;
            }
            else if(item < 50 && item%2){
                flag = true;
                item = item*2+1;
            }
            return item;
        });
        arr = temp;
    }
    return answer;
}