import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protegendo o Futuro, Cuidando da Infância
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              O Conselho Tutelar é o órgão responsável por zelar pelos direitos da criança e do adolescente. Saiba como podemos ajudar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/onde-buscar-ajuda">
                  Preciso de Ajuda
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/sobre">
                  Saiba Mais
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é o Conselho Tutelar */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-heading-2 text-gray-800 mb-6">O que é o Conselho Tutelar?</h2>
              <p className="text-body-large text-gray-600 mb-4">
                O Conselho Tutelar é um órgão permanente e autônomo, não jurisdicional, encarregado pela sociedade de zelar pelo cumprimento dos direitos da criança e do adolescente.
              </p>
              <p className="text-body-large text-gray-600 mb-6">
                É composto por membros eleitos pela comunidade local para mandato de quatro anos, e está previsto no Estatuto da Criança e do Adolescente (Lei 8.069/90).
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/sobre" className="flex items-center gap-2">
                  Entenda seu Funcionamento <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1974&auto=format&fit=crop" 
                alt="Crianças brincando juntas" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quando Procurar */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-gray-800 mb-4">Quando Procurar o Conselho Tutelar?</h2>
            <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
              O Conselho Tutelar deve ser acionado sempre que os direitos de crianças e adolescentes forem ameaçados ou violados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-gray-800 text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Violência Física</h3>
                <p className="text-gray-600">
                  Quando há indícios de agressões, espancamentos, tortura ou maus-tratos contra crianças e adolescentes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-gray-800 text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Violência Psicológica</h3>
                <p className="text-gray-600">
                  Em casos de intimidação, ameaças, humilhações ou situações que causem sofrimento emocional.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-gray-800 text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Abuso Sexual</h3>
                <p className="text-gray-600">
                  Quando há suspeita de qualquer tipo de abuso ou exploração sexual contra menores.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-gray-800 text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Negligência</h3>
                <p className="text-gray-600">
                  Casos de abandono, falta de cuidados básicos, ausência escolar ou negligência com saúde.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-gray-800 text-xl">5</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Trabalho Infantil</h3>
                <p className="text-gray-600">
                  Situações em que crianças são submetidas a trabalho inadequado para sua idade.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-gray-800 text-xl">6</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Negação de Direitos</h3>
                <p className="text-gray-600">
                  Quando há negação do direito à educação, saúde, alimentação, convivência familiar ou comunitária.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/como-agir" className="flex items-center gap-2">
                Como Agir Nessas Situações <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimento em Destaque */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-secondary p-8 lg:p-12">
                  <h2 className="text-heading-3 text-gray-800 mb-6">Histórias Transformadas</h2>
                  <div className="relative">
                    <div className="text-4xl font-bold text-primary opacity-30 absolute -top-8 left-0">"</div>
                    <p className="text-body-large text-gray-700 italic mb-6">
                      O Conselho Tutelar me ajudou quando eu mais precisava. Graças à intervenção deles, 
                      minha filha pôde ter acesso à educação especial que ela necessitava, após anos de 
                      luta para conseguir uma vaga. Hoje ela está se desenvolvendo e feliz.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <span className="font-bold text-gray-800">MA</span>
                      </div>
                      <div>
                        <p className="font-semibold">Maria A.</p>
                        <p className="text-sm text-gray-600">Mãe, São Paulo</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Link to="/depoimentos">Ver Mais Depoimentos</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <img 
                    src="https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80&w=1470&auto=format&fit=crop" 
                    alt="Mãe e filha sorrindo" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-heading-2 mb-6">Precisando de Ajuda?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Se você conhece uma criança ou adolescente em situação de risco, não hesite. 
            Entre em contato com o Conselho Tutelar da sua cidade ou com os canais oficiais 
            de denúncia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/onde-buscar-ajuda">Encontrar Ajuda</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:100">Ligar para Disque 100</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
