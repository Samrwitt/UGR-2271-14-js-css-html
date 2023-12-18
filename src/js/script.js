
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar__links');
    const hamburger = document.querySelector('.hamburger');

    navbarLinks.classList.toggle('show');
    hamburger.classList.toggle('show');
}







document.addEventListener('click', function(e) {
  
  if (e.target.classList.contains('readmore-button')) {
    var card = e.target.closest('.card');

    
    var text = card.querySelector('.text');
    text.classList.toggle('show-more');
  }
});






