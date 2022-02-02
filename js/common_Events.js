console.log("Chirag Studio website Event Manager Module");

// Handle Heading One Hover Event

// 1. create const for targeting the element
const theHeadingElement = document.getElementById("headingOne");

console.log(theHeadingElement);

theHeadingElement.addEventListener("mouseover",() => {
    document.getElementById("headingOne").style.color ="white";
});
theHeadingElement.addEventListener("mouseout",() => {
    document.getElementById("headingOne").style.color = "black";
});


// create hover animation effect for the Menu Navbar
// 1. position navbar on the webpage using js and css