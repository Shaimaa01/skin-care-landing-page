
# Skin Care Landing Page 

A responsive single-page application built with React and Vite, featuring a component-based architecture and a suite of animations powered by GSAP.

![Project Screenshot](/public/assets/imgs/Screenshot%202025-07-03%20at%2023-25-20%20skincare.png)



---

### **[Live Demo](https://skin-care-landing-page.vercel.app/)**   ·   

---

## Key Features

#### **GSAP Animation Suite:**
*   **Animated Loading Screen:** Displays a GSAP-animated count from 0 to 100 before the main content loads.
*   **Scroll-Triggered Reveals:** All page sections animate into view on scroll using `ScrollTrigger`.
*   **Text Animation:** A word-by-word reveal animation is implemented on the hero paragraph using `SplitText`.
*   **Interactive Slider:** The product carousel features programmatic scrolling controlled by arrow buttons.
*   **Stateful Accordion:** The FAQ section is a fully functional accordion, managing state to ensure only one item is open at a time.

*   **Centralized Data:** All static data (FAQ, products, values) is managed in a single constants file for maintainability and scalability.

## Tech Stack

*   **Framework:** React (with Vite)
*   **Styling:** Tailwind CSS v4
*   **Animations:** GSAP (GreenSock Animation Platform)
*   **Deployment:** Vercel / Netlify

## Technical Implementation Note

### Custom Dotted Border

The unique dotted border in the design could not be replicated with standard Tailwind classes.

To solve this, a custom SVG was applied as a `background-image`. The dotted effect was achieved by setting the SVG's `stroke-dasharray` to have a zero-length dash and combining it with `stroke-linecap='round'`. The rounded ends of the zero-length line merge to form a perfect dot. This was defined as a reusable CSS variable for a clean and maintainable implementation.
https://kovart.github.io/dashed-border-generator/

## Running the Project Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Shaimaa01/skin-care-landing-page.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd skin-care-landing-page
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```