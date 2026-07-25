const intro = document.getElementById("intro");
const gallery = document.getElementById("gallery-container");

intro.addEventListener("click", enterGallery);

function enterGallery() {

    intro.classList.add("hidden");

    gallery.classList.remove("hidden");

}