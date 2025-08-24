import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const legalLinks = ["Política de Privacidad", "Términos de Servicio", "Aviso Legal", "Cookies"]

  const serviceLinks = ["Derecho Civil", "Derecho Penal", "Derecho Laboral", "Derecho Corporativo"]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary font-sans">Estudio Jurídico</span>
                <span className="text-sm text-muted-foreground font-serif">Profesional</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-serif leading-relaxed">
              Más de 20 años brindando servicios legales de excelencia con profesionalismo, ética y resultados
              comprobados.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-foreground font-sans mb-4">Servicios</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-serif"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces legales */}
          <div>
            <h3 className="font-semibold text-foreground font-sans mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-serif"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-foreground font-sans mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground font-serif">+54 11 4567-8900</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground font-serif">info@estudiojuridico.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <div className="text-sm text-muted-foreground font-serif">
                  <div>Av. Corrientes 1234, Piso 8</div>
                  <div>Buenos Aires, Argentina</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground font-serif">
            © 2024 Estudio Jurídico Profesional. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground font-serif mt-2 sm:mt-0">
            Matrícula Profesional N° 12345 - Colegio de Abogados de Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  )
}
