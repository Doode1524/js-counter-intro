let counter = document.getElementById("counter")
let addBtn = document.getElementById("add-btn")
let subBtn = document.getElementById("sub-btn")
let resetBtn = document.getElementById("reset-btn")

let count = 0

const setCount = () => {
    return counter.innerText = count
}

setCount()

const increment = () => {
    count = count + 1
    setCount()
}

const decrement = () => {
    count = count - 1
    setCount()
}

const resetCounter = () => {
    count = 0
    setCount()
}

const attachClickEvent = (node, callback) => {
    node.addEventListener("click", () => {
        callback()
    })
}

attachClickEvent(addBtn, increment)
attachClickEvent(subBtn, decrement)
attachClickEvent(resetBtn, resetCounter)

let number = 12
let bool = true
let arr = ["String", 15, false, []]
let person = { name: "Foley", age: 45 }
let myString = "Any textual content"

const addTwoNums = (num1, num2) => {
    return num1 + num2
}

const subtractTwoNums = (num1, num2) => {
    return num1 - num2
}

const multiplyTwoNums = (num1, num2) => {
    return num1 * num2
}

const divideTwoNums = (num1, num2) => {
    return num1 / num2
}

const doSomethingWithTwoNums = (num1, num2, callback) => {
    return callback(num1, num2);
}


