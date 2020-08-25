document.addEventListener('DOMContentLoaded', beginGenerator)


function beginGenerator(){
    document.getElementById('generate-password-btn').addEventListener('click', function(event){
        
        // grab data from input form and convert to numbers
        var numTotalChars = Number(document.getElementById("num-characters").value)
        var numUpperCase = Number(document.getElementById('num-upper-case').value)
        var numSpecialCharacter = Number(document.getElementById('num-special-xters').value)
        var numNumbers = Number(document.getElementById('num-numbers').value)

        var numLowerCase = numTotalChars - (numUpperCase + numSpecialCharacter + numNumbers)
        
        // console.log(numLowerCase)           // check that the numbers are calculating correctly
        // console.log(typeof numLowerCase)    // makes sure numLowerCase is a number before proceeding
        
        // declare empty password variables
        var upperCasePassword = "";
        var lowerCasePassword = "";
        var numbersPassword = "";
        var specialXtersPassword = "";

        // function to generate random integers
        function randomIntegerGen(min, max){
            return Math.floor(min + Math.random() * (max + 1 - min))
        }

        // for loop to generate the different password classes using random function
        for (i = 0; i < numUpperCase; i++){
            random_upper = String.fromCharCode(randomIntegerGen(65, 90))
            upperCasePassword += random_upper
        }
        // console.log(upperCasePassword) // check that upper case letters were generated
        
        for (i = 0; i < numLowerCase; i++){
            random_lower = String.fromCharCode(randomIntegerGen(97, 122))
            lowerCasePassword += random_lower
        }
        // console.log(lowerCasePassword) // check that lower case letters were generated

        
        for (i = 0; i < numSpecialCharacter; i++){
            random_special_xters = String.fromCharCode(randomIntegerGen(33, 47))
            specialXtersPassword += random_special_xters
        }
        // console.log(specialXtersPassword) // check that special characters were generated
        
        for (i=0; i < numNumbers; i++){
            random_numbers = String.fromCharCode(randomIntegerGen(48, 57))
            numbersPassword += random_numbers
        }
        // console.log(numbersPassword) // check that string numbers were generated
        
        var unshuffledFinalPassword = upperCasePassword + lowerCasePassword + specialXtersPassword + numbersPassword
        // console.log(unshuffledFinalPassword)

        // shuffle the unshuffled final password for more randomness with for loop
        var shuffledFinalPassword = ""
        for (i=0; i < numTotalChars; i++){

            var endOfRange = numTotalChars - 1
            final_password_index = randomIntegerGen(0, endOfRange)
            shuffledFinalPassword += unshuffledFinalPassword[final_password_index]
        }
        // console.log(shuffledFinalPassword) // check that unshuffled was actually shuffled and randomized


        // output final shuffled password 
        var results = document.getElementById("result")
        var finalPassword = document.getElementById("final-password")
        results.textContent = "Your generated password is " + shuffledFinalPassword
        finalPassword.innerHTML = shuffledFinalPassword

        //finalPassword.style.backgroundColor = "green"

        results.style.color = "red"

        event.preventDefault()
    })

}
