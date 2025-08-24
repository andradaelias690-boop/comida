import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-background to-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary font-sans leading-tight">
                Justicia y Experiencia
                <span className="block text-accent">a tu Servicio</span>
              </h1>
              <p className="text-xl text-muted-foreground font-serif leading-relaxed">
                Más de 20 años defendiendo tus derechos con profesionalismo, ética y resultados comprobados en todas las
                áreas del derecho.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif">
                Consulta Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-serif bg-transparent"
              >
                Conoce Nuestros Servicios
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground font-serif">+54 11 4567-8900</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground font-serif">info@estudiojuridico.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground font-serif">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
              <img
                src="/professional-lawyer-office-with-law-books-and-scal.png"
                alt="Oficina profesional de abogados"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold font-sans">20+</div>
                  <div className="text-sm font-serif">Años de Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
