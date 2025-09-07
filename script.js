// Open the zoom modal with the clicked image
function openZoom(imageSrc) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');

  if (imageSrc) {
    modal.style.display = 'flex'; // Show the modal
    modalImage.src = imageSrc;  // Set the zoomed image source
  }
}

// Close the zoom modal
function closeZoom() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';  // Hide the modal
}

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}