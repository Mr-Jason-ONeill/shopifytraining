const gridButton = document.getElementByClassName('.grid-link-button');

        // Add click event listener to the button
        gridButton.addEventListener('click', function() {
            // Check the current text of the button
            if (gridButton.textContent === 'Add to Cart') {
                // Change the text to 'Remove from Cart'
                gridButton.textContent = 'Remove from Cart';
            } else {
                // Change the text back to 'Add to Cart'
                gridButton.textContent = 'Add to Cart';
            }
        });