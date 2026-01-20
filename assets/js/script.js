'use strict';

// -----------------------------
// ELEMENT TOGGLE FUNCTION
// -----------------------------
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// -----------------------------
// SIDEBAR TOGGLE
// -----------------------------
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});

// -----------------------------
// PORTFOLIO FILTER
// -----------------------------
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

// toggle custom select dropdown
select.addEventListener("click", function () { 
  elementToggleFunc(this); 
});

// filter function
const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// select dropdown items
selectItems.forEach(item => {
  item.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// filter buttons for large screens
let lastClickedBtn = filterBtn[0];
filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// -----------------------------
// CONTACT FORM VALIDATION
// -----------------------------
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// -----------------------------
// PAGE NAVIGATION
// -----------------------------
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.innerText.toLowerCase();

    // Show target page & hide others
    pages.forEach(page => {
      page.classList.toggle("active", page.dataset.page === target);
    });

    // Update nav link active class
    navigationLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");

    window.scrollTo(0, 0);
  });
});
