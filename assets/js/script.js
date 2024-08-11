// Array of image URLs for the banner
const bannerImages = [
  "assets/img/neymar-barcelona-football-wallpaper-preview.jpg",
  "assets/img/neymar_jr_desktop_wallpaper_by_thiagojustino_dbkyvef-fullview.jpg",
  "assets/img/neyhall.jpeg"
];

// Index to track the current image
let currentIndex = 0;

// Function to change the banner image
function changeBannerImage() {
const bannerImageElement = document.getElementById('bannerImage');
currentIndex = (currentIndex + 1) % bannerImages.length;
bannerImageElement.src = bannerImages[currentIndex];
}

// Change banner image every 3 seconds
setInterval(changeBannerImage, 500);

// Function to open the modal
function openModal(src) {
const modal = document.getElementById('myModal');
const modalImage = document.getElementById('modalImage');
modal.style.display = "block";
modalImage.src = src;
}

// Function to close the modal
function closeModal() {
const modal = document.getElementById('myModal');
modal.style.display = "none";
}
// Function to open the modal and display the clicked image
function openModal(src) {
  const modal = document.getElementById('myModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = "block";
  modalImage.src = src;
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = "none";
}
