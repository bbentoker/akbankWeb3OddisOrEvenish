function oddishOrEvenish(number){
    let sum  = 0 

    number.toString().split("").forEach(element => {
        sum += parseInt(element)
    });

    return sum % 2 === 0 ? "Evenish" : "Oddish"
}
