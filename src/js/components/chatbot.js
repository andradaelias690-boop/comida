// Chatbot functionality
class ChatBot {
  constructor() {
    this.container = document.getElementById("chatbot")
    this.toggle = document.getElementById("chatbotToggle")
    this.closeBtn = document.getElementById("chatbotClose")
    this.messagesContainer = document.getElementById("chatbotMessages")
    this.input = document.getElementById("chatbotInput")
    this.sendBtn = document.getElementById("chatbotSend")

    this.isOpen = false
    this.isTyping = false

    // Legal knowledge base
    this.knowledgeBase = {
      civil: {
        keywords: ["civil", "contrato", "familia", "divorcio", "herencia", "sucesión"],
        response:
          "En derecho civil nos especializamos en contratos, derecho de familia, divorcios, herencias y sucesiones. ¿Necesita asesoría en algún tema específico?",
      },
      penal: {
        keywords: ["penal", "delito", "denuncia", "defensa", "criminal"],
        response:
          "Nuestro equipo de derecho penal puede ayudarle con defensa criminal, delitos económicos y procedimientos judiciales. ¿En qué podemos asistirle?",
      },
      laboral: {
        keywords: ["laboral", "trabajo", "despido", "empleado", "sueldo", "indemnización"],
        response:
          "En derecho laboral manejamos casos de despidos, indemnizaciones, conflictos laborales y negociación colectiva. ¿Cuál es su situación laboral?",
      },
      corporativo: {
        keywords: ["empresa", "corporativo", "sociedad", "constitución", "fusión"],
        response:
          "Ayudamos con constitución de empresas, fusiones, adquisiciones y todo lo relacionado con derecho corporativo. ¿Qué tipo de empresa necesita constituir?",
      },
      inmobiliario: {
        keywords: ["inmobiliario", "propiedad", "compra", "venta", "alquiler", "casa"],
        response:
          "En derecho inmobiliario nos ocupamos de compraventas, alquileres, propiedad horizontal y todo lo relacionado con bienes raíces. ¿Qué operación necesita realizar?",
      },
      tributario: {
        keywords: ["tributario", "impuesto", "fiscal", "afip", "monotributo"],
        response:
          "Nuestros especialistas en derecho tributario pueden ayudarle con planificación fiscal, controversias con AFIP y optimización tributaria. ¿Qué consulta fiscal tiene?",
      },
    }

    this.commonResponses = [
      "¿Podría contarme más detalles sobre su caso?",
      "Para brindarle la mejor asesoría, necesitaríamos conocer más información.",
      "Le recomiendo agendar una consulta gratuita para analizar su caso en detalle.",
      "Nuestros abogados especializados pueden ayudarle con este tema.",
    ]

    if (this.container && this.toggle) {
      this.init()
    }
  }

  init() {
    this.bindEvents()
    console.log("[v0] ChatBot initialized")
  }

