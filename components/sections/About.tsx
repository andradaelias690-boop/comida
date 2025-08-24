import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, CheckCircle } from "lucide-react"

export function About() {
  const stats = [
    { icon: Award, value: "20+", label: "Años de Experiencia" },
    { icon: Users, value: "500+", label: "Clientes Satisfechos" },
    { icon: CheckCircle, value: "95%", label: "Casos Exitosos" },
    { icon: Clock, value: "24/7", label: "Atención Disponible" },
  ]

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-sans">Experiencia y Compromiso Legal</h2>
              <p className="text-lg text-muted-foreground font-serif leading-relaxed">
                Nuestro estudio jurídico se ha consolidado como referente en el ámbito legal, brindando servicios de
                excelencia con un enfoque personalizado y resultados comprobados.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-card-foreground font-sans">Nuestros Valores</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary font-serif">Integridad</h4>
                  <p className="text-sm text-muted-foreground font-serif">
                    Actuamos con transparencia y ética en cada caso.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary font-serif">Excelencia</h4>
                  <p className="text-sm text-muted-foreground font-serif">
                    Buscamos la perfección en cada servicio legal.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary font-serif">Compromiso</h4>
                  <p className="text-sm text-muted-foreground font-serif">
                    Dedicación total a los intereses de nuestros clientes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary font-serif">Innovación</h4>
                  <p className="text-sm text-muted-foreground font-serif">
                    Utilizamos tecnología de vanguardia en nuestros procesos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img
                src="/legal-team-office.png"
                alt="Equipo legal profesional"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card border border-border">
                  <CardContent className="p-6 text-center space-y-2">
                    <stat.icon className="h-8 w-8 text-accent mx-auto" />
                    <div className="text-2xl font-bold text-primary font-sans">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-serif">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
