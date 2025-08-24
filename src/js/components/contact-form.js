// Contact form functionality
class ContactForm {
  constructor() {
    this.form = document.getElementById("contactForm")
    this.submitButton = null
    this.originalButtonText = ""

    if (this.form) {
      this.init()
    }
  }

  init() {
    this.submitButton = this.form.querySelector('button[type="submit"]')
    this.originalButtonText = this.submitButton.textContent

    this.bindEvents()
  }

  bindEvents() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e)
    })

    // Real-time validation
    const inputs = this.form.querySelectorAll("input, select, textarea")
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        window.EstudioJuridico.validateField(input)
      })
    })
  }

  async handleSubmit(e) {
    e.preventDefault()

    // Validate all fields
    if (!this.validateForm()) {
      window.EstudioJuridico.showMessage("Por favor, corrija los errores en el formulario", "error")
      return
    }

    // Show loading state
    this.setLoadingState(true)

    try {
      // Get form data
      const formData = this.getFormData()

      // Simulate API call (replace with actual endpoint)
      await this.submitToAPI(formData)

      // Show success message
      window.EstudioJuridico.showMessage("¡Gracias por su consulta! Nos pondremos en contacto pronto.", "success")

      // Reset form
      this.form.reset()

      // Trigger chatbot with form data
      if (window.ChatBot) {
        window.ChatBot.handleFormSubmission(formData)
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      window.EstudioJuridico.showMessage("Error al enviar el formulario. Por favor, intente nuevamente.", "error")
    } finally {
      this.setLoadingState(false)
    }
  }

  validateForm() {
    const inputs = this.form.querySelectorAll("input[required], select[required], textarea[required]")
    let isValid = true

    inputs.forEach((input) => {
      if (!window.EstudioJuridico.validateField(input)) {
        isValid = false
      }
    })

    return isValid
  }

  getFormData() {
    const formData = new FormData(this.form)
    const data = {}

    for (const [key, value] of formData.entries()) {
      data[key] = value
    }

    // Format phone number
    if (data.telefono) {
      data.telefono = window.EstudioJuridico.formatPhoneNumber(data.telefono)
    }

    // Add timestamp
    data.timestamp = new Date().toISOString()

    return data
  }

  async submitToAPI(data) {
    // Simulate API call - replace with actual endpoint
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success/failure
        if (Math.random() > 0.1) {
          // 90% success rate
          console.log("[v0] Form submitted successfully:", data)
          resolve(data)
        } else {
          reject(new Error("API Error"))
        }
      }, 2000)
    })
  }

  setLoadingState(loading) {
    if (loading) {
      this.submitButton.disabled = true
      this.submitButton.innerHTML = '<span class="loading"></span> Enviando...'
    } else {
      this.submitButton.disabled = false
      this.submitButton.textContent = this.originalButtonText
    }
  }
}

// Initialize contact form when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ContactForm()
})
