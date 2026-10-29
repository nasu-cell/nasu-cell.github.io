
function openModal(modalId) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        document.querySelectorAll(".modal").forEach(function (modal) {
            modal.style.display = "none";
        });

        document.body.style.overflow = "";
    }
});


const slideImages = {
    runner: [
        "Assets/3drun-title.png",
        "Assets/3drun-1.png"
    ],
    smash: [
        "Assets/smash-title.png",
        "Assets/smash-1.png",
        "Assets/smash-2.png"
    ],
    athletic: [
        "Assets/3dathletic-title.png",
        "Assets/3dathletic-1.png",
        "Assets/3dathletic-2.png"
    ],
    kawazu: [
        "Assets/kawazu-title.png",
        "Assets/kawazu-1.png",
        "Assets/kawazu-2.png",
        "Assets/kawazu-3.png"
    ],
    rues: [
        "Assets/rues-title.png",
        "Assets/rues-1.png",
        "Assets/rues-2.png",
        "Assets/rues-3.png",
        "Assets/rues-4.png"
    ]
};

const slideIndexes = {
    runner: 0,
    smash: 0,
    athletic: 0,
    kawazu: 0,
    rues: 0
};


function changeSlide(project, direction) {
    const images = slideImages[project];

    if (!images) return;

    slideIndexes[project] =
        (slideIndexes[project] + direction + images.length) % images.length;

    const index = slideIndexes[project];

    const image = document.getElementById(`${project}-slide`);
    const counter = document.getElementById(`${project}-slide-counter`);

    image.src = images[index];
    counter.textContent = `${index + 1} / ${images.length}`;
}
