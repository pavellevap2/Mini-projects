
let Cons = (value, next) =>{
    return {value, next};
}

let A3 = null
let A2 = Cons("a2", A3)
let A1 = Cons("a1", A2)
let A0 = Cons("a0", A1)

let toArray = (xs) => {
    if (xs) {
        return [xs.value].concat(toArray(xs.next))
    } else {
        return []
    }
}

let append = (x, xs) =>{
    if (xs) {
        return Cons (xs.value ,append(x,xs.next))
    }else{
        return Cons(x , null);
    }
}

let concat = (xs, ys) =>{
    if (xs) {
        return Cons(xs.value, concat(xs.next ,ys))
    }else {
        return ys
    }
}

let map = (fn, xs) => {
    if (xs) {
        return Cons(fn(xs.value), map(fn, xs.next))
    }else {
        return null
    }
}
let logList = (list) => console.log(toArray(list))
