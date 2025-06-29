
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const OndeBuscarAjudaPage = () => {
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false);
  
  const handleBuscar = () => {
    setMostrarResultados(true);
  };
  
  const estados = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
    "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
    "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí",
    "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
    "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Onde Buscar Ajuda
            </h1>
            <p className="text-xl mb-0">
              Saiba onde encontrar o Conselho Tutelar mais próximo de você e conheça outros canais de denúncia e apoio.
            </p>
          </div>
        </div>
      </section>

      {/* Canais Nacionais */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-heading-2 text-gray-800 mb-8 text-center">Canais Nacionais de Atendimento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full gradient-bg text-white flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                  100
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Disque 100</h3>
                <p className="text-gray-600 text-center mb-4">
                  Canal oficial para denúncias de violações de direitos humanos, incluindo violações contra crianças e adolescentes.
                </p>
                <div className="flex justify-center">
                  <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    <a href="tel:100">
                      Ligar para o Disque 100
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full gradient-bg text-white flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                  190
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Polícia Militar</h3>
                <p className="text-gray-600 text-center mb-4">
                  Em casos de emergência ou flagrante de violência contra crianças e adolescentes, acione imediatamente a Polícia Militar.
                </p>
                <div className="flex justify-center">
                  <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    <a href="tel:190">
                      Ligar para a Polícia (190)
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full gradient-bg text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  Online
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Denúncia Online</h3>
                <p className="text-gray-600 text-center mb-4">
                  Portal para denúncias online de violações contra crianças e adolescentes, com a opção de anonimato.
                </p>
                <div className="flex justify-center">
                  <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    <a href="https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos" target="_blank" rel="noopener noreferrer">
                      Fazer Denúncia Online
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Aplicativo Direitos Humanos Brasil</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="col-span-1 md:col-span-2">
                <p className="text-gray-700 mb-4">
                  O aplicativo Direitos Humanos Brasil, desenvolvido pelo Ministério dos Direitos Humanos, 
                  permite fazer denúncias de violações de direitos de crianças e adolescentes diretamente 
                  pelo seu smartphone.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <a href="https://play.google.com/store/apps/details?id=br.gov.direitoshumanos.apps" target="_blank" rel="noopener noreferrer">
                      Download para Android
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <a href="https://apps.apple.com/br/app/direitos-humanos-brasil/id1534432352" target="_blank" rel="noopener noreferrer">
                      Download para iOS
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://www.gov.br/mdh/pt-br/assuntos/noticias/2020-2/dezembro/ministerio-lanca-app-direitos-humanos-brasil-nova-versao-do-aplicativo-direitoshumanosbrasil.jpeg/@@images/d0a4ed0a-f8b3-4d4b-99c0-e6548689d9bb.jpeg" 
                  alt="Aplicativo Direitos Humanos Brasil" 
                  className="max-w-[200px] mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localizador de Conselhos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-heading-2 text-gray-800 mb-4 text-center">Encontre o Conselho Tutelar Mais Próximo</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Selecione seu estado e cidade para localizar o Conselho Tutelar mais próximo de você. 
            Cada município brasileiro deve ter pelo menos um Conselho Tutelar.
          </p>
          
          <Card className="border-none shadow-md max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-2">
                    Estado
                  </label>
                  <Select value={estado} onValueChange={setEstado}>
                    <SelectTrigger id="estado" className="w-full">
                      <SelectValue placeholder="Selecione um estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {estados.map((est) => (
                          <SelectItem key={est} value={est}>
                            {est}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-2">
                    Cidade
                  </label>
                  <Input
                    id="cidade"
                    placeholder="Digite o nome da cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  onClick={handleBuscar}
                  disabled={!estado || !cidade}
                  className="bg-primary hover:bg-primary/90"
                >
                  Buscar Conselhos Tutelares
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {mostrarResultados && (
            <div className="mt-10 max-w-4xl mx-auto animate-fade-in">
              <h3 className="text-heading-3 text-gray-800 mb-6">Resultados para {cidade}, {estado}</h3>
              
              <div className="space-y-6">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">Conselho Tutelar - Região Centro</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-600 mb-1"><span className="font-medium">Endereço:</span> Rua Principal, 123 - Centro</p>
                        <p className="text-gray-600 mb-1"><span className="font-medium">Telefone:</span> (00) 3333-4444</p>
                        <p className="text-gray-600 mb-1"><span className="font-medium">E-mail:</span> conselho.centro@exemplo.com.br</p>
                        <p className="text-gray-600"><span className="font-medium">Horário:</span> Segunda a sexta, das 8h às 18h</p>
                      </div>
                      <div>
                        <Button asChild className="w-full justify-start bg-primary hover:bg-primary/90 mb-2">
                          <a href="tel:0033334444" className="flex items-center gap-2">
                            Ligar Agora
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary/10">
                          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Ver no Mapa <ArrowRight size={16} />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">Conselho Tutelar - Região Norte</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-600 mb-1"><span className="font-medium">Endereço:</span> Av. Norte, 789 - Bairro Norte</p>
                        <p className="text-gray-600 mb-1"><span className="font-medium">Telefone:</span> (00) 3333-5555</p>
                        <p className="text-gray-600 mb-1"><span className="font-medium">E-mail:</span> conselho.norte@exemplo.com.br</p>
                        <p className="text-gray-600"><span className="font-medium">Horário:</span> Segunda a sexta, das 8h às 18h</p>
                      </div>
                      <div>
                        <Button asChild className="w-full justify-start bg-primary hover:bg-primary/90 mb-2">
                          <a href="tel:0033335555" className="flex items-center gap-2">
                            Ligar Agora
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary/10">
                          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Ver no Mapa <ArrowRight size={16} />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  Para uma lista completa e atualizada de todos os Conselhos Tutelares do seu município, 
                  consulte também o site da prefeitura local.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Outros Órgãos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-heading-2 text-gray-800 mb-8 text-center">Outros Órgãos de Proteção</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Delegacias Especializadas</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Delegacias especializadas no atendimento à criança e ao adolescente, preparadas para lidar 
                  com casos de violência e abuso.
                </p>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <a 
                    href="https://www.gov.br/pt-br/servicos/denunciar-violencia-contra-criancas-e-adolescentes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Acessar <ArrowRight size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Ministério Público</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Responsável por fiscalizar o cumprimento das leis e garantir os direitos das crianças 
                  e adolescentes.
                </p>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <a 
                    href="https://www.cnmp.mp.br/portal/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Acessar <ArrowRight size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Defensoria Pública</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Presta assistência jurídica gratuita a pessoas que não têm condições de pagar por um advogado.
                </p>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <a 
                    href="https://www.defensoria.def.br/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Acessar <ArrowRight size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">CREAS</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Centro de Referência Especializado em Assistência Social, oferece atendimento a famílias 
                  em situação de risco.
                </p>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <a 
                    href="https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/unidades-de-atendimento/centro-de-referencia-especializado-de-assistencia-social-creas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Acessar <ArrowRight size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 p-6 bg-accent rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Organizações Não-Governamentais</h3>
            <p className="text-gray-700 mb-4">
              Além dos órgãos governamentais, diversas ONGs trabalham na proteção dos direitos da criança e 
              do adolescente, oferecendo suporte, acolhimento e orientação.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a 
                  href="https://www.childhood.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Childhood Brasil <ArrowRight size={16} />
                </a>
              </Button>
              
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a 
                  href="https://www.safernet.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  SaferNet (proteção online) <ArrowRight size={16} />
                </a>
              </Button>
              
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a 
                  href="https://www.unicef.org/brazil/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  UNICEF Brasil <ArrowRight size={16} />
                </a>
              </Button>
              
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a 
                  href="https://www.savethechildren.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Save the Children Brasil <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OndeBuscarAjudaPage;
