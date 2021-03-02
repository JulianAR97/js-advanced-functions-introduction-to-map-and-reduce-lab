// Your code here

// Map Functions
let mapToNegativize = arr => arr.map(ele => ele * -1)
let mapToNoChange = arr => arr
let mapToDouble = arr => arr.map(ele => ele * 2)
let mapToSquare = arr => arr.map(ele => ele * ele)

// Reduce Functions
let reduceToTotal = (arr, start = 0) => arr.reduce((a, b) => a + b, start)
let reduceToAllTrue = arr => arr.reduce((a, b) => !!a && !!b)
let reduceToAnyTrue = arr => arr.reduce((a, b) => !!a || !!b)