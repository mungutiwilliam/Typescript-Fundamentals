let sales = 1234_5678_91022;
let course = 'yellowwwww';
let is_pubished = false;

let door: string;

// declaring a list of numbers 
let numbers : number [] 

numbers = [2, 3 , 5, 7, 8, 0, 3]
// working with tuples 

let user :[number, string, string] = [1, 'William Munguti','0724551906']


console.log(user)


// iterate list

numbers.forEach(number => {
    console.log(number)
})



// list function for each and to string special functio for arrays to be performed on
numbers.forEach(number1 => number1.toString())


// enum 

const enum fruits {Yellow ='Banana', Red='Plums',Black='Black Currant'}

let selected_fruit = fruits.Red
console.log(selected_fruit)


// a function 

function calculateTax(selected_fruit : string): number {
    let tax_amount : number;

    if (selected_fruit.length <= 5){
        tax_amount = selected_fruit.length *20
        return tax_amount
    }else{

        tax_amount = selected_fruit.length  *40
        return tax_amount
    }
    
   
}



// using type key word will let us describe the attributes of an object and can be reused

type House ={
    
    readonly id : number,
    // adding a '?' question mark at the end of a variable makes it optional and doesm't have to be declared
    name: String,
    bedrooms: number,
    retire: (date: Date)=> void

}






// object

let house : House = {
    id: 3, 
    name: 'Uganda_house',
    bedrooms: 4,
    retire: (date: Date)=> {
        console.log(date)
    }
}



house




// union types


// here we have declard that the variable can be either a number or a string 
// the compiler  is complaining since narrowing had not been  done
function kgToPounds ( weight : string | number ) : number {
  
    //implement Narrowing
    
    // narrowing
    if( typeof weight === "number") 
        return weight * 20
    else
        return parseInt(weight) *  0.3;

   
}

kgToPounds("20kg")




// intersection types 

type Draggable = {
    drag: ( ) => void;

 }


 type Resizable = {
    resize : () => void;

 }



 // the types have been compined to have an intersection types
 type UIWidget = Draggable & Resizable; 


// in order for typscripct compiler to not highlight the textbox being created, it has to implement both functions from both types

 let textBox : UIWidget = {
    drag : () => {},
    resize : () => {}
 }



 // literal type


// literal types they let you choose a literal figure / variable options

type Quantity = 50 |30 ;

// the variable hence can only  accept the initialization of the variable as 50 or 30 and no other value 
// can also be the same for a string value
let quantity :Quantity =  50


