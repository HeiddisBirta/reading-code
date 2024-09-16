function greet(name) { // we name a function "greet(name)"
    document.getElementById("message").innerHTML = "Hello, " + name; // We make the id="message" as "Hello, " + name and ask them to
    // use the HTML code and find Id="message" in this instance it's in the <h1>
}

greet("John");

// when we write greet("john"), when we run the code it should say Hello, John
// we can use whatever name we want there 
