function startProposal() {
    const name = document.getElementById("name").value;
    if (name) {
        document.getElementById("nameInput").style.display = "none";
        document.getElementById("question").style.display = "block";
        document.getElementById("proposalQuestion").innerText = `${name}, Will you be my Valentine?`;

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

function moveNoButton() {
    const noButton = document.getElementById("noButton");
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function showMessage() {
    const name = document.getElementById("name").value;

    // Change text and add animation
    document.getElementById("proposalQuestion").innerText = `Congratulations, my beloved ${name}!`;

    // Hide both Yes and No buttons after clicking 'Yes'
    document.getElementById("yesButton").style.display = 'none';
    document.getElementById("noButton").style.display = 'none';

    // Add multiple hearts and sparkles simultaneously after clicking 'Yes'
    for (let i = 0; i < 50; i++) {  // More hearts for a bigger explosion
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');

        // Randomize animation delay and position for a more dynamic effect
        const delay = Math.random() * 2; // Random delay for animation start
        heart.style.animationDelay = `${delay}s`;

        // Randomize the direction of the explosion
        const randomX = Math.random() * 300 - 150; // Random X direction
        const randomY = Math.random() * 300 - 150; // Random Y direction
        heart.style.left = `calc(50% + ${randomX}px)`;
        heart.style.top = `calc(50% + ${randomY}px)`;

        document.body.appendChild(heart);
    }

    // Add firework-style sparkles (like confetti or fireworks)
    for (let j = 0; j < 30; j++) {  // More sparkles for a festive feel
        const sparkle = document.createElement('span');
        sparkle.innerHTML = '✨';
        sparkle.classList.add('sparkle');
        document.body.appendChild(sparkle);
    }

    // Disable buttons after clicking 'Yes'
    document.getElementById("yesButton").disabled = true;
    document.getElementById("noButton").disabled = true;
}

