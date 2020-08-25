var numTotalChars = document.getElementById("num-characters").value
var numUpperCase = document.getElementById('num-upper-case').value
var numSpecialCharacter = document.getElementById('num-special-xters').value
var numNumbers = document.getElementById('num-numbers').value


document.getElementById('generate-password-btn').addEventListener('click', function(){
    console.log(numTotalChars)


    document.getElementById("result").innerHTML = numTotalChars

    event.preventDefault()
})

