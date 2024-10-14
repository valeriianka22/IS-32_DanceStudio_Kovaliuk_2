const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}






// const carousel = document.querySelector(".carousel"),
// firstImg = carousel.querySelectorAll("img")[0];
// arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false, prevPageX, prevScrollLeft;

// const showHideIcons = () => {
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
//     arrowIcons[0].style.display = carousel.scrollLeft <= 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft >= scrollWidth - 1 ? "none" : "block";
// }

// showHideIcons();

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         let firstImgWidth = firstImg.clientWidth + 14;
//         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//         setTimeout(() => showHideIcons(), 60);
//     });
// });

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragStart) return;
//     e.preventDefault();
//     carousel.classList.add("dragging");
//     let positionDiff = e.pageX - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }

// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseup", dragStop);
// carousel.addEventListener("mouseleave", dragStop);





// document.addEventListener('DOMContentLoaded', () => {
//     const carousel = document.querySelector('.carousel');
//     const leftArrow = document.getElementById('left');
//     const rightArrow = document.getElementById('right');
//     const totalImages = carousel.children.length; // Get total number of images
//     let currentIndex = 0; // Keep track of the current image index

//     // Initially hide the left arrow
//     leftArrow.style.display = 'none';

//     // Scroll the carousel to the left
//     leftArrow.addEventListener('click', () => {
//         // Move to the left
//         currentIndex--;
//         carousel.scrollBy({
//             left: -carousel.clientWidth / 3, // Adjust scroll amount as needed
//             behavior: 'smooth'
//         });

//         // Update arrow visibility
//         updateArrows();
//     });

//     // Scroll the carousel to the right
//     rightArrow.addEventListener('click', () => {
//         // Move to the right
//         currentIndex++;
//         carousel.scrollBy({
//             left: carousel.clientWidth / 3, // Adjust scroll amount as needed
//             behavior: 'smooth'
//         });

//         // Update arrow visibility
//         updateArrows();
//     });

//     // Function to update arrow visibility
//     function updateArrows() {
//         // Show the left arrow if we are past the first image
//         if (currentIndex > 0) {
//             leftArrow.style.display = 'block';
//         } else {
//             leftArrow.style.display = 'none';
//         }

//         // Hide the right arrow if we are at the last image
//         if (currentIndex >= totalImages - 3) { // Adjust based on visible images
//             rightArrow.style.display = 'none';
//         } else {
//             rightArrow.style.display = 'block';
//         }
//     }
// });