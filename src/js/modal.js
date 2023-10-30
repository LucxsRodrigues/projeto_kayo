const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// MODAL 2

const openModalBtn2 = document.getElementById("openModalBtn2");
const closeModalBtn2 = document.getElementById("closeModalBtn2");
const modal2 = document.getElementById("myModal2");

openModalBtn2.addEventListener("click", () => {
    modal2.style.display = "block";
});

closeModalBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
});

// MODAL 3

const openModalBtn3 = document.getElementById("openModalBtn3");
const closeModalBtn3 = document.getElementById("closeModalBtn3");
const modal3 = document.getElementById("myModal3");

openModalBtn3.addEventListener("click", () => {
    modal3.style.display = "block";
});

closeModalBtn3.addEventListener("click", () => {
    modal3.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
});