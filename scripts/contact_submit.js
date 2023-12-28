// ************************* Contact Form Submit Action *************************

let form = document.getElementById("contact-form");
let message = document.getElementById("submit-message");

function clearMessage() {
    message.innerHTML = "";
    message.classList.remove("slide-out");
}

function submitContactForm(event) {
    event.preventDefault();
    form.reset();

    // Slide-In Animation
    message.classList.add("slide-in");
    message.innerHTML = "<b>Your request has been sent!</b> Our staff will respond to your request within 2 business days.";

    // Slide-Out Animation
    setTimeout(function() { message.classList.remove("slide-in"); }, 5000);
    setTimeout(function() { message.classList.add("slide-out"); }, 6000);

    setTimeout(clearMessage, 7000);
}

form.addEventListener('submit', submitContactForm);