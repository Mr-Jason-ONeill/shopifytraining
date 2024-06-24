const gridButtons = document.querySelectorAll('.grid-link-button');

gridButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const link = button.querySelector('.grid-link');
          if (link.textContent === 'Add To Cart') {
            link.textContent = 'Remove From Cart';
          } else {
            
            link.textContent = 'Add To Cart';
        }
    });
});
