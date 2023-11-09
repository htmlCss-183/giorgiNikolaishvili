const stars = document.querySelectorAll('.star');
const resetButton = document.getElementById('reset');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        resetStars();
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('blue');
        }
    });
});

resetButton.addEventListener('click', resetStars);

function resetStars() {
    stars.forEach(star => {
        star.classList.remove('blue');
    });
}