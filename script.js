// Slideshow Logic
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (slideIndex + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
    setTimeout(showSlides, 3000); // Auto-change every 3 seconds
}

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

// Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 1000); // One heart per second

// Modal and Button Logic
const modal = document.getElementById('modal');
const btn = document.getElementById('surprise-btn');
const closeBtn = document.querySelector('.close');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Open modal on button click with confetti
btn.onclick = function() {
    modal.style.display = 'block';
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

// Close modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// دالة لإنشاء ورود كتير
function createRoses() {
    for (let i = 0; i < 50; i++) { // عدد الورد (غيره لو عايز أكتر أو أقل)
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.innerHTML = '🌹';
        rose.style.left = Math.random() * 100 + 'vw'; // موقع عشوائي أفقياً
        rose.style.animationDelay = Math.random() * 3 + 's'; // تأخير عشوائي
        document.body.appendChild(rose);
        setTimeout(() => rose.remove(), 5000); // تختفي بعد 5 ثواني
    }
}

// Yes/No Button Responses
yesBtn.onclick = function() {
    alert('Yay! I love you! ❤️');
    modal.style.display = 'none';
    createRoses(); // إطلاق الورد عند القبول
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } }); // كونفيتي إضافي للاحتفال
}

noBtn.onclick = function() {
    alert('Aww, but I\'ll keep trying! 😘');
    modal.style.display = 'none';
}

// Play Music
document.getElementById('play-music').addEventListener('click', function() {
    const music = document.getElementById('bg-music');
    music.play();
    this.style.display = 'none'; // إخفاء زر الموسيقى بعد التشغيل
    document.getElementById('surprise-btn').style.display = 'inline-block'; // إظهار زر السربرايز في النص
});