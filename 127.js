function oddOrEven(array) {
    // Loop to find even, odd sum
    if (array.length == 0){
        return 'even';
    }else {
        let sum = array.reduce((acc, n) => {return acc + n});
        return (sum % 2 == 0)? 'even': 'odd'
    }
}