  bindEvents() {
    // Toggle chatbot
    this.toggle.addEventListener("click", () => {
      this.toggleChat()
    })

    // Close chatbot
    this.closeBtn.addEventListener("click", () => {
      this.closeChat()
    })

    // Send message
    this.sendBtn.addEventListener("click", () => {
      this.sendMessage()
    })

    // Send message on Enter
    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.sendMessage()
      }
    })

    // Auto-resize input
    this.input.addEventListener("input", () => {
      this.input.style.height = "auto"
      this.input.style.height = this.input.scrollHeight + "px"
    })
  }

  toggleChat() {
    if (this.isOpen) {
      this.closeChat()
    } else {
      this.openChat()
    }
  }

  openChat() {
    this.container.classList.add("active")
    this.isOpen = true
    this.input.focus()

    // Add welcome message if first time
    if (this.messagesContainer.children.length === 1) {
      setTimeout(() => {
        this.addBotMessage(
          "¿En qué área del derecho necesita asesoría? Puede preguntarme sobre derecho civil, penal, laboral, corporativo, inmobiliario o tributario.",
        )
      }, 1000)
    }
  }

  closeChat() {
    this.container.classList.remove("active")
    this.isOpen = false
  }

  async sendMessage() {
    const message = this.input.value.trim()
    if (!message || this.isTyping) return

    // Add user message
    this.addUserMessage(message)
    this.input.value = ""
    this.input.style.height = "auto"

    // Show typing indicator
    this.showTyping()

    // Generate bot response
    const response = await this.generateResponse(message)

    // Hide typing and show response
    this.hideTyping()
    this.addBotMessage(response)
  }

  addUserMessage(message) {
    const messageElement = document.createElement("div")
    messageElement.className = "user-message"
    messageElement.innerHTML = `<p>${this.escapeHtml(message)}</p>`

    this.messagesContainer.appendChild(messageElement)
    this.scrollToBottom()
  }

  addBotMessage(message) {
    const messageElement = document.createElement("div")
    messageElement.className = "bot-message"
    messageElement.innerHTML = `<p>${message}</p>`

    this.messagesContainer.appendChild(messageElement)
    this.scrollToBottom()
  }

  showTyping() {
    this.isTyping = true
    this.sendBtn.disabled = true

    const typingElement = document.createElement("div")
    typingElement.className = "typing-indicator"
    typingElement.innerHTML = "<span></span><span></span><span></span>"

    this.messagesContainer.appendChild(typingElement)
    this.scrollToBottom()
  }

  hideTyping() {
    this.isTyping = false
    this.sendBtn.disabled = false

    const typingElement = this.messagesContainer.querySelector(".typing-indicator")
    if (typingElement) {
      typingElement.remove()
    }
  }

  async generateResponse(message) {
    // Simulate thinking time
    await new Promise((resolve) => setTimeout(resolve, 1500 + Math.random() * 1000))

    const lowerMessage = message.toLowerCase()

    // Check for greetings
    if (this.containsAny(lowerMessage, ["hola", "buenos días", "buenas tardes", "buenas noches", "saludos"])) {
      return "¡Hola! Soy el asistente virtual del estudio jurídico. ¿En qué puedo ayudarle hoy?"
    }

    // Check for contact info requests
    if (this.containsAny(lowerMessage, ["teléfono", "dirección", "ubicación", "contacto", "horario"])) {
      return "Puede contactarnos al +54 11 4567-8900 o visitarnos en Av. Libertador 1234, Piso 10, CABA. Nuestros horarios son de Lun-Vie 9:00-18:00 y Sáb 9:00-13:00."
    }

    // Check for pricing
    if (this.containsAny(lowerMessage, ["precio", "costo", "honorarios", "cuánto", "tarifa"])) {
      return "Nuestros honorarios varían según la complejidad del caso. Ofrecemos una consulta gratuita inicial donde evaluamos su situación y le informamos sobre los costos. ¿Le gustaría agendar una cita?"
    }

    // Check for legal areas
    for (const [area, data] of Object.entries(this.knowledgeBase)) {
      if (this.containsAny(lowerMessage, data.keywords)) {
        return data.response
      }
    }

    // Check for urgency
    if (this.containsAny(lowerMessage, ["urgente", "emergencia", "rápido", "ya", "inmediato"])) {
      return "Entiendo que su caso es urgente. Para situaciones que requieren atención inmediata, le recomiendo llamarnos directamente al +54 11 4567-8900. ¿Puede contarme brevemente de qué se trata?"
    }

    // Default responses
    const randomResponse = this.commonResponses[Math.floor(Math.random() * this.commonResponses.length)]
    return randomResponse + " También puede llamarnos al +54 11 4567-8900 para una consulta gratuita."
  }

  containsAny(text, keywords) {
    return keywords.some((keyword) => text.includes(keyword))
  }

  escapeHtml(text) {
    const div = document.createElement("div")
    div.textContent = text
    return div.innerHTML
  }

  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight
  }

  // Handle form submission integration
  handleFormSubmission(formData) {
    if (!this.isOpen) {
      this.openChat()
    }

    setTimeout(() => {
      const serviceMap = {
        civil: "derecho civil",
        penal: "derecho penal",
        laboral: "derecho laboral",
        corporativo: "derecho corporativo",
        inmobiliario: "derecho inmobiliario",
        tributario: "derecho tributario",
      }

      const serviceName = serviceMap[formData.servicio] || "servicios legales"
      const message = `Gracias ${formData.nombre} por su consulta sobre ${serviceName}. Hemos recibido su mensaje: "${formData.mensaje}". Nos pondremos en contacto con usted pronto al ${formData.email}${formData.telefono ? " o al " + formData.telefono : ""}. ¿Hay algo más en lo que pueda ayudarle mientras tanto?`

      this.addBotMessage(message)
    }, 2000)
  }
}

// Initialize chatbot when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.ChatBot = new ChatBot()
})
