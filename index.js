/*********************
 * QUERY SELECTORS
 *********************/

// MOBILE-NAVBAR
const mobileNavbar = document.querySelector("#mobile-navbar");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const mobileLinks = document.querySelectorAll(".mobile-navbar-list-link");

// FOOTER
const submitBtn = document.querySelector("#sign-up-submit-button");

// GALLERY
const productAddToCartBtns = document.querySelectorAll(
    ".product-add-to-cart-btn",
);
const cartModal = document.querySelector("#cart-modal");
const viewCartBtn = document.querySelector("#gallery-view-cart-btn");
const closeCartBtn = document.querySelector("#close-cart-modal");
const clearCartBtn = document.querySelector("#clear-cart-btn");
const processOrderBtn = document.querySelector("#process-order-btn");
const products = document.querySelectorAll(".product-title");

// ABOUT
const aboutContactForm = document.querySelector("#about-contact-form");

/* Array for products/cart items.
NOTE: Just a stand in for an actual Database,
this actually consumes client memory unnecessarily...*/
const productsArray = [];
let cartArray = JSON.parse(sessionStorage.getItem("cart")) || [];
if (cartArray.length) sessionStorage.setItem("cart", JSON.stringify(cartArray));

/*********************
 * EVENT LISTENERS
 *********************/

/* NOTE: Pages in real world applications would have separate
.js files for each of these, that would avoid the redundant if statements.*/

// MOBILE NAVBAR
if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
        mobileNavbar.classList.toggle("open");
    });
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileNavbar.classList.remove("open");
        });
    });
}

// FOOTER
if (submitBtn) {
    submitBtn.addEventListener("click", e => {
        e.preventDefault();
        alert("Thank you for subscribing.");
    });
}

// GALLERY
// Populates products array for ease of use with sessionStorage
if (products.length) {
    products.forEach(product => {
        const productId = Number(product.id.charAt(product.id.length - 1));
        productsArray[productId] = product.innerText;
    });
}

if (productAddToCartBtns.length) {
    productAddToCartBtns.forEach(productAddToCartBtn =>
        productAddToCartBtn.addEventListener("click", e => {
            e.preventDefault();
            const productId = Number(
                productAddToCartBtn.id.charAt(
                    productAddToCartBtn.id.length - 1,
                ),
            );
            const productTitle = productsArray[productId];
            cartArray = JSON.parse(sessionStorage.getItem("cart")) || [];
            if (!cartArray.includes(productTitle)) {
                cartArray.push(productTitle);
                sessionStorage.setItem("cart", JSON.stringify(cartArray));
                alert("Item added to cart.");
            } else {
                alert(
                    "Item has already been added to cart. Only 1 copy per customer.",
                );
            }
        }),
    );
}

// GALLERY - MODAL
if (viewCartBtn) {
    viewCartBtn.addEventListener("click", () => {
        cartModal.showModal();
        renderCart();
    });
}

if (closeCartBtn) {
    closeCartBtn.addEventListener("click", () => cartModal.close());
}

if (clearCartBtn) {
    clearCartBtn.addEventListener("click", e => {
        e.preventDefault();
        cartArray = JSON.parse(sessionStorage.getItem("cart")) || [];
        if (cartArray.length) {
            sessionStorage.removeItem("cart");
            renderCart();
            alert("Your cart has been cleared.");
        } else {
            alert("You have no items in your cart to clear.");
        }
    });
}

if (processOrderBtn) {
    processOrderBtn.addEventListener("click", e => {
        e.preventDefault();
        cartArray = JSON.parse(sessionStorage.getItem("cart")) || [];
        if (cartArray.length) {
            sessionStorage.removeItem("cart");
            renderCart();
            cartModal.close();
            alert("Thank you for your order.");
        } else {
            alert("You have no items in your cart to process.");
        }
    });
}

// ABOUT
if (aboutContactForm) {
    aboutContactForm.addEventListener("submit", e => {
        e.preventDefault();
        const { name, email, phone, feedback, check } =
            aboutContactForm.elements;
        const contactUsData = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            feedback: feedback.value,
            customOrder: check.checked,
        };
        localStorage.setItem(name.value, JSON.stringify(contactUsData));
        alert(`Thank you for your message, ${name.value}.`);
    });
}

// Helper Function(s)
const renderCart = () => {
    const cartList = document.querySelector("#cart-items-list");
    cartArray = JSON.parse(sessionStorage.getItem("cart")) || [];
    // NOTE: Just clears the ul every time, not very efficient...
    cartList.innerHTML = "";
    for (let i = 0; i < cartArray.length; i++) {
        const productTitle = cartArray[i];
        const liElement = document.createElement("li");
        liElement.classList.add("cart-item");
        liElement.appendChild(document.createTextNode(productTitle));
        cartList.appendChild(liElement);
    }
};
