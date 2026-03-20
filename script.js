// ==================== HOMEPAGE IMAGE SLIDER ====================
let slideImages = [
    "C:/Users/craig/Downloads/techtwo.jpeg",
    "C:/Users/craig/Downloads/techone.jpeg",
    "C:/Users/craig/Downloads/techthree.jpeg"
];

let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementById("slider");
    if (!slider) return; // Skip if not on homepage
    slider.src = slideImages[index];
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideImages.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
    showSlide(currentSlide);
}

// Initialize slider
showSlide(currentSlide);


// ==================== BUTTON FUNCTION ====================
function showMessage() {
    const demo = document.getElementById("demo");
    if(demo) demo.innerHTML = "Hello! Welcome to TechStore!";
}


// ==================== SHOPPING CART ====================
let cart = [];

function addToCart(itemString) {
    // itemString examples: "Laptop 70,000"
    const parts = itemString.match(/([a-zA-Z\s]+)\s([\d,]+)/);
    if (!parts) return;

    const name = parts[1].trim();
    const price = parseInt(parts[2].replace(/,/g, ''));

    cart.push({name, price});
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById("cart");
    const totalP = document.getElementById("total");
    if (!cartList || !totalP) return;

    // Clear current list
    cartList.innerHTML = "";

    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Ksh ${item.price.toLocaleString()}`;

        // Optional: add remove button per item
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () => {
            cart.splice(index, 1);
            updateCartDisplay();
        };
        li.appendChild(removeBtn);

        cartList.appendChild(li);
        total += item.price;
    });

    totalP.textContent = `Total: Ksh ${total.toLocaleString()}`;
}

function clearCart() {
    cart = [];
    updateCartDisplay();
}


// ==================== CONTACT FORM VALIDATION ====================
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name === "" || email === "") {
        alert("Please fill in your name and email.");
        return false;
    }

    alert("Thank you! Your message has been submitted.");
    return true;
}