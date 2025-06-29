
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SobrePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre o Conselho Tutelar
            </h1>
            <p className="text-xl mb-0">
              Conheça o órgão responsável por zelar pelos direitos das crianças e dos adolescentes no Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal com Tabs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Tabs defaultValue="oque" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 gap-2">
              <TabsTrigger value="oque">O que é</TabsTrigger>
              <TabsTrigger value="atribuicoes">Atribuições</TabsTrigger>
              <TabsTrigger value="leis">Legislação</TabsTrigger>
              <TabsTrigger value="quando">Quando Procurar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="oque" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-heading-3 text-gray-800 mb-4">O que é o Conselho Tutelar</h2>
                  <p className="text-gray-700 mb-4">
                    O Conselho Tutelar é um órgão permanente e autônomo, não jurisdicional, encarregado pela sociedade de zelar
                    pelo cumprimento dos direitos da criança e do adolescente definidos pelo Estatuto da Criança e do Adolescente (ECA).
                  </p>
                  <p className="text-gray-700 mb-4">
                    Criado em conjunto com o ECA (Lei 8.069/90), o Conselho Tutelar representa um avanço importante na proteção dos 
                    direitos da criança e do adolescente no Brasil, sendo uma instância de atendimento direto à comunidade.
                  </p>
                  <p className="text-gray-700">
                    Cada município brasileiro deve ter pelo menos um Conselho Tutelar, composto por cinco membros, eleitos pela 
                    comunidade local para um mandato de 4 anos, sendo permitida uma recondução mediante novo processo de escolha.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560252829-804f1aeaf1be?q=80&w=1374&auto=format&fit=crop" 
                    alt="Conselheiros em reunião" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              <Card className="mt-8 border-none shadow-md bg-gray-50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Princípios fundamentais do Conselho Tutelar:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><span className="font-medium">Autonomia:</span> O Conselho tem independência para tomar suas decisões.</li>
                    <li><span className="font-medium">Permanência:</span> Funciona continuamente, estando sempre disponível para atender às necessidades.</li>
                    <li><span className="font-medium">Colegiado:</span> As decisões são tomadas em conjunto pelos cinco conselheiros.</li>
                    <li><span className="font-medium">Não jurisdicional:</span> Não julga conflitos nem aplica medidas judiciais.</li>
                    <li><span className="font-medium">Zeladoria:</span> Fiscaliza os direitos de crianças e adolescentes e cobra responsabilidades.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="atribuicoes" className="space-y-8">
              <div>
                <h2 className="text-heading-3 text-gray-800 mb-6">Atribuições do Conselho Tutelar</h2>
                <p className="text-gray-700 mb-4">
                  O Artigo 136 do Estatuto da Criança e do Adolescente (ECA) estabelece as atribuições do Conselho Tutelar, 
                  que tem como função principal garantir que nenhum direito seja violado ou ameaçado. Entre as principais atribuições, destacam-se:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Atendimento</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Atender crianças e adolescentes com direitos ameaçados ou violados</li>
                      <li>Atender e aconselhar os pais ou responsáveis</li>
                      <li>Ouvir e acolher denúncias</li>
                      <li>Realizar o atendimento inicial de adolescentes em conflito com a lei</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Encaminhamentos</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Encaminhar casos para o Ministério Público e Justiça quando necessário</li>
                      <li>Providenciar medidas de proteção determinadas pela Justiça</li>
                      <li>Encaminhar ao Ministério Público notícia de infração administrativa ou penal</li>
                      <li>Requisitar serviços públicos nas áreas de saúde, educação, assistência social, entre outros</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Fiscalização</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Fiscalizar entidades de atendimento a crianças e adolescentes</li>
                      <li>Representar contra violações aos direitos da criança ou adolescente</li>
                      <li>Acompanhar o cumprimento de medidas aplicadas</li>
                      <li>Expedir notificações em casos de sua competência</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Medidas de Proteção</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Aplicar medidas de proteção previstas no Art. 101, I a VII do ECA</li>
                      <li>Aplicar medidas aos pais ou responsáveis previstas no Art. 129, I a VII do ECA</li>
                      <li>Solicitar emissão de documentos</li>
                      <li>Orientar a família e encaminhar para programas de apoio</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Importante Saber:</h3>
                <p className="text-gray-700">
                  O Conselho Tutelar não tem o poder de:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                  <li>Determinar a guarda de crianças e adolescentes (atribuição do Judiciário)</li>
                  <li>Aplicar medidas socioeducativas a adolescentes autores de ato infracional</li>
                  <li>Autorizar casamento, viagem ou trabalho de adolescentes sem autorização judicial</li>
                  <li>Investigar crimes envolvendo crianças e adolescentes (atribuição da polícia)</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="leis" className="space-y-8">
              <h2 className="text-heading-3 text-gray-800 mb-6">Legislação sobre Proteção à Criança e ao Adolescente</h2>
              
              <Card className="border-none shadow-md mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Estatuto da Criança e do Adolescente (ECA)</h3>
                  <p className="text-gray-700 mb-4">
                    A Lei nº 8.069, de 13 de julho de 1990, conhecida como Estatuto da Criança e do Adolescente (ECA), 
                    é o principal marco legal sobre os direitos da criança e do adolescente no Brasil. O ECA representa 
                    a concretização dos direitos fundamentais previstos na Constituição Federal de 1988, que em seu artigo 227 
                    estabelece a prioridade absoluta para crianças e adolescentes.
                  </p>
                  <p className="text-gray-700">
                    O ECA adota a Doutrina da Proteção Integral, reconhecendo crianças e adolescentes como sujeitos de direitos 
                    que, em razão da condição peculiar de pessoas em desenvolvimento, necessitam de proteção especial.
                  </p>
                </CardContent>
              </Card>
              
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="item-1" className="border rounded-lg shadow-sm">
                  <AccordionTrigger className="px-4">Principais Artigos do ECA</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><span className="font-medium">Art. 4º:</span> Estabelece a prioridade absoluta para crianças e adolescentes</li>
                      <li><span className="font-medium">Art. 5º:</span> Proteção contra negligência, discriminação, violência e crueldade</li>
                      <li><span className="font-medium">Art. 13:</span> Obrigação de comunicar ao Conselho Tutelar casos de suspeita de maus-tratos</li>
                      <li><span className="font-medium">Art. 98:</span> Define quando se aplicam medidas de proteção</li>
                      <li><span className="font-medium">Art. 101:</span> Estabelece as medidas de proteção</li>
                      <li><span className="font-medium">Art. 131 a 140:</span> Dispõem sobre o Conselho Tutelar</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg shadow-sm">
                  <AccordionTrigger className="px-4">Constituição Federal</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="text-gray-700 mb-4">
                      O artigo 227 da Constituição Federal de 1988 estabelece:
                    </p>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700">
                      "É dever da família, da sociedade e do Estado assegurar à criança, ao adolescente e ao jovem, 
                      com absoluta prioridade, o direito à vida, à saúde, à alimentação, à educação, ao lazer, à 
                      profissionalização, à cultura, à dignidade, ao respeito, à liberdade e à convivência familiar 
                      e comunitária, além de colocá-los a salvo de toda forma de negligência, discriminação, exploração, 
                      violência, crueldade e opressão."
                    </blockquote>
                    <p className="text-gray-700 mt-4">
                      Este artigo é a base constitucional para toda a política de proteção integral à criança e ao adolescente.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border rounded-lg shadow-sm">
                  <AccordionTrigger className="px-4">Lei da Primeira Infância</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="text-gray-700">
                      A Lei nº 13.257/2016, conhecida como Marco Legal da Primeira Infância, estabelece princípios e 
                      diretrizes para políticas públicas voltadas ao desenvolvimento integral da criança desde os 
                      primeiros anos de vida. Esta lei reconhece a primeira infância como período fundamental para o 
                      desenvolvimento humano.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border rounded-lg shadow-sm">
                  <AccordionTrigger className="px-4">Outras Legislações Relevantes</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><span className="font-medium">Lei nº 13.431/2017:</span> Estabelece o sistema de garantia de direitos da criança e do adolescente vítima ou testemunha de violência</li>
                      <li><span className="font-medium">Lei nº 13.010/2014:</span> Conhecida como "Lei Menino Bernardo" ou "Lei da Palmada", estabelece o direito da criança e do adolescente de serem educados sem o uso de castigos físicos</li>
                      <li><span className="font-medium">Lei nº 12.594/2012:</span> Institui o Sistema Nacional de Atendimento Socioeducativo (SINASE)</li>
                      <li><span className="font-medium">Lei nº 13.185/2015:</span> Institui o Programa de Combate à Intimidação Sistemática (Bullying)</li>
                      <li><span className="font-medium">Lei nº 12.978/2014:</span> Torna hediondo o crime de exploração sexual de crianças e adolescentes</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border rounded-lg shadow-sm">
                  <AccordionTrigger className="px-4">Acordos e Convenções Internacionais</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><span className="font-medium">Convenção sobre os Direitos da Criança:</span> Adotada pela ONU em 1989 e ratificada pelo Brasil em 1990</li>
                      <li><span className="font-medium">Protocolo Facultativo à Convenção sobre os Direitos da Criança:</span> Referente à venda de crianças, prostituição e pornografia infantis</li>
                      <li><span className="font-medium">Convenção de Haia:</span> Sobre Aspectos Civis do Sequestro Internacional de Crianças</li>
                      <li><span className="font-medium">Convenção 182 da OIT:</span> Sobre a Proibição das Piores Formas de Trabalho Infantil</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="quando" className="space-y-8">
              <h2 className="text-heading-3 text-gray-800 mb-6">Quando Procurar o Conselho Tutelar</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="border-none shadow-md col-span-1 lg:col-span-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Situações de Violação de Direitos</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary">Violência Física</h4>
                        <p className="text-gray-700">
                          Inclui qualquer ação que cause dano físico à criança ou adolescente, como espancamentos, 
                          agressões, lesões, queimaduras ou situações que coloquem em risco sua integridade física.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary">Violência Psicológica</h4>
                        <p className="text-gray-700">
                          Envolve ameaças, humilhações, chantagem emocional, exposição a situações vexatórias, 
                          intimidação, isolamento, terror psicológico e outros comportamentos que causem sofrimento mental.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary">Violência Sexual</h4>
                        <p className="text-gray-700">
                          Inclui qualquer forma de atividade sexual com uma criança ou adolescente, como abuso 
                          sexual, exploração sexual, prostituição infantil, pornografia ou aliciamento online.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary">Negligência e Abandono</h4>
                        <p className="text-gray-700">
                          Ocorre quando há omissão dos responsáveis em prover as necessidades básicas para o 
                          desenvolvimento da criança, como alimentação, higiene, educação, saúde, proteção e afeto.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary">Questões Educacionais</h4>
                        <p className="text-gray-700">
                          Situações como evasão escolar, dificuldade de acesso à escola, negação de matrícula, 
                          bullying escolar não resolvido pela instituição de ensino, entre outras.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card className="border-none shadow-md h-auto">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">Outros Casos</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Trabalho infantil (antes dos 14 anos) ou trabalho perigoso e prejudicial</li>
                        <li>Uso de drogas por crianças e adolescentes</li>
                        <li>Conflitos familiares que afetem os direitos dos filhos</li>
                        <li>Crianças e adolescentes em situação de rua</li>
                        <li>Dificuldade de acesso a serviços públicos essenciais</li>
                        <li>Discriminação em razão de raça, gênero, orientação sexual, religião ou deficiência</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-md bg-accent h-auto">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">Lembre-se</h3>
                      <p className="text-gray-700">
                        Qualquer pessoa pode e deve denunciar situações de violação de direitos. Não é necessário 
                        identificar-se para fazer uma denúncia. O sigilo é garantido.
                      </p>
                      <p className="text-gray-700 mt-4 font-medium">
                        Em casos de emergência que representem risco imediato à vida, acione também a polícia 
                        pelo telefone 190.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Card className="border-none shadow-md bg-gray-50 mt-8">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Como Identificar Sinais de Violência ou Negligência</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Sinais Físicos</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Lesões inexplicáveis ou com explicações inconsistentes</li>
                        <li>Marcas de queimaduras, mordidas ou hematomas</li>
                        <li>Aparência descuidada e falta de higiene constante</li>
                        <li>Vestimentas inadequadas para o clima</li>
                        <li>Desnutrição ou fome frequente</li>
                        <li>Problemas médicos ou dentários não tratados</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Sinais Comportamentais</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Mudanças bruscas de comportamento</li>
                        <li>Medo excessivo de adultos ou de ir para casa</li>
                        <li>Comportamento sexual inadequado para a idade</li>
                        <li>Isolamento social ou dificuldade de relacionamento</li>
                        <li>Agressividade excessiva ou muita passividade</li>
                        <li>Queda no rendimento escolar ou faltas frequentes</li>
                        <li>Tentativas de suicídio ou automutilação</li>
                        <li>Uso de álcool ou drogas</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;
