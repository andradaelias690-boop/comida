// Main JavaScript file - Entry point
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Estudio Jurídico website loaded")

  // Initialize smooth scrolling for navigation links
  initSmoothScrolling()

  // Initialize scroll animations
  initScrollAnimations()

  // Initialize form validation
  initFormValidation()

  // Initialize hero carousel
  initHeroCarousel()

  // Open chatbot from hero button
  const openChatbotBtn = document.getElementById("openChatbotBtn");
  const chatbotToggle = document.getElementById("chatbotToggle");
  if(openChatbotBtn && chatbotToggle) {
    openChatbotBtn.addEventListener("click", () => {
      chatbotToggle.click();
    });
  }
})

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Hero Carousel
function initHeroCarousel() {
    const carousel = document.querySelector('.hero-image-carousel');
    if (!carousel) return;

    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.carousel-control.prev');
    const nextBtn = carousel.querySelector('.carousel-control.next');
    let currentIndex = 0;
    const totalItems = items.length;

    function updateCarousel() {
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    // Opcional: Auto-play
    setInterval(() => {
        nextBtn.click();
    }, 5000); // Cambia cada 5 segundos
}

// Scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".fade-in-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}

// Form validation
function initFormValidation() {
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input[required], select[required], textarea[required]")

    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this)
      })

      input.addEventListener("input", function () {
        if (this.classList.contains("error")) {
          validateField(this)
        }
      })
    })
  })
}

// Field validation
function validateField(field) {
  const value = field.value.trim()
  let isValid = true
  let errorMessage = ""

  // Remove existing error styling
  field.classList.remove("error")
  const existingError = field.parentNode.querySelector(".field-error")
  if (existingError) {
    existingError.remove()
  }

  // Required field validation
  if (field.hasAttribute("required") && !value) {
    isValid = false
    errorMessage = "Este campo es obligatorio"
  }

  // Email validation
  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      isValid = false
      errorMessage = "Ingrese un email válido"
    }
  }

  // Phone validation
  if (field.type === "tel" && value) {
    const phoneRegex = /^[+]?[0-9\s\-$$$$]{10,}$/
    if (!phoneRegex.test(value)) {
      isValid = false
      errorMessage = "Ingrese un teléfono válido"
    }
  }

  // Show error if validation fails
  if (!isValid) {
    field.classList.add("error")
    const errorElement = document.createElement("span")
    errorElement.className = "field-error"
    errorElement.textContent = errorMessage
    errorElement.style.color = "#dc2626"
    errorElement.style.fontSize = "0.875rem"
    errorElement.style.marginTop = "0.25rem"
    errorElement.style.display = "block"
    field.parentNode.appendChild(errorElement)
  }

  return isValid
}

// Utility functions
function showMessage(message, type = "success") {
  const messageElement = document.createElement("div")
  messageElement.className = `message ${type}`
  messageElement.textContent = message

  // Insert at the top of the page
  document.body.insertBefore(messageElement, document.body.firstChild)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (messageElement.parentNode) {
      messageElement.parentNode.removeChild(messageElement)
    }
  }, 5000)
}

function formatPhoneNumber(phone) {
  // Simple phone formatting for Argentina
  const cleaned = phone.replace(/\D/g, "")
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  return phone
}

// Export functions for use in other modules
window.EstudioJuridico = {
  showMessage,
  validateField,
  formatPhoneNumber,
}
