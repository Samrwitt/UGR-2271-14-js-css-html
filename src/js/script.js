
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar__links');
    const hamburger = document.querySelector('.hamburger');

    navbarLinks.classList.toggle('show');
    hamburger.classList.toggle('show');
}







document.addEventListener('click', function(e) {
  // Check if the clicked element has the 'readmore-button' class
  if (e.target.classList.contains('readmore-button')) {
    // Find the parent card element of the clicked button
    var card = e.target.closest('.card');

    // Toggle the 'show-more' class on the 'text' element within the card
    var text = card.querySelector('.text');
    text.classList.toggle('show-more');
  }
});






