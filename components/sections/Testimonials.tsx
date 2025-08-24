import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "Empresaria",
      content:
        "Excelente atención y profesionalismo. Resolvieron mi caso laboral de manera eficiente y con resultados excepcionales.",
      rating: 5,
      image: "/professional-woman-headshot.png",
    },
    {
      name: "Carlos Rodríguez",
      role: "Director Comercial",
      content:
        "El mejor estudio jurídico de la ciudad. Su experiencia en derecho corporativo nos ayudó a expandir nuestro negocio.",
      rating: 5,
      image: "/professional-man-headshot.png",
    },
    {
      name: "Ana Martínez",
      role: "Propietaria",
      content:
        "Profesionales comprometidos que me acompañaron en todo el proceso. Recomiendo sus servicios sin dudarlo.",
      rating: 5,
      image: "/professional-woman-headshot.png",
    },
  ]

  return (
    <section id="testimonios" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-sans">Lo que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nuestro
            equipo legal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-accent/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground font-serif italic leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground font-sans">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground font-serif">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
