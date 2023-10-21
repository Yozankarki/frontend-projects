/* js for Resources anchor tag */
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleDropdown");
    const hideNav = document.getElementById("nav-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    toggleButton.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownContent.classList.toggle("active");
        if (hideNav.style.visibility === "hidden" || hideNav.style.visibility === "") {
            hideNav.style.visibility = "visible";
        } else {
            hideNav.style.visibility = "hidden";
        }
    });
});

/*search bar  */
const openSearchButton = document.getElementById("open-search");
const searchModal = document.getElementById("search-modal");
const closeSearchButton = document.getElementById("close-search");

openSearchButton.addEventListener("click", function () {
    searchModal.classList.add("active");
});

closeSearchButton.addEventListener("click", function () {
    searchModal.classList.remove("active");
});