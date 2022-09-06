let remValue = 0
let emValue = 0
let rootPixelValue = 16
let elementPixelValue = 0
let desiredPixelValue = 0


// **********Functions that Calculate**********

function calculateRem(rootfont, desired) {
    const res = desired / rootfont
    return `${res}<br>rem`
}

function calculateEm(elFontSize, desired) {
    const res = desired / elFontSize
    return `${res}<br>em`
}

// **********Functions that Handle Change**********

function handleRootChange(e) {
    rootPixelValue = e.target.value
    renderResults()
}

function handleDesiredChange(e) {
    desiredPixelValue = e.target.value
    renderResults()
}

function handleElementChange(e) {
    elementPixelValue = e.target.value
    renderResults()

}

// **********Function that Renders**********

function renderResults() {
    const emResults = document.getElementById("em-results")
    const remResults = document.getElementById("rem-results")

    emResults.innerHTML = calculateEm(elementPixelValue, desiredPixelValue)
    remResults.innerHTML = calculateRem(rootPixelValue, desiredPixelValue)
}


// **********Event Listeners**********

document.getElementById("font-size-input").addEventListener("change", handleRootChange)
document.getElementById("desired-font").addEventListener("change", handleDesiredChange)
document.getElementById("el-font-size").addEventListener("change", handleElementChange)

