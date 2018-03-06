
let rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

function afn1(next) {
    setTimeout(() => next("a1"), rand(0, 1000));
}

function afn2(next) {
    setTimeout(() => next("a2"), rand(0, 1000));
}

function afn3(next) {
    setTimeout(() => next("a3"), rand(0, 1000));
}

function done(rs) {
    console.log(...rs);
}

let afns = [afn1, afn2, afn3];
let rs = [];

afns.forEach((fn , _, arr) => {
    fn(res => {
        rs.push(res);
        if(rs.length == arr.length ){
            return done(rs);
        }
    })
});
