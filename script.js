// Get references to the HTML elements
const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

// Add a click event listener to the button
enterButton.addEventListener("click", function () {
    // Change the content of the paragraph to "Entered Metaverse"
    statusParagraph.innerHTML= "<h1>Enter Metaverse</h1>"  ;
});
