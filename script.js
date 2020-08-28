document.addEventListener('DOMContentLoaded', beginGenerator)


function beginGenerator(){
    document.getElementById('generate-password-btn').addEventListener('click', function(event){
        
        // grab data from input form and convert to numbers
        var numTotalChars = Number(document.getElementById("num-characters").value)
        var numUpperCase = Number(document.getElementById('num-upper-case').value)
        var numSpecialCharacter = Number(document.getElementById('num-special-xters').value)
        var numNumbers = Number(document.getElementById('num-numbers').value)

        var numLowerCase = numTotalChars - (numUpperCase + numSpecialCharacter + numNumbers)
        
        // condition if the inputs are empty
        if (document.getElementById("num-characters").value === "" || document.getElementById("num-upper-case").value === "" || document.getElementById("num-special-xters").value === ""){
            alert ("Please enter value")
        } else {
        
            // condition if the total number of characters is smaller than other variables
            var negativeFlag = numTotalChars - (numUpperCase + numSpecialCharacter + numNumbers)
            if (negativeFlag < 0){
                alert("Please try again. Total # of characters is too low.")
            } else {
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
                
                for (i = 0; i < numLowerCase; i++){
                    random_lower = String.fromCharCode(randomIntegerGen(97, 122))
                    lowerCasePassword += random_lower
                }
                
                for (i = 0; i < numSpecialCharacter; i++){
                    random_special_xters = String.fromCharCode(randomIntegerGen(33, 47))
                    specialXtersPassword += random_special_xters
                }
                
                for (i=0; i < numNumbers; i++){
                    random_numbers = String.fromCharCode(randomIntegerGen(48, 57))
                    numbersPassword += random_numbers
                }
                
                var unshuffledFinalPassword = upperCasePassword + lowerCasePassword + specialXtersPassword + numbersPassword

                // shuffle the unshuffled final password for more randomness with for loop
                var shuffledFinalPassword = ""
                for (i=0; i < numTotalChars; i++){

                    var endOfRange = numTotalChars - 1
                    final_password_index = randomIntegerGen(0, endOfRange)
                    shuffledFinalPassword += unshuffledFinalPassword[final_password_index]
                }


                // output final shuffled password 
                var results = document.getElementById("result")
                var finalPassword = document.getElementById("final-password")
                results.textContent = "Your generated password is " + shuffledFinalPassword
                finalPassword.innerHTML = shuffledFinalPassword

                //finalPassword.style.backgroundColor = "green"

                results.style.color = "red"
                event.preventDefault()
            }

        }

       

        
    })

}
