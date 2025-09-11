//Sakshat Garg 101516778

// Lab02 -Full Stack Dev

// exercise 1

const greetText = 'Hello'


gretter = (myArray) => {

    
    for (const counter of myArray){

       console.log(`${greetText}  ${  counter}`)
       
       
    }

}

gretter(['Randy Savage ' , 'Ric Flair' , 'Hulk Hogan'],3)




// // // Exercise 2
capitalize = (name) =>{


    letter = [...name]
    letter[0] = name[0].toUpperCase()

    final = letter.join('')
    console.log(final)

}

capitalize('foobar')
capitalize('nodeJs')



// Exercise 3

const colors = ['red' , 'green' , 'blue']

const mapped = colors.map( capitalizedColors = names =>{

            letter=[...names]
            letter[0] = letter[0].toUpperCase()
            return letter.join('')
})

console.log(mapped)



// Exercise 4

var values = [1,60,34,30,20,5]
const filtered = values.filter(value => {

    return value < 20

})

console.log(filtered)



// //Exercise 5

var array = [1,2,3,4]

const calculateSum = array.reduce( (accumulator, currentValue) =>
    accumulator+currentValue,0)
console.log(calculateSum)

const calculateProduct = array.reduce( (accumulator, currentValue) =>
    accumulator*currentValue)

console.log(calculateProduct)

class Car{

    model;
    year;

    constructor(model,year){
        this.model = model
        this.year = year
    }

    details(){

        return `Model: ${this.model} \nEngine : ${this.year}`
        
    }

}




class Sedan extends Car{
    constructor( model , year ,balance ) {
        super(model , year)
        this.balance=balance
    }

    info(){
        return `${this.model} has a balance of ${this.balance}`
    }
}

const car2 = new Car('Pontiac Firebird' , 1976)
const sedan = new Sedan('Volvo SD' , 2018 , 30000) 
console.log(car2.details())
console.log(sedan.info())
