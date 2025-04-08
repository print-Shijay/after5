AOS.init();
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".containerr");

    gsap.to(".el", {
        scale: (index) => {
            const scales = [4, 5, 6, 5, 6, 8, 9]; // Scale factors for each image
            return scales[index] || 1; // Default to 1 if index is out of range
        },
        ease: "none",
        scrollTrigger: {
            trigger: container,
            start: "top top", 
            end: "bottom bottom",
            scrub: true
        }
    });
});


let rotation = 0;
let autoRotate;

// Function to rotate the table
function rotateTable(direction = 1) {
    rotation += 90 * direction;
    document.querySelector(".rotating-table").style.transform = `rotate(${rotation}deg)`;

    // Counter-rotate each dish to keep them upright
    document.querySelectorAll(".dish").forEach(dish => {
        dish.style.transform = `rotate(${-rotation}deg)`;
    });

    updateProductDetails();
}

// Start auto-rotation with reset mechanism
function startAutoRotate() {
    if (autoRotate) clearInterval(autoRotate); // Prevent multiple intervals
    autoRotate = setInterval(() => rotateTable(1), 5000);
}

// Event Listeners for manual buttons (with reset)
document.getElementById("next-btn").addEventListener("click", () => {
    rotateTable(1);
    startAutoRotate(); // Restart auto-rotation
});

document.getElementById("prev-btn").addEventListener("click", () => {
    rotateTable(-1);
    startAutoRotate(); // Restart auto-rotation
});

// Function to update product details based on rotation
function updateProductDetails() {
    const products = [
        { title: "Deep Choco", desc: "Rich chocolate mousse with layers of dark cocoa and whipped cream." },
        { title: "Matcha", desc: "Smooth matcha green tea cake with white chocolate filling." },
        { title: "Choco Bliss", desc: "Decadent triple-layer chocolate cake with fudge frosting." },
        { title: "Pink Fantasy", desc: "Strawberry panna cotta topped with fresh berry compote." }
    ];

    let index = (rotation / 90) % products.length;
    if (index < 0) index += products.length; // Ensure positive index

    // Update title and description
    document.getElementById("product-title").textContent = products[index].title;
    document.getElementById("product-desc").textContent = products[index].desc;

    // Highlight the corresponding image
    highlightImage(index);
}

// Highlight the corresponding image based on current rotation
function highlightImage(index) {
    const images = document.querySelectorAll(".slider-img");
    images.forEach((img, i) => {
        img.classList.remove('highlight'); // Remove highlight class from all images
        if (i === index) {
            img.classList.add('highlight'); // Add highlight to the corresponding image
        }
    });
}

// Event listener for image clicks to move to corresponding title
document.querySelectorAll(".slider-img").forEach((img, index) => {
    img.addEventListener("click", () => {
        // Rotate the table to the corresponding position
        const targetRotation = (index * 90);
        const rotationSteps = (targetRotation - rotation) / 90;
        
        // Rotate to the desired position with proper direction
        rotateTable(rotationSteps);
        startAutoRotate(); // Restart auto-rotation

        // Update the product details
        updateProductDetails();
    });
});

// Start auto-rotation initially
startAutoRotate();




// Initialize EmailJS with your user ID
(function() {
    emailjs.init("pk_GRYOWQxfw86c29"); // You'll need to replace this with your actual EmailJS user ID
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Send email using EmailJS
    emailjs.send("service_21krw4c", "template_08bbj66", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: "0323-3624@lspu.edu.ph"
    })
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        // Show success message
        document.getElementById('successMessage').classList.remove('d-none');
        document.getElementById('errorMessage').classList.add('d-none');
        // Reset form
        document.getElementById('contactForm').reset();
    }, function(error) {
        console.log("FAILED...", error);
        // Show error message
        document.getElementById('errorMessage').classList.remove('d-none');
        document.getElementById('successMessage').classList.add('d-none');
    });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.loading-spinner');
    
    // Show loading state
    submitBtn.disabled = true;
    btnText.classList.add('d-none');
    spinner.classList.remove('d-none');
    
    // Simulate form submission (replace with your actual form submission code)
    setTimeout(() => {
        // On success:
        document.getElementById('successMessage').classList.remove('d-none');
        // On error: document.getElementById('errorMessage').classList.remove('d-none');
        
        // Reset button state
        submitBtn.disabled = false;
        btnText.classList.remove('d-none');
        spinner.classList.add('d-none');
        
        // Reset form if needed
        // this.reset();
    }, 2000);
});