const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

noButton.addEventListener('click', () => {
    // Enlarge the Yes button instead of No
    yesButton.style.width = `${yesButton.offsetWidth * 1.2}px`;
    yesButton.style.height = `${yesButton.offsetHeight * 1.2}px`;
    yesButton.style.transition = 'width 0.2s, height 0.2s';

    if (
        yesButton.offsetWidth >= window.innerWidth * 0.9 ||
        yesButton.offsetHeight >= window.innerHeight * 0.9
    ) {
        yesButton.classList.add('enlarged');
        yesButton.textContent = "You can't escape love! ❤️";
        noButton.style.display = 'none';
    }
});

yesButton.addEventListener('click', () => {
    yesButton.textContent = "I love you too! ❤️";
    noButton.style.display = 'none';
});