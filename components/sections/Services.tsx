import { ServiceCard } from "@/components/ui/ServiceCard"
import { Scale, Users, Building, Shield, FileText, Gavel } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Scale,
      title: "Derecho Civil",
      description: "Contratos, responsabilidad civil, daños y perjuicios, sucesiones y derecho de familia.",
      features: ["Contratos comerciales", "Sucesiones", "Derecho de familia", "Responsabilidad civil"],
    },
    {
      icon: Gavel,
      title: "Derecho Penal",
      description: "Defensa penal integral, desde delitos menores hasta casos complejos de alta complejidad.",
      features: ["Defensa penal", "Delitos económicos", "Violencia de género", "Recursos de casación"],
    },
    {
      icon: Users,
      title: "Derecho Laboral",
      description: "Asesoramiento integral en relaciones laborales, despidos, accidentes de trabajo.",
      features: ["Despidos injustificados", "Accidentes laborales", "Mobbing laboral", "Negociación colectiva"],
    },
    {
      icon: Building,
      title: "Derecho Corporativo",
      description: "Constitución de sociedades, fusiones, adquisiciones y asesoramiento empresarial.",
      features: ["Constitución de sociedades", "M&A", "Compliance", "Contratos empresariales"],
    },
    {
      icon: FileText,
      title: "Derecho Administrativo",
      description: "Procedimientos administrativos, licitaciones públicas y contrataciones del Estado.",
      features: ["Licitaciones públicas", "Recursos administrativos", "Contrataciones estatales", "Regulaciones"],
    },
    {
      icon: Shield,
      title: "Derecho Tributario",
      description: "Planificación fiscal, defensa ante organismos recaudadores y optimización tributaria.",
      features: ["Planificación fiscal", "Defensa tributaria", "Recursos fiscales", "Optimización impositiva"],
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-sans">Nuestros Servicios Legales</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
            Ofrecemos asesoramiento jurídico integral con un enfoque personalizado para cada cliente y situación legal
            específica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
