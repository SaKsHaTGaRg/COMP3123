//101516778 Sakshat Garg
word = "the quick brown fox"

function capitalFirst(word){
    let s = word.split(" ");
    for ( i = 0 ; i < s.length ; i++){
    
            s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1)


    }
    return s.join(" ")
}
console.log(capitalFirst(word))


// question 2
// gresatest integer

function greattestInteger(a , b , c){
   return Math.max(a , b , c)
}

console.log(greattestInteger(1,100,101))
console.log(greattestInteger(10,1,1000))
console.log(greattestInteger(12,43,11))
console.log(greattestInteger(15,11,121))




//question 3
//move last three character to the start of a given string. The string length must be greater or equal to three.

function MoveAhead(word){
    if(word.length >= 3){
        last = word.slice(-3)
        remaining = word.slice(0,word.length-3)
        word = last+remaining
    }
    return word
}


console.log(MoveAhead("Python"));
console.log(MoveAhead("JavaScript"));
console.log(MoveAhead("Hi"));



// question 4
//Write a JavaScript program to find the types of a given angle


function FindAnglr(i){
    if(i > 0 && i < 90 ){
        return "acute"
    }
    if(i == 90 ){
        return  "right"
    }
    if(i > 90 && i < 180 ){
        return  "obtuse"
    }
    if(i === 180){
        return "straight"
    }
}


console.log(FindAnglr(47))
console.log(FindAnglr(90))
console.log(FindAnglr(145))
console.log(FindAnglr(180))



// question 5
//Write a JavaScript program to find the maximum possible sum of some of its k consecutive 
// numbers (numbers that follow each other in order.) of a given array of positive integers.

function maxSum(array){

    let consecutiveSum 
    let consecutiveSum2 
    let maxTotal = ""
for(let i = 0 ; i < array.length ; i++){

consecutiveSum = array[i] + array[i+1]
console.log(consecutiveSum)

consecutiveSum2 = array[i+1] + array[i+2]
console.log(consecutiveSum)


if (consecutiveSum > consecutiveSum2){
    maxTotal = consecutiveSum
    return maxTotal
}

else if( consecutiveSum2 > consecutiveSum){
    maxTotal = consecutiveSum2
    return maxTotal
}

else {
    return console.log("they're are equal")
}

}

}

console.log(maxSum[1,2,3,4,5])


