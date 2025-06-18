const cajthamls = document.querySelectorAll(".cajthaml");

cajthamls.forEach((element) => {
    const originalContent = element.innerHTML;

    element.addEventListener("mouseover", () => {
        element.innerHTML = "🐐";
        console.log("Cajthaml hovered");
    });

    element.addEventListener("click", () => {
        element.innerHTML = originalContent;
        console.log("Cajthaml mouseout");
    });
});

const bellIcon = document.querySelector(".fa-bell");
var audio = new Audio("mixkit-church-bell-calling-603.wav")

bellIcon.addEventListener("mouseenter", () => {
    audio.play();
})
bellIcon.addEventListener("mouseleave", () => {
    audio.pause();
})

const heartIcon = document.querySelector(".fa-heart");
const originalColor = heartIcon.style.color;

heartIcon.addEventListener("mouseenter", () => {
    heartIcon.style.color = "red";
})
heartIcon.addEventListener("mouseleave", () => {
    heartIcon.style.color = originalColor;
})

