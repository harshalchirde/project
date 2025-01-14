document.addEventListener('DOMContentLoaded', () => {
    // Handle Add to Cart and Buy Now buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const buyNowButtons = document.querySelectorAll('.buy-now');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Redirect to the signup page
            window.location.href = 'signup.html';
        });
    });

    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Redirect to the signup page
            window.location.href = 'signup.html';
        });
    });

    // Scroll Animation for Products and Neon Line
    const products = document.querySelectorAll('.product');
    const neonLine = document.querySelector('.neon-line');

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8;

        products.forEach(product => {
            const productTop = product.getBoundingClientRect().top;

            if (productTop < triggerBottom) {
                product.classList.add('visible');
            } else {
                product.classList.remove('visible');
            }
        });

        // Neon Line Animation
        if (window.scrollY > 0) {
            neonLine.classList.add('active');
        } else {
            neonLine.classList.remove('active');
        }
    }

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);

    // Search Bar Functionality
    const searchInput = document.querySelector('.search-bar input');
    
    // Add event listener for input in the search bar
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        products.forEach(product => {
            const productName = product.querySelector('h2').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = 'block'; // Show product if it matches
            } else {
                product.style.display = 'none'; // Hide product if it doesn't match
            }
        });
    });
});
