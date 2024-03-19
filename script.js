const title = document.querySelector(".about__title li");
const desc = document.querySelector(".about__main-skills");

title.addEventListener("click",() =>{
    desc.classList.toggle("open");
    title.classList.toggle("open");
})