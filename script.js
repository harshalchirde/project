document.addEventListener('DOMContentLoaded', () => {
    // Handle Add to Cart and Buy Now buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const buyNowButtons = document.querySelectorAll('.buy-now');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'signup.html';
        });
    });

    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'signup.html';
        });
    });

    // Scroll Animation
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
});
