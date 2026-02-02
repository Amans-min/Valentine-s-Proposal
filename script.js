function startProposal() {
    const name = document.getElementById("name").value;
    if (name) {
        // Hide the input field and show the proposal message
        document.getElementById("nameInput").style.display = "none";
        document.getElementById("question").style.display = "block";
        document.getElementById("proposalQuestion").innerText = `Will you be my Valentine, ${name}?`;

        // Add entrance animation to the name input section
        document.getElementById("question").classList.add('fadeIn');
    } else {
        alert("Please enter your name!");
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        startProposal();
    }
}

// Function to move the No Button randomly
function moveNoButton() {
    const noButton = document.getElementById("noButton");
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Function to show the message after clicking Yes
function showMessage() {
    const name = document.getElementById("name").value;

    // Change the proposal text to the confirmation message
    document.getElementById("proposalQuestion").innerText = `Congratulations, My beloved ${name}!`;

    // Hide both Yes and No buttons after clicking 'Yes'
    document.getElementById("yesButton").style.display = 'none';
    document.getElementById("noButton").style.display = 'none';

    // Trigger the explosion animation (hearts and sparkles)
    generateSparkles();
    generateHearts();
}

// Function to generate sparkles (fireworks effect)
function generateSparkles() {
    for (let i = 0; i < 50; i++) {  // More sparkles for a bigger explosion
        const sparkle = document.createElement('span');
        sparkle.innerHTML = '✨';  // Sparkle emoji for confetti effect
        sparkle.classList.add('sparkle');

        // Randomize animation delay and position
        const delay = Math.random() * 2; // Random delay
        sparkle.style.animationDelay = `${delay}s`;

        // Randomize the position of the sparkles
        const randomX = Math.random() * 200 - 100; // Random X position
        const randomY = Math.random() * 200 - 100; // Random Y position
        sparkle.style.left = `calc(50% + ${randomX}px)`;
        sparkle.style.top = `calc(50% + ${randomY}px)`;

        document.body.appendChild(sparkle);
    }
}

// Function to generate hearts explosion
function generateHearts() {
    for (let i = 0; i < 50; i++) {  // More hearts for a bigger explosion
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';  // Heart emoji for explosion
        heart.classList.add('heart');

        // Randomize animation delay and position
        const delay = Math.random() * 2; // Random delay
        heart.style.animationDelay = `${delay}s`;

        // Randomize the position of the hearts
        const randomX = Math.random() * 300 - 150; // Random X direction
        const randomY = Math.random() * 300 - 150; // Random Y direction
        heart.style.left = `calc(50% + ${randomX}px)`;
        heart.style.top = `calc(50% + ${randomY}px)`;

        document.body.appendChild(heart);
    }
}
