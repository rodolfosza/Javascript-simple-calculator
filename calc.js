const numsBtn = document.querySelectorAll('[data-num]')
const operationBtn = document.querySelectorAll('[data-operation]')
const clearAllBtn = document.querySelector('[data-allclear]')
const clearBtn = document.querySelector('[data-clear]')
const equalBtn = document.querySelector('[data-equal]')
const dataOutput = document.querySelector('[data-output]')

let prevNum = ''
let currentNum = ''
let oper = ''
let calcNumbers = ''

function addNumber(num) {
    if (num === '.' && currentNum.includes('.')) return
    currentNum = currentNum + num
}

function addOperation(operation) {
    if (currentNum === '') return
    if (prevNum !== '') {
        calcMath()
    }
    oper = operation
    prevNum = currentNum
    currentNum = ''
}

function clearAllDisplay() {
    currentNum = ''
    prevNum = ''
    oper = undefined
}

function clearLastNum() {
    currentNum = currentNum.slice(0, -1)
}

function calcMath() {
    let calculation
    const prev = parseFloat(prevNum)
    const current = parseFloat(currentNum)
    switch (oper) {
        case '+':
            calculation = prev + current
            break
        case '-':
            calculation = prev - current
            break
        case '*':
            calculation = prev * current
            break
        case '/':
            calculation = prev / current
            break
        default:
            return
    }
    currentNum = calculation
    oper = undefined
    prevNum = ''
}

function displayDigits() {
    dataOutput.textContent = currentNum
}

numsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        addNumber(btn.textContent)
        displayDigits()
    })
})

operationBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        addOperation(btn.textContent)
        displayDigits()
    })
})

equalBtn.addEventListener('click', () => {
    calcMath()
    displayDigits()
})

clearAllBtn.addEventListener('click', () => {
    clearAllDisplay()
    displayDigits()
})

clearBtn.addEventListener('click', () => {
    clearLastNum()
    displayDigits()
})
