import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type LucideIcon, ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="bg-card hover:shadow-lg transition-shadow duration-300 border border-border">
      <CardHeader className="space-y-4">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <div>
          <CardTitle className="text-xl font-bold text-card-foreground font-sans">{title}</CardTitle>
          <CardDescription className="text-muted-foreground font-serif mt-2">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="text-sm text-muted-foreground font-serif">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5 font-serif"
        >
          Más información
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
