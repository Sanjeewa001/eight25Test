function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger on initial load

// Mouse cursor animation
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Hide cursor when mouse leaves the window
    if (e.target.tagName === 'HTML') {
        cursor.style.opacity = 0;
        follower.style.opacity = 0;
    } else {
        cursor.style.opacity = 1;
        follower.style.opacity = 1;
    }
});

function updateCursor() {
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;
    
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    follower.style.transform = `translate3d(${posX - 20}px, ${posY - 20}px, 0)`;
    
    requestAnimationFrame(updateCursor);
}
updateCursor();

// Hide cursor when mouse leaves the window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
    follower.style.opacity = 0;
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = 1;
    follower.style.opacity = 1;
});