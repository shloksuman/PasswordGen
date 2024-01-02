const passwordBox = document.getElementById("password");
const length = 12; //12 characters password will be generated

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const lowerCase = "abcdefghijklmnopqrstuvwxyz" ;
const number = "0123456789" ;
const symbol = "@#$%^&*()[]{}?/=+-_~<>" ;

const allChars = upperCase + lowerCase + number + symbol;

//function to generate random password

function createPassword(){
    let password = "";
    // password += upperCase[Math.floor(Math.random()* upperCase.length)];
    // password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    // password += number[Math.floor(Math.random()* number.length)];
    // password += symbol[Math.floor(Math.random()* symbol.length)];

    var num = 0;
    console.log("iteration number : " , num++);
    console.log("password(before entering loop) : " , password);

    while(length > password.length){
        password += allChars[Math.floor(Math.random()* allChars.length)]
        console.log("iteration number : " , num++);
        console.log("password : " , password);
    }
    passwordBox.value = password;
}

// function copyPassword(){
//     passwordBox.select();
//     document.execCommand("copy");
//     alert("Copied!");
// }

function copyPassword() {
    const copy = passwordBox.value;
    navigator.clipboard.writeText(copy);
  }