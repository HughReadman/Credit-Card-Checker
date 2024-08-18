// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]


// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
const mystery6 = [9, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6]

// Online generated numbers
const visa = "4024007184896511"
const discover = "6011475246689978"
const jcb = "3543417264692793"
const instaPayment = "6389350484090029"
const maestro = "6761034085490816"
const dinersClub = "36566664444625"
const visa2 = "424007184896511"

// Array of online numbers

const onlineBatch = [visa, discover, jcb, instaPayment, maestro, dinersClub, visa2]

// Add your functions below:

const validateCred = arr => {

    let luhnArr = [...arr];
    luhnArr = luhnArr.reverse();

    luhnArr.forEach((item, index) => {
        if(index > 0 && index % 2 != 0){
            
            item = item * 2;
            if(item > 9){
                item = item - 9;
                luhnArr[index] = item
            } else {
                luhnArr[index] = item
            }
            return item;
        } else {
            return item;
        } 
    })
    luhnArr.reverse()

    let sum = luhnArr.reduce((accum, current) => accum + current);
    
    if(sum % 10 === 0){
        return true;
    } else {
        return false;
    }
    
    
};

const idInvalidCardCompanies = arr => {
    let cardCompanies = [];
    let cannotFind = [];
    arr.forEach((array) => {
        if(array[0] === 3){
            cardCompanies.push("American Express")
        } else if(array[0] === 4) {
            cardCompanies.push("Visa")
        } else if(array[0] === 5){
            cardCompanies.push("MasterCard")
        } else if(array[0] === 6){
            cardCompanies.push("Discover")
        } else if(array[0] < 3 || array[0] > 6) {
            console.log(`Company not found for the following card number:`);
            console.log(array);
        }
        
    })

    function removeDuplicates(companies){
        return companies.filter((name, index) => companies.indexOf(name) === index);
    }

    console.log(`These companies have issued incorrect card numbers: ${removeDuplicates(cardCompanies)}`);
    }

const findInvalidCards = nestedarr => {
    let validCards = [];
    let invalidCards = [];
    nestedarr.forEach((array) => {
        if(validateCred(array)){
            validCards.push(array);
        } else {
            invalidCards.push(array);
        }
    })
    if(invalidCards.length > 0){
    console.log("The following are invalid cards:")
    console.log(invalidCards);
     return(idInvalidCardCompanies(invalidCards));}
     else {
        console.log("All card numbers entered are valid");
     }
}


 //Test invalid card function on batch
//findInvalidCards(batch);

let converted = []
let strToNum = str => {
    let num = []
    for(let i = 0; str.length > i; i++){
        let digit = parseInt(str[i]);
        num.push(digit);
    }
    converted.push(num)
}

//Test if online numbers convert
onlineBatch.forEach(strToNum);
//console.log(converted);
findInvalidCards(converted);

//strToNum("4052403397277133");


