let rates = [0.25, 0.1, 0.05, 0.01]
let reduce = function (reduceFn, z, xs) {
    for (let x in xs) {
        z = reduceFn(z, x);
    }
    return z;
};

let  amountToCoins = (amount, coins) => {
    let reminder = getReminder(amount ,rates[0]);
    let newAmount = amount - coins[0] * rates[0] ;
    let z = [];

    if ( !((amount - reminder) - (rates[0] * coins[0]) )){
        z.push((amount - reminder) / rates[0]);
    }else {
        z.push(coins[0]);
    }
    for (let i = 1 ; i < rates.length; i++ ) {
        if (!(newAmount % rates[i] && (newAmount - rates[i] * coins[i]))) {
            z.push(coins[i])
        } else if ((newAmount % rates[i]) && (newAmount - rates[i] * coins[i])) {
            z.push(coins[i]);
            newAmount = newAmount - coins[i] * rates[i]
        }
        else {
            z.push(coins[i])
        }
    }
}


