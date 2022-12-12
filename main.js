// Define a function named buyChocolate. The function needs no
// parameters. It should return an object with a type property
// whose value is "Milk chocolate".

const buyChocolate = () => {
    const chocolate = {
        type: "Milk chocolate"
    }
    return chocolate
}



// Define a function named addFlavoring. The function needs one
// parameter to accept an object as input. It should add a new
// flavor property to the object with a value of "Mint".

const addFlavoring = (chocolate) => {
    chocolate.flavor = "Mint"
    return chocolate
}



// Define a function named makeBarkMixture. It should have one
// parameter for an incoming object to be stored for use in the
// function.

// If the flavor property on the object is equal to "Mint", then
// you should add a new mixed property to the object with a value
// of true. If the flavor is not "Mint" then the property value
// should be false.

const makeBarkMixture = (chocolate) => {
    if (chocolate.flavor === "Mint") {
        chocolate.mixed = true
    } else {
        chocolate.mixed = false
    }
    return chocolate
}



// Define a function named bakeCandy. It should have one parameter
// for an incoming object to be stored for use in the function.

// Check if mixed property is true. If so, add baked property with 
// value of true. If mixed property is false, add baked property
// with value of false.

const bakeCandy = (chocolate) => {
    if (chocolate.mixed === true) {
        chocolate.baked = true
    } else {
        chocolate.baked = false
    }
    return chocolate
}



// Define a function named breakBark. It should have one parameter 
// for an incoming object to be stored for use in the function.

// If objects baked property is true, function should return a new
// array with 6 strings on it. Each string should be "Mint 
// Chocolate Bark Piece". If baked property is false, function should
// not return anything. Return statement should be inside the if block.



const breakBark = (chocolate) => {
    if (chocolate.baked === true) {
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    }
}



let newChocolate = buyChocolate()
console.log(newChocolate)

let newChocolateFlavor = addFlavoring(newChocolate)
console.log(newChocolateFlavor)

let newChocolateMix = makeBarkMixture(newChocolateFlavor)
console.log(newChocolateMix)

let newChocolateBake = bakeCandy(newChocolateMix)
console.log(newChocolateBake)

let newChocolateBreakBark = breakBark(newChocolateBake)
console.log(newChocolateBreakBark)