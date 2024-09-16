//This is the final boss. If you are able to understand fully what is going on here you are ready to take on the world of JavaScript!
function add(a, b) {
    return a + b;
}

let result = add(5, 10);
document.getElementById("result").innerHTML = "The result is: " + result;

// return means what we want to see on the site so in this instance we want to see a + b
// In the function parameters we say (a, b) and in the result we change the parameters to (5, 10) a= 5 b= 10
// then we pick up the id from HTML and ask them to show us the results from the function by running (return) the function
// the answer should be 15
