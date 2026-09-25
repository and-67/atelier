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

        artworkOverlay.classList.add("is-open");
        document.body.style.overflow = "hidden";

    });

});

closeArtwork.addEventListener("click", () => {

    artworkOverlay.classList.remove("is-open");
    document.body.style.overflow = "";

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        artworkOverlay.classList.remove("is-open");
        document.body.style.overflow = "";

    }

});

artworkOverlay.addEventListener("click", (event) => {
    if (event.target === artworkOverlay) {
        artworkOverlay.classList.remove("is-open");
        document.body.style.overflow = "";
    }
});


//for artworks//
const artworkElements = document.querySelectorAll(".artwork");
const artworkObserver = new IntersectionObserver (
    (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add("visible");
                artworkObserver.unobserver(entry.target);
            }
        });
    },
    {threshold: 0.15

    }
);

artworkElements.forEach((artwork) => {
    artworkObserver.observe(artwork);
});



//for about section//
const aboutSection = document.getElementById("about");

const aboutObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                aboutObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

aboutObserver.observe(aboutSection);
