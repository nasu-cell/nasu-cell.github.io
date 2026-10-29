
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