const productList = document.getElementById('product-lists');
const searchInput = document.querySelector('.search');
const searchBtn = document.querySelector('.searchbtn');
const categoryItems = document.querySelectorAll('.catgaorybtn'); // Typo in class name retained intentionally

function filterProduct() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const title = item.querySelector('h3').innerHTML.toLowerCase();
        const category = item.dataset.category.toLowerCase();

        // Filter logic: show items matching the search value
        if (title.includes(searchValue) || searchValue === "") {
            item.style.display = "block"; // Show matching items
        } else {
            item.style.display = "none"; // Hide non-matching items
        }
    });
}

function filterByCategory(e) {
    const selectedCategory = e.target.innerHTML.toLowerCase().trim();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const category = item.dataset.category.toLowerCase();

        // Show all if "All" is selected, otherwise filter by category
        if (selectedCategory === "all" || category.includes(selectedCategory)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Attach event listeners
searchBtn.addEventListener('click', filterProduct);
searchInput.addEventListener('keyup', filterProduct);

categoryItems.forEach(btn => {
    btn.addEventListener('click', filterByCategory); // Replaced setCategory with filterByCategory
});

// Initial call to show all products
filterProduct();
