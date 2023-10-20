/* 1 modal UN */
var modal = document.getElementById("modal");
var btn = document.getElementById("ver-noticia-btn");
var fecharBtn = document.getElementById("fechar-modal");

btn.onclick = function () {
    modal.style.display = "block";
}

fecharBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

/* 2 modal UN */
var modal2 = document.getElementById("modal-2");
var btn2 = document.getElementById("ver-noticia-btn-2");
var fecharBtn2 = document.getElementById("fechar-modal-2");

btn2.onclick = function () {
    modal2.style.display = "block";
}

fecharBtn2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
}
