let numbers = [1, 2, 3, 4, 5 ]; // array of numbers NOTE- arrays start at 0 so the array number 1 is zero= example:
// if the array looks like this ["computer","mouse","keyboard"] computer is nr 0 mouse is nr 1 and keyboard is nr 2
let listHTML = ""; // empty string to make the HTML list

for (let i = 0; i < numbers.length; i++) {
    listHTML += "<li>Number at index " + i + " is " + numbers[i] + "</li>";
}
// Loop through each number in the 'numbers' array
//- so as long as i = 0 is smaller than numbers.length (5, the biggest number in the array) continue with i++
//i++ means 0 = 0+1 so if the answer to this formula is less than 5 continue doing more.

document.getElementById("numberList").innerHTML = listHTML;
// We make the id="number list" as "number at index "i" (from the loop), + numbers [i](array number) and show
//that from the HTML code
