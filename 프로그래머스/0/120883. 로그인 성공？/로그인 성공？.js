// filter를 활용한 풀이
// const solution = (id_pw, db) => {
//     const ary = db.filter(([id, pwd]) => id === id_pw[0])
//     return ary.length ? (ary.filter(([id, pwd]) => pwd === id_pw[1]).length ? "login" : "wrong pw") : "fail";
// }

// Map 객체를 활용한 풀이
const solution = (id_pw, db) => {
    const maps = new Map(db);
    return maps.has(id_pw[0]) ? maps.get(id_pw[0]) === id_pw[1] ? "login": "wrong pw"  : "fail"
}