document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
        });
    });
    
    document.querySelectorAll(".content").forEach(content => {
        observer.observe(content);
    });
    });


//---------------------------------

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
document.getElementById('contactButton').addEventListener('click', function() {
    document.querySelector('.profile').style.display = 'none';
    document.querySelector('.contact').style.display = 'block';
});

document.getElementById('profileButton').addEventListener('click', function() {
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.profile').style.display = 'block';
});
//---------------------------------

