// Function to change the background color
function changeBackgroundColor() {
    const colors = ['#f0f8ff', '#ffebcd', '#fafad2', '#d3ffd3', '#ffe4e1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to display a dynamic greeting
function displayGreeting() {
    const hours = new Date().getHours();
    let greeting = "Good day!";
    
    if (hours >= 5 && hours < 12) {
        greeting = "Good morning!";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Good afternoon!";
    } else if (hours >= 18 && hours < 22) {
        greeting = "Good evening!";
    } else {
        greeting = "Good night!";
    }

    document.getElementById("greeting").textContent = greeting;
}

// Call the displayGreeting function when the page loads
window.onload = function() {
    displayGreeting();
};