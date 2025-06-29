
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DepoimentosPage = () => {
  const depoimentos = [
    {
      id: "criancas",
      titulo: "Crianças e Adolescentes",
      relatos: [
        {
          nome: "Lucas M.",
          idade: "12 anos",
          cidade: "Curitiba, PR",
          imagem: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop",
          texto: "O Conselho Tutelar me ajudou quando eu estava passando por problemas na minha escola. Tinha um grupo de estudantes que estava me intimidando, e eu não conseguia mais ir às aulas. Contei para minha professora, que me encaminhou ao Conselho Tutelar. Os conselheiros conversaram comigo e com meus pais, depois foram até a escola. Agora tenho apoio psicológico e a intimidação parou. Estou conseguindo estudar novamente e fazer amigos."
        },
        {
          nome: "Ana C.",
          idade: "15 anos",
          cidade: "Fortaleza, CE",
          imagem: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop",
          texto: "Eu morava com meu pai, que tinha problemas com bebida. Muitas vezes ele ficava agressivo e eu tinha medo. Uma vizinha percebeu a situação e chamou o Conselho Tutelar. No começo eu fiquei assustada, mas os conselheiros foram muito gentis e me explicaram tudo o que ia acontecer. Meu pai recebeu ajuda para tratar a dependência, e eu fiquei temporariamente com minha avó. Hoje meu pai está melhor e estamos juntos novamente, com acompanhamento regular. Nossa vida está muito melhor."
        },
        {
          nome: "Pedro H.",
          idade: "17 anos",
          cidade: "Belo Horizonte, MG",
          imagem: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1528&auto=format&fit=crop",
          texto: "Quando minha mãe ficou doente e não conseguia mais trabalhar, nossa situação financeira piorou muito. Eu estava pensando em abandonar a escola para trabalhar e ajudar em casa. Uma assistente social da escola percebeu o problema e nos encaminhou ao Conselho Tutelar. Eles nos ajudaram a conseguir benefícios sociais, cesta básica e até uma bolsa para que eu pudesse continuar estudando. Hoje estou terminando o ensino médio e já consegui uma vaga de estágio. Sem a ajuda deles, eu teria abandonado meus estudos."
        }
      ]
    },
    {
      id: "familias",
      titulo: "Famílias",
      relatos: [
        {
          nome: "Maria A.",
          idade: "35 anos",
          cidade: "São Paulo, SP",
          imagem: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
          texto: "Minha filha tem necessidades especiais e eu lutava há anos para conseguir uma vaga em uma escola adaptada. Depois de muitas tentativas frustradas, procurei o Conselho Tutelar. Eles entraram em contato com a Secretaria de Educação e, em menos de um mês, minha filha conseguiu uma vaga com todos os recursos necessários para seu desenvolvimento. Além disso, nos encaminharam para um programa de apoio a pais de crianças com deficiência. Hoje ela está feliz e se desenvolvendo muito bem na escola."
        },
        {
          nome: "Carlos R.",
          idade: "42 anos",
          cidade: "Recife, PE",
          imagem: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop",
          texto: "Após o falecimento da minha esposa, entrei em depressão e tive dificuldade para cuidar dos meus dois filhos pequenos. Minha irmã, preocupada com a situação, entrou em contato com o Conselho Tutelar. Inicialmente fiquei magoado, mas hoje vejo que foi a melhor coisa que aconteceu. Os conselheiros me ajudaram a conseguir tratamento psicológico e orientação parental. Também recebemos apoio com alimentação e material escolar durante o período mais difícil. Graças a essa intervenção, consegui me recuperar e manter meus filhos comigo. Hoje somos uma família unida e feliz novamente."
        },
        {
          nome: "Joana e Paulo S.",
          idade: "28 e 30 anos",
          cidade: "Porto Alegre, RS",
          imagem: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1470&auto=format&fit=crop",
          texto: "Adotamos duas crianças que viviam em situação de negligência. O processo começou quando o Conselho Tutelar identificou a situação de risco em que elas viviam e tomou as medidas necessárias para protegê-las. Durante todo o processo de adoção, recebemos apoio e orientação dos conselheiros. Eles fizeram o acompanhamento do caso, garantindo que as crianças estivessem bem acolhidas até a finalização da adoção. Hoje formamos uma família feliz e as crianças estão muito bem adaptadas, frequentando a escola e recebendo todo o amor e cuidado que merecem."
        }
      ]
    },
    {
      id: "educadores",
      titulo: "Educadores",
      relatos: [
        {
          nome: "Profa. Débora L.",
          idade: "48 anos",
          cidade: "Salvador, BA",
          imagem: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1374&auto=format&fit=crop",
          texto: "Como professora do ensino fundamental, já precisei acionar o Conselho Tutelar algumas vezes. Lembro especialmente do caso de um aluno que apresentava sinais de negligência e frequentemente faltava às aulas. Após a intervenção do Conselho, descobriu-se que a mãe estava com depressão severa e não conseguia cuidar adequadamente do filho. A família toda recebeu apoio e, alguns meses depois, percebi uma mudança impressionante no aluno. Sua frequência normalizou, seu desempenho melhorou e ele voltou a sorrir. Este é apenas um exemplo do quanto o trabalho integrado entre escola e Conselho Tutelar pode transformar vidas."
        },
        {
          nome: "Diretor Roberto M.",
          idade: "52 anos",
          cidade: "Brasília, DF",
          imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
          texto: "Como diretor de escola, mantenho um contato próximo com o Conselho Tutelar da nossa região. Desenvolvemos um trabalho de prevenção, com palestras e orientações para alunos, pais e professores sobre os direitos das crianças e adolescentes. Esta parceria tem sido fundamental para identificar precocemente situações de risco e para promover um ambiente escolar mais seguro e acolhedor. Nos casos em que precisamos da intervenção do Conselho, sempre encontramos profissionais comprometidos e eficientes. O resultado é visível na melhoria da frequência escolar e no bem-estar dos nossos alunos."
        },
        {
          nome: "Coordenadora Camila F.",
          idade: "39 anos",
          cidade: "Manaus, AM",
          imagem: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1374&auto=format&fit=crop",
          texto: "Como coordenadora pedagógica em uma região periférica, encontro diversos desafios relacionados à proteção dos direitos dos nossos alunos. O Conselho Tutelar tem sido um parceiro essencial no enfrentamento desses desafios. Lembro-me de um caso onde vários adolescentes estavam sendo aliciados por traficantes nas proximidades da escola. Graças à rápida atuação do Conselho Tutelar, em conjunto com outros órgãos, conseguimos implementar medidas de proteção que incluíram reforço na segurança da área e atividades no contraturno escolar. O trabalho preventivo e integrado é fundamental para garantir os direitos das crianças e adolescentes."
        }
      ]
    },
    {
      id: "conselheiros",
      titulo: "Conselheiros",
      relatos: [
        {
          nome: "Fernanda R.",
          idade: "45 anos",
          cidade: "Rio de Janeiro, RJ",
          imagem: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop",
          texto: "Sou conselheira tutelar há 8 anos e posso afirmar que, apesar dos desafios, é um trabalho extremamente gratificante. Lembro-me de um caso particularmente marcante de uma adolescente de 14 anos que sofria abuso do padrasto. Após recebermos a denúncia anônima, fizemos o acolhimento da jovem e tomamos todas as medidas necessárias para sua proteção. Hoje, três anos depois, ela está morando com a avó, recuperou-se emocionalmente e retomou os estudos com excelente desempenho. Histórias como essa renovam nossas forças e nos mostram o quanto nosso trabalho pode transformar vidas."
        },
        {
          nome: "Marcos S.",
          idade: "37 anos",
          cidade: "Goiânia, GO",
          imagem: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
          texto: "Um dos casos mais gratificantes que atendi como conselheiro tutelar foi o de um grupo de irmãos que vivia em condições precárias, com alimentação insuficiente e sem frequentar a escola. Após uma denúncia, identificamos que a mãe estava desempregada e sem rede de apoio. Em vez de simplesmente afastar as crianças, trabalhamos para fortalecer aquela família. Articulamos uma rede de apoio que incluiu qualificação profissional para a mãe, vaga em creche para o filho menor e acompanhamento escolar para os mais velhos. Dois anos depois, a família está estabilizada, a mãe empregada e todas as crianças estudando regularmente. Este é o verdadeiro sentido do nosso trabalho: fortalecer famílias."
        },
        {
          nome: "Lúcia T.",
          idade: "50 anos",
          cidade: "Belém, PA",
          imagem: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2eafd?q=80&w=1374&auto=format&fit=crop",
          texto: "Atuo como conselheira tutelar em uma região ribeirinha, onde os desafios são enormes devido à dificuldade de acesso a algumas comunidades. Implementamos um projeto de conselho tutelar itinerante, que visita periodicamente as comunidades mais isoladas. Em uma dessas visitas, identificamos várias crianças que estavam fora da escola por falta de transporte. Articulamos com a secretaria de educação do município e conseguimos a implementação de transporte escolar fluvial. Hoje, mais de 50 crianças dessas comunidades estão frequentando a escola regularmente. Nosso trabalho vai muito além de atender denúncias; buscamos garantir direitos fundamentais e transformar realidades."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Depoimentos
            </h1>
            <p className="text-xl mb-0">
              Histórias reais de pessoas que tiveram suas vidas transformadas pela atuação do Conselho Tutelar.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre os Depoimentos */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-heading-3 text-gray-800 mb-6">O Impacto do Conselho Tutelar</h2>
            <p className="text-body-large text-gray-600">
              Aqui você encontrará histórias reais de crianças, adolescentes, famílias, educadores e conselheiros
              tutelares que compartilham suas experiências com o Conselho Tutelar.
              Estes relatos mostram como a intervenção adequada pode transformar vidas e proteger direitos.
            </p>
            <p className="text-gray-600 italic mt-4">
              <span className="font-medium">Nota:</span> Todos os nomes foram alterados para preservar a privacidade das pessoas envolvidas.
              As imagens são meramente ilustrativas.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos em Tabs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <Tabs defaultValue="criancas" className="space-y-10">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2">
              {depoimentos.map((categoria) => (
                <TabsTrigger key={categoria.id} value={categoria.id}>
                  {categoria.titulo}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {depoimentos.map((categoria) => (
              <TabsContent key={categoria.id} value={categoria.id} className="space-y-8">
                {categoria.relatos.map((relato, index) => (
                  <Card key={index} className="border-none shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="hidden lg:block">
                          <img 
                            src={relato.imagem} 
                            alt={`Foto de ${relato.nome}`} 
                            className="h-full w-full object-cover" 
                          />
                        </div>
                        
                        <div className="lg:col-span-2 p-6 lg:p-8">
                          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden lg:hidden">
                              <img 
                                src={relato.imagem} 
                                alt={`Foto de ${relato.nome}`} 
                                className="h-full w-full object-cover" 
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-800">{relato.nome}</h3>
                              <p className="text-gray-600">{relato.idade} • {relato.cidade}</p>
                            </div>
                          </div>
                          
                          <div className="relative">
                            <div className="text-4xl font-bold text-primary opacity-30 absolute -top-8 left-0">"</div>
                            <p className="text-gray-700 italic">
                              {relato.texto}
                            </p>
                            <div className="text-4xl font-bold text-primary opacity-30 absolute bottom-0 right-0">"</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Compartilhe sua História */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-secondary p-8 md:p-10 rounded-lg text-center">
            <h2 className="text-heading-3 text-gray-800 mb-4">Compartilhe Sua História</h2>
            <p className="text-gray-700 mb-6">
              Se você também teve sua vida transformada pela atuação do Conselho Tutelar e deseja compartilhar 
              sua experiência para inspirar outros, entre em contato conosco.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6 text-left">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Por que compartilhar?</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Ajudar outras pessoas a procurar ajuda</li>
                    <li>Inspirar histórias de superação</li>
                    <li>Mostrar que é possível superar desafios</li>
                    <li>Contribuir para diminuir o estigma e o medo</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6 text-left">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Como participar</h3>
                  <p className="text-gray-700 mb-4">
                    Envie um email para <span className="text-primary font-medium">depoimentos@guardioesdainfancia.org.br</span> com sua história.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Garantimos o sigilo das informações e alteração de nomes e dados que possam identificar as pessoas envolvidas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepoimentosPage;
