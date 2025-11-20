
// typing effect
const text = document.querySelector('.text');
const content = "Hi, I'm Seoeun.";
const cursor = document.querySelector('.blink');
let i = 0;
let speed = 200;

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