import Header from "@/components/layout/Header"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/layout/Footer"
import Chatbot from "@/components/ui/Chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  )
}
