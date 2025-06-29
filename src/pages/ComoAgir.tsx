
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ComoAgirPage = () => {
  const passos = [
    {
      numero: "01",
      titulo: "Identificar Sinais de Alerta",
      descricao: "Aprenda a reconhecer os sinais de que uma criança ou adolescente pode estar em situação de risco.",
      conteudo: (
        <>
          <p className="text-gray-700 mb-4">
            O primeiro passo para proteger uma criança ou adolescente é saber identificar os sinais de que algo pode estar errado. 
            Fique atento a mudanças repentinas de comportamento e outros indicadores:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-2">Sinais Físicos:</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Lesões, hematomas ou queimaduras sem explicação lógica</li>
                <li>Machucados em diferentes estágios de cicatrização</li>
                <li>Higiene precária ou inadequada para a idade</li>
                <li>Roupa inadequada para o clima ou tamanho</li>
                <li>Aparência cansada, sonolenta ou desnutrida</li>
                <li>Problemas médicos ou odontológicos não tratados</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Sinais Comportamentais:</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Alterações bruscas de comportamento</li>
                <li>Medo excessivo dos pais ou responsáveis</li>
                <li>Comportamento sexual inadequado para a idade</li>
                <li>Absenteísmo escolar frequente</li>
                <li>Isolamento, tristeza persistente ou depressão</li>
                <li>Agressividade ou comportamento autodestrutivo</li>
                <li>Regressão a comportamentos já superados</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      numero: "02",
      titulo: "Diálogo e Acolhimento",
      descricao: "Saiba como abordar e conversar com a criança ou adolescente quando houver suspeita de violação de direitos.",
      conteudo: (
        <>
          <p className="text-gray-700 mb-4">
            Caso identifique sinais de alerta, é importante saber como se aproximar e dialogar com a criança ou adolescente de forma adequada:
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-primary">Escolha o momento e local adequados</h4>
              <p className="text-gray-700">
                Busque um lugar tranquilo, seguro e privado para a conversa. Evite a presença de muitas pessoas ou potenciais agressores.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Mantenha a calma e use linguagem adequada</h4>
              <p className="text-gray-700">
                Utilize linguagem simples e apropriada à idade. Evite expressões de choque ou horror que possam assustar ou fazer a criança se sentir culpada.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Escute atentamente</h4>
              <p className="text-gray-700">
                Permita que a criança ou adolescente fale em seu próprio ritmo, sem interrupções. Não force revelações nem faça perguntas sugestivas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Valide os sentimentos da criança</h4>
              <p className="text-gray-700">
                Reforce que ela não tem culpa e que foi corajosa em falar sobre o assunto. Agradeça pela confiança.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Seja honesto sobre os próximos passos</h4>
              <p className="text-gray-700">
                Explique, de forma adequada à idade, que você precisará buscar ajuda para protegê-la. Não faça promessas que não possa cumprir, 
                como manter segredo absoluto.
              </p>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg mt-6">
            <p className="text-gray-700 font-medium">
              Importante: Não tente resolver a situação sozinho. O papel do adulto que percebe a violação é acolher 
              e buscar imediatamente os órgãos competentes.
            </p>
          </div>
        </>
      )
    },
    {
      numero: "03",
      titulo: "Como e Onde Denunciar",
      descricao: "Conheça os canais de denúncia disponíveis e saiba como utilizá-los de forma efetiva.",
      conteudo: (
        <>
          <p className="text-gray-700 mb-6">
            Após identificar e acolher inicialmente a situação, é fundamental fazer a denúncia aos órgãos competentes. 
            Você pode utilizar diversos canais:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Conselho Tutelar</h4>
                <p className="text-gray-700 mb-2">
                  É o principal órgão de proteção dos direitos da criança e do adolescente. Cada município tem pelo 
                  menos um Conselho Tutelar que pode ser acionado.
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Como denunciar:</span> Presencialmente, por telefone ou por email.
                </p>
                <Button asChild variant="outline" className="w-full mt-2 border-primary text-primary hover:bg-primary/10">
                  <Link to="/onde-buscar-ajuda" className="flex items-center justify-center gap-2">
                    Encontrar Conselho Tutelar <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Disque 100</h4>
                <p className="text-gray-700 mb-2">
                  Canal nacional gratuito para denúncias de violações de direitos humanos, funciona 24 horas, 
                  todos os dias da semana.
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Como denunciar:</span> Ligue para o número 100 de qualquer telefone.
                </p>
                <Button asChild className="w-full mt-2 bg-primary hover:bg-primary/90">
                  <a href="tel:100" className="flex items-center justify-center gap-2">
                    Ligar para o Disque 100
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Delegacias Especializadas</h4>
                <p className="text-gray-700 mb-2">
                  Muitos municípios contam com delegacias especializadas no atendimento a crianças e adolescentes vítimas.
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Como denunciar:</span> Presencialmente ou por telefone.
                </p>
                <Button asChild variant="outline" className="w-full mt-2 border-primary text-primary hover:bg-primary/10">
                  <a 
                    href="https://www.gov.br/pt-br/servicos/denunciar-violencia-contra-criancas-e-adolescentes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Encontrar Delegacia <ArrowRight size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Portal de Denúncias Online</h4>
                <p className="text-gray-700 mb-2">
                  Canal digital para denúncias de violações de direitos de crianças e adolescentes, com opção de anonimato.
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Como denunciar:</span> Preencha o formulário online com o máximo de informações.
                </p>
                <Button asChild variant="outline" className="w-full mt-2 border-primary text-primary hover:bg-primary/10">
                  <a 
                    href="https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Acessar Portal <ArrowRight size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <h4 className="font-semibold text-primary mb-3">Ao fazer uma denúncia:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Forneça o máximo de informações possíveis sobre a vítima e a situação</li>
              <li>Indique endereços, nomes e dados que possam ajudar a localizar a criança</li>
              <li>Descreva os sinais ou situações que geraram a suspeita</li>
              <li>Se possível, informe há quanto tempo a situação ocorre</li>
              <li>Você pode optar por fazer uma denúncia anônima</li>
              <li>Em caso de emergência (risco imediato à vida), ligue também para o 190 (Polícia Militar)</li>
            </ul>
          </div>
        </>
      )
    },
    {
      numero: "04",
      titulo: "Durante e Após a Denúncia",
      descricao: "Entenda o que acontece após uma denúncia e como continuar apoiando a criança ou adolescente.",
      conteudo: (
        <>
          <p className="text-gray-700 mb-6">
            É importante entender o que acontece após a denúncia e como você pode continuar apoiando a criança ou adolescente:
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-primary mb-2">O que acontece após a denúncia?</h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>O órgão que recebe a denúncia (Conselho Tutelar, delegacia, etc.) inicia uma avaliação da situação</li>
                <li>O Conselho Tutelar pode realizar visitas domiciliares e entrevistas</li>
                <li>Medidas de proteção podem ser aplicadas imediatamente, se necessário</li>
                <li>Caso confirmada a violação, o Conselho Tutelar pode requisitar serviços públicos ou encaminhar o caso para o Ministério Público</li>
                <li>Dependendo da situação, podem ser aplicadas medidas de proteção previstas no ECA (art. 101)</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-2">Como continuar oferecendo apoio:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Mantenha um ambiente seguro, acolhedor e sem julgamentos</li>
                <li>Respeite o tempo e espaço da criança ou adolescente</li>
                <li>Não pressione por detalhes sobre a situação</li>
                <li>Siga as orientações dos profissionais envolvidos no caso</li>
                <li>Se você é familiar ou próximo, participe do processo de recuperação, comparecendo a atendimentos quando solicitado</li>
                <li>Incentive a regularidade em tratamentos e acompanhamentos indicados</li>
              </ul>
            </div>
            
            <Card className="border-none shadow-md bg-secondary">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Preservação da Privacidade</h4>
                <p className="text-gray-700">
                  É fundamental preservar a privacidade e dignidade da criança ou adolescente. Evite expor ou compartilhar 
                  a situação com pessoas que não estejam diretamente envolvidas no cuidado ou no processo legal.
                </p>
              </CardContent>
            </Card>
            
            <div>
              <h4 className="font-semibold text-primary mb-2">Possíveis Encaminhamentos:</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Atendimento psicológico para a vítima e família</li>
                <li>Inclusão em programas de assistência social</li>
                <li>Atendimento médico especializado</li>
                <li>Acompanhamento escolar diferenciado</li>
                <li>Em casos mais graves, afastamento do agressor ou da criança do ambiente de risco</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      numero: "05",
      titulo: "Reconstrução e Superação",
      descricao: "Como apoiar a recuperação e reconstrução da vida após situações de violação de direitos.",
      conteudo: (
        <>
          <p className="text-gray-700 mb-6">
            O processo de recuperação e reconstrução após situações de violação de direitos pode ser longo, 
            mas com apoio adequado, crianças e adolescentes têm grande capacidade de superação:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-primary mb-2">Rede de Apoio</h4>
              <p className="text-gray-700">
                A construção de uma rede de apoio sólida é fundamental para a recuperação. Esta rede pode incluir familiares, 
                amigos, professores, conselheiros tutelares e profissionais de saúde mental. 
                Todos esses atores, trabalhando em conjunto, podem oferecer diferentes formas de suporte e acompanhamento.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-2">Tratamento Terapêutico</h4>
              <p className="text-gray-700">
                O acompanhamento psicológico ou psicoterapêutico é essencial para processar traumas e desenvolver 
                resiliência. Existem diversas abordagens terapêuticas específicas para crianças e adolescentes que 
                passaram por situações traumáticas.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-primary mb-2">Rotinas e Normalidade</h4>
              <p className="text-gray-700">
                Restabelecer rotinas diárias estruturadas e previsíveis ajuda a criar uma sensação de segurança 
                e normalidade. A frequência escolar regular, atividades de lazer e esportes são importantes para 
                o desenvolvimento saudável e a reintegração social.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-2">Respeito ao Tempo Individual</h4>
              <p className="text-gray-700">
                Cada criança ou adolescente tem seu próprio ritmo de recuperação. É importante respeitar esse tempo, 
                sem pressionar ou comparar com outras situações. A paciência e o apoio constante são essenciais durante todo o processo.
              </p>
            </div>
            
            <Card className="border-none shadow-md bg-accent">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Sinais de Recuperação Positiva</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Retomada de atividades e interesses anteriores</li>
                  <li>Estabelecimento de relações de confiança com adultos e pares</li>
                  <li>Expressão adequada de emoções</li>
                  <li>Melhora no desempenho escolar</li>
                  <li>Redução de comportamentos regressivos ou autodestrutivos</li>
                  <li>Capacidade de falar sobre a experiência sem ser sobrecarregado emocionalmente</li>
                  <li>Desenvolvimento de expectativas positivas para o futuro</li>
                </ul>
              </CardContent>
            </Card>
            
            <div>
              <h4 className="font-semibold text-primary mb-2">Histórias de Superação</h4>
              <p className="text-gray-700 mb-4">
                Conhecer histórias de outras pessoas que passaram por situações semelhantes e conseguiram 
                superá-las pode ser inspirador e transmitir esperança. Grupos de apoio, quando apropriados 
                para a idade, podem ser espaços importantes para compartilhar experiências e aprender 
                estratégias de enfrentamento.
              </p>
              <div className="text-center">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/depoimentos" className="flex items-center gap-2">
                    Ver Histórias de Superação <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como Agir
            </h1>
            <p className="text-xl mb-0">
              Um guia prático para identificar, denunciar e apoiar casos de violação de direitos de crianças e adolescentes.
            </p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-heading-3 text-gray-800 mb-6">Protegendo Nosso Futuro</h2>
            <p className="text-body-large text-gray-600">
              A proteção de crianças e adolescentes é responsabilidade de toda a sociedade. Quando identificamos 
              situações de risco ou violação de direitos, é nosso dever agir. Este guia apresenta os passos 
              necessários para fazer a diferença, desde a identificação dos sinais de alerta até o apoio à 
              recuperação e reconstrução de vidas.
            </p>
            <p className="text-gray-600 mt-4">
              Siga o passo a passo abaixo para entender como você pode contribuir para a proteção da infância.
            </p>
          </div>
        </div>
      </section>

      {/* Passos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {passos.map((passo, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-24 flex-shrink-0">
                      <div className="w-20 h-20 rounded-full gradient-bg text-white font-montserrat font-bold text-3xl flex items-center justify-center shadow-lg">
                        {passo.numero}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-heading-4 text-gray-800 mb-2">{passo.titulo}</h3>
                      <p className="text-gray-600 mb-6">{passo.descricao}</p>
                      
                      <Card className="border-none shadow-lg">
                        <CardContent className="pt-6">
                          {passo.conteudo}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Linha conectora entre os passos */}
                  {index < passos.length - 1 && (
                    <div className="absolute left-10 top-24 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-3 text-gray-800 mb-8 text-center">Perguntas Frequentes</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg shadow-sm">
                <AccordionTrigger className="px-4">
                  Posso fazer uma denúncia anônima?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-gray-700">
                    Sim, você pode fazer denúncias anônimas através do Disque 100, do portal de denúncias online 
                    ou diretamente no Conselho Tutelar. O anonimato é garantido para proteger o denunciante. 
                    No entanto, é importante fornecer o máximo de informações possíveis para que os órgãos 
                    competentes possam localizar e ajudar a vítima.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg shadow-sm">
                <AccordionTrigger className="px-4">
                  E se eu não tiver certeza da violação?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-gray-700">
                    É melhor denunciar e estar enganado do que não denunciar e permitir que a violação continue. 
                    Os órgãos de proteção são preparados para avaliar as situações e investigar de forma 
                    cuidadosa e sigilosa. Uma denúncia feita de boa-fé, mesmo que não se confirme, é sempre 
                    melhor do que ignorar sinais de alerta.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg shadow-sm">
                <AccordionTrigger className="px-4">
                  A criança pode ser afastada da família após a denúncia?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-gray-700">
                    O afastamento da criança do convívio familiar é uma medida excepcional, aplicada apenas 
                    quando há risco imediato à integridade física ou psicológica. O Estatuto da Criança e do 
                    Adolescente prioriza o fortalecimento dos vínculos familiares e comunitários. Na maioria 
                    dos casos, são oferecidos serviços de apoio e acompanhamento à família para superar as 
                    dificuldades.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg shadow-sm">
                <AccordionTrigger className="px-4">
                  Quem pode acionar o Conselho Tutelar?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-gray-700">
                    Qualquer pessoa pode e deve acionar o Conselho Tutelar quando souber de violações aos 
                    direitos de crianças e adolescentes. Não é necessário ser familiar, vizinho ou ter qualquer 
                    vínculo com a vítima. Algumas pessoas, como médicos, professores e responsáveis por 
                    estabelecimentos de ensino e saúde, têm o dever legal de comunicar casos suspeitos.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg shadow-sm">
                <AccordionTrigger className="px-4">
                  O que é considerado violação de direitos?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-gray-700 mb-4">
                    São consideradas violações de direitos quaisquer ações ou omissões que prejudiquem o pleno 
                    desenvolvimento de crianças e adolescentes ou desrespeitem os direitos garantidos pela 
                    lei, como:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Violência física, psicológica ou sexual</li>
                    <li>Negligência e abandono</li>
                    <li>Trabalho infantil</li>
                    <li>Negação do direito à educação, saúde e alimentação</li>
                    <li>Exploração sexual ou pornografia infantil</li>
                    <li>Discriminação por qualquer motivo</li>
                    <li>Submissão a situações degradantes ou cruéis</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 gradient-bg text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading-2 mb-6">Sua Atitude Pode Salvar Vidas</h2>
            <p className="text-xl mb-8">
              Não se omita diante de situações de violação de direitos. Uma denúncia feita com 
              responsabilidade pode interromper ciclos de violência e mudar o futuro de uma criança.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/onde-buscar-ajuda">
                  Onde Buscar Ajuda
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="tel:100">
                  Disque 100
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComoAgirPage;
