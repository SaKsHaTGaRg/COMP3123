




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


console.log(MoveAhead("python"))
console.log(MoveAhead("Emulator"))


// question 4
//Write a JavaScript program to find the types of a given angle


function FindAnglr(integer){
   angle = " " 
    if(i == 0 && i < 90 ){
        angle="acute"
    }
    if(i == 90 ){
        angle = "right"
    }
    if(i > 90 ){
        angle = "obtuse"
    }
    return angle
}

console.log(FindAnglr(35))
console.log(FindAnglr(90))
console.log(FindAnglr(135))

