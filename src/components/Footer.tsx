import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-coffee-500 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Coffee" size={32} className="text-orange-accent" />
              <h3 className="text-2xl font-playfair font-bold">
                Coffito y Egorito
              </h3>
            </div>
            <p className="text-cream-200 font-inter">
              Идеальный кофе для идеального дня
            </p>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-cream-200 font-inter">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>ул. Политехническая 122</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (906) 316-50-20</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>osipovegor003@gmail.ru</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-bold mb-4">
              Часы работы
            </h4>
            <div className="space-y-2 text-cream-200 font-inter">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Пт: 7:00 - 22:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Сб-Вс: 8:00 - 23:00</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-bold mb-4">
              Следите за нами
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/beanbrew_coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-200 hover:text-orange-accent transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="https://facebook.com/beanbrewcoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-200 hover:text-orange-accent transition-colors"
              >
                <Icon name="Facebook" size={24} />
              </a>
              <a
                href="https://twitter.com/beanbrew_coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-200 hover:text-orange-accent transition-colors"
              >
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-400 pt-8 text-center">
          <p className="text-cream-200 font-inter">
            © 2025 Coffito y Egorito. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
