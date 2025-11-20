
// typing effect
const text = document.querySelector('.text');
const content = "Hi, I'm Seoeun.";
const cursor = document.querySelector('.blink');
let i = 0;
let speed = 75;

function typing() {
    if (i < content.length) {
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++;
    }
    else{
        cursor.style.display = 'none';
    }
}
setInterval(typing, speed);

const faders = document.querySelectorAll('.fade');

const options = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

const headerText = document.querySelector('.header-text');
const navBar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerText.classList.add('hide');      // 텍스트 사라짐
        navBar.classList.add('scroll-up');     // 네비 위로
    } else {
        headerText.classList.remove('hide');
        navBar.classList.remove('scroll-up');
    }
});