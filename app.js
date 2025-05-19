const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

noButton.addEventListener('click', () => {
    // Add shake animation to No button
    noButton.classList.add('shake');
    setTimeout(() => noButton.classList.remove('shake'), 400);

    // Enlarge the Yes button with animation
    yesButton.style.width = `${yesButton.offsetWidth * 1.2}px`;
    yesButton.style.height = `${yesButton.offsetHeight * 1.2}px`;
    yesButton.style.transition = 'width 0.3s cubic-bezier(.68,-0.55,.27,1.55), height 0.3s cubic-bezier(.68,-0.55,.27,1.55)';

    if (
        yesButton.offsetWidth >= window.innerWidth * 0.9 ||
        yesButton.offsetHeight >= window.innerHeight * 0.9
    ) {
        yesButton.classList.add('enlarged', 'heartbeat');
        yesButton.textContent = "You can't escape love! ❤️";
        noButton.style.display = 'none';
    }
});

yesButton.addEventListener('click', () => {
    yesButton.textContent = "I love you too! ❤️";
    noButton.style.display = 'none';
    yesButton.classList.remove('heartbeat');
});