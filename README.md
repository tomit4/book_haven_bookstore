<div align="center">
<img src="./assets/icons/logos/inkwell_blue_logo_readme.png">
</div>

# Book Haven Bookstore

This repository contains the code and assets for **Book Haven Bookstore**, a
final project for the _Introduction to Web Development_ course on Sophia.org.
The website provides an interactive online presence for the bookstore, featuring
a home page, product gallery, About Us page, and Community Involvement page. Key
features include a responsive design, shopping cart functionality, contact form
with localStorage, and a subscription form in the footer.

---

## Project Overview

- **Home Page:** Welcome message, promotional offers, sample products, and
  category navigation.
- **Gallery Page:** Grid of products with Add-to-Cart functionality and a modal
  to view or process orders.
- **About Us Page:** History and mission, business hours table, and a Contact Us
  form.
- **Community Involvement Page:** Customer spotlights, community events, and
  email links for inquiries.

The website is fully responsive down to 480px and incorporates accessibility
best practices, including high color contrast, proper ARIA roles, and logical
tab order.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/tomit4/book_haven_bookstore.git
cd book_haven_bookstore
```

### 2. Run Locally

You can view the site locally using Live Server

- **Option A:** Install the
  [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  for VSCode, then right-click `index.html` and select **Open with Live
  Server**.

- **Option B:** Install the `live-server` CLI via npm:

```bash
npm install -g live-server
```

Then within the project's directory, simply invoke `live-server`:

```bash
live-server
```

This will automatically open the project in your default browser.

---

## Assets

All images, icons, and fonts used in the website are included in the assets
folder. These include:

- **Hero images**
- **Product images**
- **Logos and favicon**
- **Custom fonts (Comfortaa, Cabria, Aria)**

---

## Live Demo

The fully hosted version is available via Github Pages:

[Book Haven Bookstore](https://tomit4.github.io/book_haven_bookstore/index.html)

---

## Notes

- This project was built as part of the final Touchstone for the course.
- Some interactive features (e.g., Add-to-Cart) rely on **sessionStorage** and
  **localStorage**.
- The website is designed to demonstrate responsive design, accessibility best
  practices, and dynamic functionality using vanilla HTML, CSS, and JavaScript.

---

## License

This project is for educational purposes and does not have a commercial license.
