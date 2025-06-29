
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 bg-gray-50">
      <div className="text-center px-4">
        <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-4xl font-bold">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Página não encontrada</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi removida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/">
              Voltar para Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link to="/onde-buscar-ajuda">
              Buscar Ajuda
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
