// optional chaining 

// the question mark makes the variable optional
// if the question mark is not there, there will be a compilation error

type Customer  ={
    birthday?: Date
}



function getCustomer ( id :number) : Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}

}

let customer = getCustomer(4);


// Optional property access operator 
// if condition is not met this line of code will not be executed
// the question mark means if the customer is not null ot undefined give the birhday

console.log(customer?.birthday?.getHours());


// optional element access operator

// if (customers !== null && customers !== undefined)

// customers?.[0] //optionaly check if customer exists

