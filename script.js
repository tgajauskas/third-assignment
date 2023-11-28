const body = document.body
const input = document.getElementById("input")

function changeBackground(){
    const inputValue = input.value
    if(inputValue.length <= 2) {
        body.style.backgroundColor = "red"
    } else {
        body.style.backgroundColor = "green"
    }
}