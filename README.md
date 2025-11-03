# 🌿 Hope Harvest Community Garden – Part 3 (WEDE5020 POE)

Welcome to the **Hope Harvest Community Garden (Part 3)** repository.  
This is the **final project submission** for WEDE5020, demonstrating the implementation of interactivity, form validation, SEO optimization, and accessibility improvements.

---

## 🧭 Project Overview

The Hope Harvest Community Garden website aims to promote sustainability, community building, and volunteering opportunities.  
Visitors can explore the organization’s projects, events, donation drives, and educational resources — while also engaging through contact, enquiry, and volunteer forms.

---

## 🪞 Part 2 Feedback & Reflection

### 🧩 Feedback Received (Part 2)
- Improve overall **layout and container sizing**
- Add a visible **header and navigation** on every page
- Increase interactivity and **visual engagement**
- Enhance **form usability** and **spacing**
- Ensure **SEO meta data** and **accessibility** were correctly implemented

### 🔧 Changes Made
- Added a consistent **header** with gradient styling on all pages.  
- Increased **container width** and adjusted padding/margins for readability.  
- Enhanced **button styles**, **form alignment**, and **hover effects**.  
- Added **JavaScript interactivity** for event dropdowns and form validation.  
- Improved **SEO tags** (`title`, `meta description`, `meta keywords`) on every HTML file.

### 💡 Reflection
If I had more time, I would:
- Add a **dark mode toggle** for better accessibility.
- Use a **content management system (CMS)** to make the website easier to update.
- Improve **color contrast** further for visually impaired users.
- Add **backend integration** for storing enquiry data.

---

## ✨ Interactive Elements Implemented

| Feature | Description |
|----------|--------------|
| **Dropdown Menu** | Interactive event registration dropdown using JavaScript. |
| **Form Validation** | Custom JS validation for both enquiry and contact forms. |
| **Clear Input Controls** | Input fields clear/reset after submission. |
| **Feedback Messages** | Users receive instant feedback (“Form submitted successfully!”). |
| **Responsive Navbar** | JavaScript toggled menu for smaller screens. |
| **Accordion (optional)** | Can be used in `resources.html` or `faq.html` for expandable Q&A. |
| **Embedded Map** | Google Maps iframe added to `contact.html` to locate the garden. |
| **Gallery Lightbox** | Image gallery opens in an overlay view for a better user experience. |

---

## 🧱 Folder Structure
hopep3/
│
├── css-assests/
│ ├── aboutus.css
│ ├── contact.css
│ ├── donate.css
│ ├── events.css
│ ├── home.css
│ ├── projects.css
│ ├── resources.css
│ ├── volunteer.css
│ └── enquiry.css
│
├── js-assts/
│ ├── form-validation.js
│ ├── events-dropdown.js
│ ├── navbar.js
│ └── main.js
│
├── _images/
│ ├── logo.png
│ ├── community_garden.jpg
│ ├── volunteer.jpg
│ └── ...
│
├── screens/
│ ├── home-page.png
│ ├── contact-form.png
│ └── event-registration.png
│
├── aboutus.html
├── contact.html
├── donate.html
├── events.html
├── home.html
├── projects.html
├── resources.html
├── volunteer.html
├── enquiry.html


---

## 🧠 Technologies Used

| Category | Tools |
|-----------|-------|
| **Languages** | HTML5, CSS3, JavaScript (ES6) |
| **Design** | Responsive Grid & Flexbox, Gradients |
| **SEO** | Meta tags, semantic markup, alt text |
| **Version Control** | Git & GitHub |
| **Testing** | W3C Validators, Chrome DevTools |

---

## 🔍 SEO Implementation

| Element | Example |
|----------|----------|
| **Title Tags** | `<title>Projects | Hope Harvest Community Garden</title>` |
| **Meta Description** | `<meta name="description" content="Learn how Hope Harvest grows community and food sustainably.">` |
| **Meta Keywords** | `<meta name="keywords" content="community garden, sustainability, volunteering, Hope Harvest">` |
| **Image SEO** | Filenames use keywords (e.g., `volunteer_team.jpg`), and all have descriptive `alt` attributes. |

---

## 🪄 JavaScript Functionality

| JS File | Purpose |
|----------|----------|
| **form-validation.js** | Validates user input, checks for empty fields, and provides feedback alerts. |
| **events-dropdown.js** | Populates dynamic event details based on dropdown selection. |
| **navbar.js** | Controls responsive hamburger navigation for mobile devices. |
| **main.js** | Handles general page interactivity and scroll animations. |

### Example:
```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value === "" || email.value === "") {
    alert("Please fill in all fields.");
  } else {
    alert("Form submitted successfully!");
    form.reset();
  }
});


