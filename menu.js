document.addEventListener("DOMContentLoaded", function () {
    const menuItemsContainer = document.getElementById("menu-items");
    const menuTabs = document.querySelectorAll(".nav-item");

    // Function to load menu items based on category
    function loadMenu(category) {
        const items = menuData[category] || [];
        menuItemsContainer.innerHTML = "";

        items.forEach(item => {
            const dishElement = document.createElement("div");
            dishElement.className = "food-container";
            dishElement.innerHTML = `
                <!-- Cart Button -->
                <button class="cart-button">
                    <i class="fa-solid fa-circle-info"></i>

                </button>
        
                <!-- Food Item -->
                <div class="food-item">
                    <!-- Image Container -->
                    <div class="food-img-wrapper">
                        <img src="${item.image}" alt="${item.title}" class="food-img">
                    </div>
                    
                    <!-- Bordered Title & Description -->
                    <div class="food-info">
                        <h4 class="food-name">${item.title}</h4>
                        <p class="food-desc">${item.desc}</p>
                    </div>
                </div>
        
                <!-- Price Box -->
                <div class="food-price-box">
                    <h1 class="food-price">${item.price}</h1>
                </div>
            `;

            // In your menu.js file, modify the click handler to include the ID:
            const infoButton = dishElement.querySelector('.cart-button');
            infoButton.addEventListener('click', (e) => {
                e.preventDefault();
                // Navigate to details page with item ID and category
                window.location.href = `item-details.html?id=${item.id}&category=${encodeURIComponent(category)}`;
            });

            menuItemsContainer.appendChild(dishElement);
        });
    }

    // Add event listeners to navigation items
    menuTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            menuTabs.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Load selected menu category
            const category = this.getAttribute("data-category");
            loadMenu(category);
        });
    });

    // Load the default menu (Pasta) on page load
    loadMenu("coffee");
});
