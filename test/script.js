const PasswordBox = document.getElementById("password");

const length = 12; //12 characters password will be generated

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const lowerCase = "abcdefghijklmnopqrstuvwxyz" ;
const number = "0123456789" ;
const symbol = "@#$%^&*()[]{}?/=+-_~<>" ;

const allChars = upperCase + lowerCase + number + symbol;

function passgen(){
    let password = "";
    while(length>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    PasswordBox.value = password;
}

function copyPass(){
    const copy = PasswordBox.value;
    navigator.clipboard.writeText(copy);
}

const imageContainer = document.getElementById('imageContainer');
const hoverImage = document.getElementById('hoverImage');

imageContainer.addEventListener('click', () => {
  hoverImage.classList.add('clicked');

  // Reset after 2 seconds
  setTimeout(() => {
    hoverImage.classList.remove('clicked');
  }, 1500);
});
// DFDFDF