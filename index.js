//Random Password generator
//character array
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

function generatePasswords() {
    if (passwordOne.textContent.length === 0 && passwordTwo.textContent.length === 0) {
        for(let i = 0; i < 15; i++){
            //password1
            let randomCharacter1 = Math.floor(Math.random()* characters.length)
            passwordOne.textContent += characters[randomCharacter1]
            //password2
            let randomCharacter2 = Math.floor(Math.random()* characters.length)
            passwordTwo.textContent += characters[randomCharacter2]
        }
    }
        else{
            eraseFields()
        }
    }
    function eraseFields(){
        passwordOne.innerText= ''
        passwordTwo.innerText= ''
        generatePswrd()
    }




