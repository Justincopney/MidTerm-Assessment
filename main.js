// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function ageToAbilities(age) {
 if (age < 16) {
    return 'You can\'t drive.'
 }
 else if (age >= 16 && age <= 17) {
    return 'You can drive but not vote.'
 }
 else if (age >= 18 && age <= 24) {
    return 'You can vote but not rent a car.'
 }
 else if (age >= 25) {
    return 'You can do pretty much anything.'
 }
} 

let oddIndices = [0, 1, 3, 5]
console.log(oddIndices)


function numOddValues(odd){
    let numOddValues = [1, 2, 3, 4, 5]
}

function averageStringLength(str) {
    str = 'hello world!'
}

function firstPunctuationIndex(str) {
    str = 'Are you sure?'
}

function getPlace(num) {

}

function addToObj(obj) {
    
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};
