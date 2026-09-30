const particles = document.getElementById("particles");

const giftButton = document.getElementById("giftButton");
const closeButton = document.getElementById("closeButton");
const letter = document.getElementById("letter");


/* Create falling background particles */

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    const size = Math.random() * 8 + 4;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        Math.random() * 5 + 4 + "s";

    particle.style.opacity =
        Math.random() * .7 + .2;

    particles.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);
}


/* Continuously create particles */

setInterval(createParticle, 250);


/* Initial particles */

for (let i = 0; i < 30; i++) {
    setTimeout(createParticle, i * 100);
}


/* Open birthday letter */

giftButton.addEventListener("click", () => {

    letter.classList.add("show");

});


/* Close birthday letter */

closeButton.addEventListener("click", () => {

    letter.classList.remove("show");

});


/* Click outside letter to close */

letter.addEventListener("click", (event) => {

    if (event.target === letter) {

        letter.classList.remove("show");

    }

});
const birthdaySong = document.getElementById("birthdaySong");

birthdaySong.volume = 0.7;

function playBirthdaySong() {
    birthdaySong.play()
        .then(() => {
            console.log("Music is playing!");
        })
        .catch((error) => {
            console.log("Music blocked:", error);
        });
}

/* Play when the user touches the screen */
document.addEventListener("touchstart", playBirthdaySong, {
    once: true
});

/* Also works with mouse click */
document.addEventListener("click", playBirthdaySong, {
    once: true
});

