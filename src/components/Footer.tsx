
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">GI</span>
              </div>
              <span className="font-montserrat font-bold text-lg text-primary">
                Guardiões da Infância
              </span>
            </Link>
            <p className="text-gray-600 text-sm mt-2">
              Informação e apoio para proteção de crianças e adolescentes.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-gray-800 mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-600 hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/onde-buscar-ajuda" className="text-gray-600 hover:text-primary transition-colors">
                  Onde Buscar Ajuda
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="text-gray-600 hover:text-primary transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link to="/como-agir" className="text-gray-600 hover:text-primary transition-colors">
                  Como Agir
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-gray-800 mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.gov.br/mdh/pt-br/assuntos/noticias/2020-2/maio/ministerio-divulga-canais-de-atendimento-para-denuncias-de-violacoes-de-direitos-de-criancas-e-adolescentes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Disque 100
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Portal de Denúncias
                </a>
              </li>
              <li>
                <a 
                  href="https://www.unicef.org/brazil/comunicados-de-imprensa/em-nota-publica-unicef-reforca-importancia-dos-conselhos-tutelares" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  UNICEF Brasil
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gov.br/mdh/pt-br/navegue-por-temas/crianca-e-adolescente" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Ministério dos Direitos Humanos
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-gray-800 mb-4">Contatos de Emergência</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="font-semibold mr-2">Disque 100:</span>
                <span className="text-gray-600">Direitos Humanos</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Disque 190:</span>
                <span className="text-gray-600">Polícia Militar</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Disque 180:</span>
                <span className="text-gray-600">Violência contra a Mulher</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Disque 181:</span>
                <span className="text-gray-600">Denúncias Anônimas</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Guardiões da Infância. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                Desenvolvido para proteção e informação da sociedade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
