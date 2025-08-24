// Navigation component functionality
class Navigation {
  constructor() {
    this.header = document.querySelector(".header")
    this.navToggle = document.querySelector(".nav-toggle")
    this.navMenu = document.querySelector(".nav-menu")
    this.navLinks = document.querySelectorAll(".nav-menu a")
    this.dropdowns = document.querySelectorAll(".nav-menu .dropdown")

    this.init()
  }

  init() {
    this.bindEvents()
    this.handleScroll()
  }

  bindEvents() {
    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener("click", () => {
        this.toggleMobileMenu()
      })
    }

    // Close mobile menu when clicking on links
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.closeMobileMenu()
      })
    })

    // Handle scroll for header styling
    window.addEventListener("scroll", () => {
      this.handleScroll()
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!this.header.contains(e.target)) {
        this.closeMobileMenu()
      }
    })

    // Handle mobile dropdowns
    this.dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector("a.dropbtn")
      if (toggle) {
        toggle.addEventListener("click", (e) => {
          if (window.innerWidth <= 992) {
            e.preventDefault()
            const parentDropdown = e.currentTarget.parentElement
            parentDropdown.classList.toggle("mobile-active")

            // Close other dropdowns
            this.dropdowns.forEach((d) => {
              if (d !== parentDropdown) {
                d.classList.remove("mobile-active")
              }
            })
          }
        })
      }
    })
  }

  toggleMobileMenu() {
    this.navMenu.classList.toggle("active")
    this.navToggle.classList.toggle("active")

    // Animate hamburger menu
    const spans = this.navToggle.querySelectorAll("span")
    if (this.navToggle.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  }

  closeMobileMenu() {
    this.navMenu.classList.remove("active")
    this.navToggle.classList.remove("active")

    // Close any open dropdowns
    this.dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("mobile-active")
    })

    // Reset hamburger menu
    const spans = this.navToggle.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }

  handleScroll() {
    const scrolled = window.scrollY > 50

    if (scrolled) {
      this.header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
      this.header.style.backdropFilter = "blur(10px)"
    } else {
      this.header.style.backgroundColor = "#ffffff"
      this.header.style.backdropFilter = "none"
    }

    // Highlight active section in navigation
    this.highlightActiveSection()
  }

  highlightActiveSection() {
    const sections = document.querySelectorAll("section[id]")
    const scrollPos = window.scrollY + 100

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")
      const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`)

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        // Remove active class from all links
        this.navLinks.forEach((link) => link.classList.remove("active"))
        // Add active class to current section link
        if (navLink) {
          navLink.classList.add("active")
        }
      }
    })
  }
}

// Initialize navigation when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Navigation()
})

// Add CSS for active navigation links
const style = document.createElement("style")
style.textContent = `
    .nav-menu a.active {
        color: var(--primary-color);
        position: relative;
    }
    
    .nav-menu a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: var(--secondary-color);
    }
    
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #dc2626;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    }
`
document.head.appendChild(style)
