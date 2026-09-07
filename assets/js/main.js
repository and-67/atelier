const intro = document.getElementById("intro");
const gallery = document.getElementById("gallery-container");

intro.addEventListener("click", enterGallery);

function enterGallery() {

    intro.classList.add("hidden");

    gallery.classList.remove("hidden");

}

const scrollText = document.querySelector('.intro-subtitle');

document.addEventListener('click', function() {
    
    scrollText.innerText = 'Scroll down';
});


const artworkOverlay = document.getElementById("artwork-overlay");
const closeArtwork = document.getElementById("close-artwork");

const overlayImage = document.getElementById("overlay-image");
const overlayTitle = document.getElementById("overlay-title");
const overlayMeta = document.getElementById("overlay-meta");
const overlayMedium = document.getElementById("overlay-medium");
const overlayDescription = document.getElementById("overlay-description");

const artworks = document.querySelectorAll(".hanging");


artworks.forEach((artwork) => {

    artwork.addEventListener("click", () => {

        const image = artwork.querySelector("img");
        const title = artwork.querySelector("h3");
        const meta = artwork.querySelector("p");

        overlayImage.src = image.src;
        overlayImage.alt = image.alt;

        overlayTitle.textContent = title.textContent;
        overlayMeta.textContent = meta.textContent;

        overlayMedium.textContent = "Medium · To be added";

        overlayDescription.textContent =
            "A short description of the artwork will appear here.";

        artworkOverlay.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});

closeArtwork.addEventListener("click", () => {

    artworkOverlay.style.display = "none";

    document.body.style.overflow = "";

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        artworkOverlay.style.display = "none";

        document.body.style.overflow = "";

    }

});