import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Menu = () => {
  const menuItems = [
    {
      name: "Эспрессо",
      description: "Классический итальянский эспрессо из отборных арабики",
      price: "150 ₽",
      image:
        "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=300&fit=crop&crop=center",
    },
    {
      name: "Капучино",
      description: "Идеальное сочетание эспрессо и молочной пенки",
      price: "220 ₽",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop&crop=center",
    },
    {
      name: "Латте",
      description: "Нежный кофе с большим количеством молока и лёгкой пенкой",
      price: "250 ₽",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=300&fit=crop&crop=center",
    },
    {
      name: "Американо",
      description: "Эспрессо, разбавленный горячей водой для мягкого вкуса",
      price: "180 ₽",
      image:
        "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=300&h=300&fit=crop&crop=center",
    },
    {
      name: "Раф кофе",
      description: "Кофе со сливками и ванильным сиропом",
      price: "280 ₽",
      image:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&h=300&fit=crop&crop=center",
    },
    {
      name: "Флэт уайт",
      description: "Двойной эспрессо с микропенкой из молока",
      price: "270 ₽",
      image:
        "https://images.unsplash.com/photo-1574492131513-36f82c1f21b8?w=300&h=300&fit=crop&crop=center",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-cream-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-coffee-500 mb-4">
            Наше меню
          </h2>
          <p className="text-xl text-coffee-400 font-inter max-w-2xl mx-auto">
            Откройте для себя уникальные вкусы нашего авторского меню
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-playfair font-bold text-coffee-500">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-orange-accent">
                    {item.price}
                  </span>
                </div>
                <p className="text-coffee-400 font-inter mb-4">
                  {item.description}
                </p>
                <Button className="w-full bg-coffee-500 hover:bg-coffee-600 text-white">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить в заказ
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-coffee-500 text-coffee-500 hover:bg-coffee-500 hover:text-white px-8 py-3"
          >
            <Icon name="FileText" size={20} className="mr-2" />
            Посмотреть полное меню
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
