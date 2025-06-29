import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const routes = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Onde Buscar Ajuda", path: "/onde-buscar-ajuda" },
    { name: "Depoimentos", path: "/depoimentos" },
    { name: "Como Agir", path: "/como-agir" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">GI</span>
            </div>
            <span className="font-montserrat font-bold text-lg md:text-xl text-primary">
              Guardiões da Infância
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {route.name}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/onde-buscar-ajuda">Pedir Ajuda</Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className="px-2 py-2 font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={closeMenu}
                >
                  {route.name}
                </Link>
              ))}
              <Button asChild className="mt-2 w-full bg-primary hover:bg-primary/90">
                <Link to="/onde-buscar-ajuda" onClick={closeMenu}>
                  Pedir Ajuda
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
