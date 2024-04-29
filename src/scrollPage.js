document.addEventListener("DOMContentLoaded", function() {
    const projectsBtn = document.querySelector("#projectsButton");
    const workBtn = document.querySelector("#worksButton");
    const aboutBtn = document.querySelector("#aboutButton");
    const talkToMeBtn = document.querySelector("#emailButton");

    const projectDiv = document.querySelector("#projects");
    const workDiv = document.querySelector("#work");
    const aboutDiv = document.querySelector("#about");
    const emailDiv = document.querySelector(".contact");

    projectsBtn.addEventListener("click", function() {
        projectDiv.scrollIntoView({ behavior: 'smooth' });
    });

    workBtn.addEventListener("click", function() {
        workDiv.scrollIntoView({ behavior: 'smooth' });
    });

    aboutBtn.addEventListener("click", function() {
        aboutDiv.scrollIntoView({ behavior: 'smooth' });
    });

    talkToMeBtn.addEventListener("click", function() {
        emailDiv.scrollIntoView({ behavior: 'smooth' });
    });
});
