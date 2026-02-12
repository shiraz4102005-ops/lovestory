
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const success = document.getElementById("success");
const card = document.querySelector(".card");
const videoBox = document.getElementById("videoBox");
const bgMusic = document.getElementById("bgMusic");

/* Keep NO button inside card */
function moveButton(){

    const maxX = card.clientWidth - noBtn.offsetWidth - 20;
    const maxY = card.clientHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

/* YES button click */
yesBtn.addEventListener("click", () => {

    success.style.display = "block";
    videoBox.style.display = "block";

    bgMusic.play(); // 🎵 Start romantic music

    createHearts();
});

/* Floating hearts */
function createHearts(){

    setInterval(()=>{
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML="💖";

        heart.style.left = Math.random()*window.innerWidth+"px";
        heart.style.top = window.innerHeight+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },5000);

    },200);
}