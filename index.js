/*********************
 * QUERY SELECTORS
 *********************/
// FOOTER
const submitBtn = document.querySelector("#sign-up-submit-button");

// GALLERY
const productAddToCartBtn = document.querySelector(".product-add-to-cart-btn");
const cartModal = document.querySelector("#cart-modal");
const viewCartBtn = document.querySelector("#gallery-view-cart-btn");
const closeCartBtn = document.querySelector("#close-cart-modal");
const clearCartBtn = document.querySelector("#clear-cart-btn");
const processOrderBtn = document.querySelector("#process-order-btn");

// ABOUT
const aboutSubmitFormBtn = document.querySelector("#about-submit-form-btn");
const aboutContactForm = document.querySelector("#about-contact-form");
// const aboutClearFormBtn = document.querySelector("#about-clear-form-btn");

/*********************
 * EVENT LISTENERS
 *********************/

/* NOTE: Pages in real world applications would have separate
.js files for each of these, that would avoid the redundant if statements.*/

// FOOTER
if (submitBtn) {
    submitBtn.addEventListener("click", e => {
        e.preventDefault();
        alert("Thank you for subscribing.");
    });
}

// GALLERY
if (productAddToCartBtn) {
    productAddToCartBtn.addEventListener("click", e => {
        e.preventDefault();
        alert("Item added to the cart.");
    });
}

// GALLERY - MODAL
if (viewCartBtn) {
    viewCartBtn.addEventListener("click", () => cartModal.showModal());
}
if (closeCartBtn) {
    closeCartBtn.addEventListener("click", () => cartModal.close());
}
if (clearCartBtn) {
    clearCartBtn.addEventListener("click", e => {
        e.preventDefault();
        alert("Cart cleared.");
    });
}
if (processOrderBtn) {
    processOrderBtn.addEventListener("click", e => {
        e.preventDefault();
        alert("Thank you for your order.");
    });
}

// ABOUT
if (aboutContactForm) {
    aboutContactForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Thank you for your message.");
    });
}
