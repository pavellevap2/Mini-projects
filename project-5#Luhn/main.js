let numbers=[1,2,3,4,5,6,7];

function isCorrectly(xs) {
    xs.map( (number, i) => {
        if( i % 2 === 0 ) {
           return ( number * 2 > 9 ) ? (number * 2 - 9) : (number * 2);
        }else  {
            return number;
        }
    });
   return xs.reduce( (prev ,next) => {
        return (prev + next % 10 == 0)  ?  true : false
    });
}

console.log(isCorrectly(numbers));
