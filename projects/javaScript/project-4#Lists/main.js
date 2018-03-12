let Cons = (value, fol) =>{
    return {value,  fol};
};


let A3 = null;
let A2 = Cons("a2", A3);
let A1 = Cons("a1", A2);
let A0 = Cons("a0", A1);

let append = (x, xs) =>{
    if (xs) {
        return Cons (xs.value, append(x, xs.fol));
    } else{
        return Cons(x, null);
    }
};
