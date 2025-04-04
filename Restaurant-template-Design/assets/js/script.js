document.addEventListener('DOMContentLoaded', () => {
    // Handle Order Button Click in Navbar
    const orderButton = document.querySelector('.btn-brand[href="#"]');
    if (orderButton) {
        orderButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Order functionality is not fully implemented yet. Please fill out the reservation form or contact us!');
        });
    }

    // Handle Reservation Button in Hero Section
    const reservationButtons = document.querySelectorAll('.carousel-item .btn-brand');
    reservationButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showReservationForm();
        });
    });

    // Handle Menu Item Selection
    const menuItems = document.querySelectorAll('.menu-item');
    let cart = [];

    menuItems.forEach(item => {
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.className = 'btn btn-primary mt-2';
        item.appendChild(addToCartButton);

        addToCartButton.addEventListener('click', () => {
            const title = item.querySelector('h5')?.textContent || 'Unknown Item';
            const price = prompt(`Enter price for ${title}:`) || '0'; // Simulating price input for simplicity
            cart.push({ name: title, price: parseFloat(price) });
            updateCart();
            alert(`${title} has been added to your cart!`);
        });
    });

    // Update Cart Display
    function updateCart() {
        const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
        console.log('Current Cart:', cart);
        console.log('Total: $' + cartTotal.toFixed(2));
        // You can add a cart display element in HTML and update it here
    }

    // Show Reservation Form (Modal or Direct)
    function showReservationForm() {
        const form = document.querySelector('#Form form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
            form.classList.add('show');
        } else {
            alert('Reservation form not found. Please contact us directly.');
        }
    }

    // Handle Reservation Form Submission
    const reservationForm = document.querySelector('#Form form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = reservationForm.querySelector('#email').value;
            const name = reservationForm.querySelector('#name').value;
            const date = reservationForm.querySelector('input[type="date"]').value;
            const number = reservationForm.querySelector('input[type="number"]').value;
            const feedback = reservationForm.querySelector('textarea').value;

            if (email && name && date && number) {
                const reservationDetails = {
                    email,
                    name,
                    date,
                    numberOfPeople: number,
                    feedback
                };

                console.log('Reservation Details:', reservationDetails);
                alert('Reservation submitted successfully! We will contact you soon.');
                
                // Clear form
                reservationForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Handle Tab Navigation for Menu
    const tabButtons = document.querySelectorAll('.nav-pills .nav-item button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Handle Feedback Carousel
    const reviewCarousel = new bootstrap.Carousel(document.getElementById('carousel-review'), {
        interval: 2000,
        wrap: true
    });

    // Add Explore Button Functionality
    const exploreButton = document.querySelector('#About .btn-brand');
    if (exploreButton) {
        exploreButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('intro-text').scrollIntoView({ behavior: 'smooth' });
            alert('Explore our menu and features!');
        });
    }

    // Add Social Media Link Functionality (Footer)
    const socialIcons = document.querySelectorAll('#footer .stars i');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = icon.className.split('-')[1];
            alert(`Redirecting to our ${platform} page!`);
            // Here you can add actual URL redirection
            // window.open(`https://www.${platform}.com/resto`, '_blank');
        });
    });

    // Initialize Bootstrap Components
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});
