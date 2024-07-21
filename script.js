// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Chatbot functionality
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage.trim()) {
        const userMessageElem = document.createElement('div');
        userMessageElem.classList.add('user-message');
        userMessageElem.innerText = userMessage;
        messages.appendChild(userMessageElem);

        // Add bot response (placeholder)
        const botMessageElem = document.createElement('div');
        botMessageElem.classList.add('bot-message');
        botMessageElem.innerText = "This is a placeholder response. Integrate your chatbot API to respond accordingly.";
        messages.appendChild(botMessageElem);

        userInput.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
});
