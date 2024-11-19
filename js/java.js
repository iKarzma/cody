
// var name=prompt("enter your name");
// var email=prompt("enter your email");
// document.write("hello "+name+" your email is "+email);
// Create a new button element
    // Create a new button element
    var button = document.createElement("button");

    // Add the CSS class to the button
    button.className = "stb";

    // Create a text node for the button
    var node = document.createTextNode("This is a new button.");

    // Append the text node to the button
    button.appendChild(node);

    // Append the button to the body of the document
    document.body.appendChild(button);

    // Add an onclick event to the button
    button.onclick = function() {
        window.location = "../home.html";  // Navigate to the home.html page
    }