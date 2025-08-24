"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Crear mensaje para email
    const emailSubject = `Consulta Legal: ${formData.subject}`
    const emailBody = `
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Asunto: ${formData.subject}

Mensaje:
${formData.message}
    `

    // Abrir cliente de email
    const mailtoLink = `mailto:consultas@estudiojuridico.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    window.open(mailtoLink, "_blank")

    // Mostrar confirmación
    alert("Se abrirá tu cliente de email para enviar la consulta. También puedes contactarnos por WhatsApp.")

    // Limpiar formulario
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const handleWhatsApp = () => {
    const message = `Hola! Soy ${formData.name || "[Tu nombre]"}. Me gustaría hacer una consulta legal sobre: ${formData.subject || "[Tu consulta]"}`

    const whatsappUrl = `https://wa.me/5491145678900?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+54 11 4567-8900", "+54 11 4567-8901"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@estudiojuridico.com", "consultas@estudiojuridico.com"],
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Av. Corrientes 1234, Piso 8", "Buenos Aires, Argentina"],
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 9:00 - 18:00", "Sáb: 9:00 - 13:00"],
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-sans">Contacta con Nosotros</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para una consulta gratuita y descubre cómo podemos resolver tu
            situación legal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary font-sans mb-6">Información de Contacto</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card border border-border">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-accent" />
                        </div>
                        <h4 className="font-semibold text-card-foreground font-sans">{info.title}</h4>
                      </div>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground font-serif">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-green-50 border border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 font-sans flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Directo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600 font-serif mb-4">
                  ¿Necesitas una respuesta rápida? Contáctanos directamente por WhatsApp.
                </p>
                <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chatear por WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent font-sans">Consulta Gratuita</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-serif">
                  Ofrecemos una primera consulta gratuita de 30 minutos para evaluar tu caso y brindarte orientación
                  legal inicial sin compromiso.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de contacto */}
          <Card className="bg-card border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground font-sans">Envíanos un Mensaje</CardTitle>
              <p className="text-sm text-muted-foreground font-serif">
                Completa el formulario y se abrirá tu cliente de email para enviar la consulta
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground font-serif mb-2">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground font-serif mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground font-serif mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-card-foreground font-serif mb-2">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground font-serif mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-input border-border"
                    placeholder="Describe brevemente tu consulta legal..."
                  />
                </div>

                <div className="space-y-3">
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar por Email
                  </Button>

                  <Button
                    type="button"
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enviar por WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
