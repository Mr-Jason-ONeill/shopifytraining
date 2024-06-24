const gridButton = document.querySelectorAll('.grid-link-button');

        // Add click event listener to the button
        gridButton.addEventListener('click', function() {
            // Check the current text of the button
            if (gridButton.textContent === 'Add To Cart') {
                // Change the text to 'Remove from Cart'
                gridButton.textContent = 'Remove From Cart';
            } else {
                // Change the text back to 'Add to Cart'
                gridButton.textContent = 'Add To Cart';
            }
        });