let touchStartY = 0;
let touchEndY = 0;

function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    touchEndY = event.touches[0].clientY;
}

function handleTouchEnd() {
    if (touchEndY - touchStartY > 400) {
        location.reload();
    }
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);

//---------------------------------

document.addEventListener('DOMContentLoaded', (event) => {
    const scrollContainer = document.getElementById('image-container');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');

    scrollLeftButton.addEventListener('click', () => {
        scrollContainer.scrollBy({
            top: 0,
            left: -300,
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener('click', () => {
        scrollContainer.scrollBy({
            top: 0,
            left: 300,
            behavior: 'smooth'
        });
    });

    updateButtons();

    scrollContainer.addEventListener('scroll', updateButtons);

    function updateButtons() {
        scrollLeftButton.disabled = scrollContainer.scrollLeft === 0;
        scrollRightButton.disabled = scrollContainer.scrollWidth - scrollContainer.scrollLeft === scrollContainer.clientWidth;
    }
});

//---------------------------------
document.getElementById('contactButton').addEventListener('click', function() {
    document.querySelector('.profile').style.display = 'none';
    document.querySelector('.contact').style.display = 'block';
});

document.getElementById('profileButton').addEventListener('click', function() {
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.profile').style.display = 'block';
});