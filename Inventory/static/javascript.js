var globalErrorMessage = false;
var isVariantSelection = false;

function showErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    if (globalErrorMessage) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
}

function filterProducts(isVariantSelection) {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedVariant = document.getElementById('variantFilter').value.toLowerCase();
    const products = document.querySelectorAll('.showOrHideCard');

    if (!searchTerm && !isVariantSelection) {
        globalErrorMessage = true;
    } else {
        globalErrorMessage = false;
    }

    products.forEach(product => {
        const productName = product.querySelector('.card-title').textContent.toLowerCase();
        const productVariant = product.querySelector('.card-text').textContent.toLowerCase();

        const matchesSearch = !searchTerm || productName.includes(searchTerm);
        const matchesVariant = !selectedVariant || productVariant.includes(selectedVariant);

        product.style.display = (matchesSearch && matchesVariant) ? 'block' : 'none';
    });

    showErrorMessage();

    let allNone = true;

    products.forEach(product => {
        if (product.style.display !== 'none') {
            allNone = false;
        }
    });

    if (allNone) {
        document.getElementById('noProductsMessage').style.display = 'block';
    } else {
        document.getElementById('noProductsMessage').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const variantFilter = document.getElementById('variantFilter');

    searchButton.addEventListener('click', function () {
        isVariantSelection = false;
        filterProducts(isVariantSelection);
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            isVariantSelection = false;
            filterProducts(isVariantSelection);
        }
    });

    variantFilter.addEventListener('change', function () {
        isVariantSelection = true;
        filterProducts(isVariantSelection);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slides img').length;
    const slideWidth = 500; // Width of each slide
    let index = 0;

    function runSlider() {
        index++;
        if (index >= slideCount) {
            index = 0;
        }
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    setInterval(runSlider, 2000);
});


const tuneIcon = document.querySelector('.filter-options .material-symbols-outlined');


const variantFilter = document.getElementById('variantFilter');


tuneIcon.addEventListener('click', () => {
    
    const currentDisplay = getComputedStyle(variantFilter).display;

    if (currentDisplay === 'none') {
        variantFilter.style.display = 'block'; 
    } else {
        variantFilter.style.display = 'none'; 
    }
});