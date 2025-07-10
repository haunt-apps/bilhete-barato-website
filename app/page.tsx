import { GoogleAnalytics } from "@next/third-parties/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Plane,
  MessageCircle,
  Target,
  Shield,
  DollarSign,
  Lightbulb,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const advantages = [
    {
      icon: <Plane className="h-8 w-8 text-orange-500" />,
      title: "Passagens com até 80% de desconto",
      description:
        "A Bilhete Barato encontra promoções relâmpago e tarifas imperdíveis para você economizar ao máximo na sua próxima viagem.",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-500" />,
      title: "Alerta em tempo real no WhatsApp",
      description:
        "Receba notificações instantâneas diretamente no seu WhatsApp sempre que surgir uma oferta de voo para o seu destino dos sonhos.",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Foco em quem quer viajar barato",
      description:
        "Nosso time é especializado em caçar promoções nacionais e internacionais para quem quer pagar pouco e viajar mais.",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Curadoria feita por especialistas",
      description:
        "As ofertas são filtradas e analisadas por especialistas em passagens aéreas, garantindo que você só receba o que realmente vale a pena.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-500" />,
      title: "Mensalidade acessível para todos os bolsos",
      description:
        "Com um plano que cabe no seu orçamento, você recebe alertas exclusivos e antecipados das melhores promoções de passagens do mercado.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Dicas para viajar gastando menos",
      description:
        "Além das passagens, você recebe dicas práticas para economizar em hospedagem, bagagem e tudo que envolve sua viagem.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Google Analytics - Replace G-XYZ with your actual GA4 measurement ID */}
      <GoogleAnalytics gaId="G-XYZ" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900">Bilhete Barato</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#vantagens" className="text-gray-600 hover:text-orange-500 transition-colors">
                Vantagens
              </Link>
              <Link href="#planos" className="text-gray-600 hover:text-orange-500 transition-colors">
                Planos
              </Link>
              <Link href="#contato" className="text-gray-600 hover:text-orange-500 transition-colors">
                Contato
              </Link>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Começar Agora</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100">
              ✈️ Mais de 50.000 viajantes economizando
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Viaje <span className="text-orange-500">80% mais barato</span> com alertas exclusivos
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Receba no WhatsApp as melhores promoções de passagens aéreas antes de todo mundo. Especialistas caçam
              ofertas 24h para você viajar gastando menos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Quero Receber Alertas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 px-8 py-4 text-lg bg-transparent"
              >
                Ver Como Funciona
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Sem compromisso
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Cancele quando quiser
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Alertas em tempo real
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg text-gray-600">
              "Economizei R$ 2.400 na minha viagem para Europa graças aos alertas!"
            </p>
            <p className="text-sm text-gray-500 mt-2">- Maria Silva, São Paulo</p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="vantagens" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que escolher a Bilhete Barato?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos especialistas em encontrar as melhores ofertas de passagens aéreas para você viajar mais gastando
              menos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="mb-6">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Escolha o plano ideal para você</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todos os planos incluem alertas em tempo real, curadoria especializada e dicas exclusivas para economizar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plano Mensal */}
            <Card className="border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 relative">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensal</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">R$ 14</span>
                  <span className="text-lg text-gray-600">,90</span>
                  <p className="text-gray-500 mt-1">por mês</p>
                </div>
                <p className="text-gray-600 mb-8">Acesso aos melhores alertas por 30 dias</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Alertas em tempo real no WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Promoções nacionais e internacionais</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Curadoria feita por especialistas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Dicas para economizar na viagem</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Começar Agora</Button>
              </CardContent>
            </Card>

            {/* Plano Semestral */}
            <Card className="border-2 border-orange-300 hover:border-orange-400 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">Economia</Badge>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Semestral</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">R$ 69</span>
                  <span className="text-lg text-gray-600">,90</span>
                  <p className="text-gray-500 mt-1">6 meses</p>
                  <p className="text-sm text-green-600 font-medium">Economize R$ 19,50</p>
                </div>
                <p className="text-gray-600 mb-8">6 meses de alertas com economia garantida</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Alertas em tempo real no WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Promoções nacionais e internacionais</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Curadoria feita por especialistas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Dicas para economizar na viagem</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Suporte prioritário</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Escolher Plano</Button>
              </CardContent>
            </Card>

            {/* Plano Anual - Mais Popular */}
            <Card className="border-2 border-blue-400 hover:border-blue-500 transition-all duration-300 relative bg-gradient-to-br from-blue-50 to-white">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Mais Popular</Badge>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Anual</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">R$ 119</span>
                  <span className="text-lg text-gray-600">,90</span>
                  <p className="text-gray-500 mt-1">12 meses</p>
                  <p className="text-sm text-green-600 font-medium">Economize R$ 58,90</p>
                </div>
                <p className="text-gray-600 mb-8">
                  Melhor custo-benefício: planeje sua viagem com os alertas enviados o ano todo e com desconto
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Alertas em tempo real no WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Promoções nacionais e internacionais</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Curadoria feita por especialistas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Dicas para economizar na viagem</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Suporte prioritário</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Alertas antecipados exclusivos</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Melhor Oferta</Button>
              </CardContent>
            </Card>
          </div>

          {/* Garantia */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-green-50 text-green-800 px-6 py-3 rounded-full">
              <Shield className="h-5 w-5 mr-2" />
              <span className="font-medium">Garantia de 7 dias - Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para economizar nas suas viagens?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Junte-se a milhares de viajantes que já economizam com nossos alertas exclusivos. Comece hoje mesmo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input type="email" placeholder="Seu melhor e-mail" className="bg-white text-gray-900 border-0 h-12" />
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 h-12 whitespace-nowrap">
                Começar Grátis
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">Teste grátis por 7 dias. Sem compromisso.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">Bilhete Barato</span>
              </div>
              <p className="text-gray-400">
                Especialistas em encontrar as melhores ofertas de passagens aéreas para você viajar mais gastando menos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Como funciona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Planos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Depoimentos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bilhete Barato. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
