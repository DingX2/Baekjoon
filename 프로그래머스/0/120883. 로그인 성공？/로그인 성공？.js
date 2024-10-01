const solution = (id_pw, db) => {
    const ary = db.filter(([id, pwd]) => id === id_pw[0])
    return ary.length ? (ary.filter(([id, pwd]) => pwd === id_pw[1]).length ? "login" : "wrong pw") : "fail";
}