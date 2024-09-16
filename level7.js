//try to change the value of "number" by erasing 10 and writing a different number and observe the different output
let number = 2;
if (number > 5) {
    document.getElementById("message").innerHTML = "Number is greater than 5";
} else {
    document.getElementById("message").innerHTML = "Number is 5 or less";
}
// If the "let number" is bigger than 5 then the site will say the number is greater than 5
// If not (else) and it's lesser than 5 then the site will say number is 5 or less
// it show's up on the page wherever the Id="message" is written in the HTML code- in this instance it's in the <h1>
