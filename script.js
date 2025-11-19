// Smooth scroll for button
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Fake form submit message
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").innerText = "Message sent! I’ll get back to you soon.";
});
