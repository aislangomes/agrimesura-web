const modal = document.getElementById("myModal");
const projects = document.getElementsByClassName("projectsImage");
const modalImg = document.getElementById("img1");

for (let project of projects) {
    project.addEventListener("click", e => {
        modal.style.display = "block";
        modalImg.src = `assets/images/${e.target.id}.png`;
    });
}

modal.addEventListener("click", () => {
    modal.style.display = "none"
});