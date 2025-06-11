import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-cream-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Coffee" size={32} className="text-coffee-500" />
            <h1 className="text-2xl font-playfair font-bold text-coffee-500">
              Bean & Brew
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-coffee-600 hover:text-orange-accent transition-colors font-inter"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-coffee-600 hover:text-orange-accent transition-colors font-inter"
            >
              О нас
            </a>
            <a
              href="#menu"
              className="text-coffee-600 hover:text-orange-accent transition-colors font-inter"
            >
              Меню
            </a>
            <a
              href="#contact"
              className="text-coffee-600 hover:text-orange-accent transition-colors font-inter"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/order">
              <Button
                variant="outline"
                className="border-coffee-500 text-coffee-500 hover:bg-coffee-500 hover:text-white"
              >
                Заказать
              </Button>
            </Link>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
