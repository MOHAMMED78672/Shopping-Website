function loadPage(pageName) {
    const mainContent = document.getElementById('main-content');

    if (pageName === 'home') {
        // Load the "home" section
        mainContent.innerHTML = `
        <section>
        <!-- Home page content -->
        <div class="mt-5">
            <div class="row">
                <div class="col-12">
                    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                        <!-- Enable Autoplay -->
                        <ol class="carousel-indicators">
                            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                        </ol>
    
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="Sliders/Slider1.jpg" alt="Image 1">
                            </div>
    
                            <div class="carousel-item">
                                <img src="Sliders/Slider2.jpg" alt="Image 2">
                            </div>
    
                            <div class="carousel-item">
                                <img src="Sliders/Slider3.jpg" alt="Image 3">
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
        <div id="product-list" class="row"></div>
        </div>
    
        <div class="container-fluid">
            <div id="category-list" class="row"></div>
        </div>

    </section>
        `;
        // Fetch and display products from "products.json"
        fetchProductsAndDisplay();
        // Call the function to display categories on the home page
        fetchCategoriesAndDisplayOnHome();
    }

    else if (pageName === 'about') {
        // Load the "about us" section with random data
        mainContent.innerHTML = `
            <section>
                <!-- About Us page content -->
                <h2 class="mt-5">About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <!-- Add more about us content here -->
            </section>
        `;
    }

    else if (pageName === 'products') {
        // Load the "about us" section with random data
        mainContent.innerHTML = `
            <section>
                <!-- Products page content -->
                <h2 class="mt-5">New Products Launch Soon</h2>
                <!-- Add more about us content here -->
            </section>
        `;
    }

    else if (pageName === 'contact') {
        // Load the "Contact Us" form into the mainContent element
        mainContent.innerHTML = `
            <section>
                <!-- "Contact Us" page content -->
                <div class=" mt-5 about-us">  
                <form id="contact" action="" method="post">
                  <h3>Contact Us Form</h3>
                  <h4>Enter your details</h4>
                  <fieldset>
                    <input placeholder="Your name" type="text" tabindex="1" required autofocus>
                  </fieldset>
                  <fieldset>
                    <input placeholder="Your Email Address" type="email" tabindex="2" required>
                  </fieldset>
                  <fieldset>
                    <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required>
                  </fieldset>
                  <fieldset>
                    <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required>
                  </fieldset>
                  <fieldset>
                    <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
                  </fieldset>
                  <fieldset>
                    <button class="bg-info" name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                  </fieldset>
              </div>
            </section>
        `;
    }
    // Add more conditions for other sections/pages if needed
}

function fetchCategoriesAndDisplayOnHome() {
    // Fetch category data from "categories.json"
    fetch('categories.json')
        .then(response => response.json())
        .then(categories => {
            const categoryContainer = document.getElementById('category-list');

            // Add a title for the Categories section
            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = 'CATEGORY LIST';
            categoryTitle.style.textAlign = 'center';
            categoryTitle.style.marginBottom = '30px'; 
            categoryTitle.style.color = 'red';  
            categoryContainer.appendChild(categoryTitle);

            categories.forEach((category) => {
                const categoryCard = document.createElement("div");
                categoryCard.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'category-card');

                categoryCard.innerHTML = `
                    <div class="card">
                        <img src="${category.image}" class="card-img-top" alt="${category.name}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${category.name}</h5>
                        </div>
                    </div>
                `;

                categoryContainer.appendChild(categoryCard);
            });
        })
        .catch(error => {
            console.error('Error fetching category data:', error);
        });
}

// Function to fetch and display products from "products.json"
function fetchProductsAndDisplay() {
    // Fetch product data from "products.json"
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const productListing = document.getElementById('product-list');

            // Add a title for the Products section
            const productTitle = document.createElement('h2');
            productTitle.textContent = 'PRODUCT LIST';
            productTitle.style.textAlign = 'center'; 
            productTitle.style.marginBottom = '30px';
            productTitle.style.color = 'red';  
            productListing.appendChild(productTitle);

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('col-lg-4', 'col-md-4', 'col-sm-4', 'product-card');
                productCard.innerHTML = `
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h3>${product.name}</h3>
                            <p class="product-price">Price: $${product.price}</p>
                            <p class="product-description">${product.description}</p>
                        </div>
                    </div>
                `;
                productListing.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
}


// Initially load the 'home' section
loadPage('home');
