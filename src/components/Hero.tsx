import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-cream-100 to-cream-200 py-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-coffee-500 mb-6 leading-tight">
              Идеальный кофе для идеального дня
            </h1>
            <p className="text-xl text-coffee-400 mb-8 font-inter max-w-md">
              Мы создаём неповторимые вкусы из лучших зёрен мира. Каждая чашка —
              это путешествие в мир аромата и уюта.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-accent hover:bg-orange-accent/90 text-white px-8 py-3 text-lg"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать сейчас
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-coffee-500 text-coffee-500 hover:bg-coffee-500 hover:text-white px-8 py-3 text-lg"
              >
                <Icon name="MapPin" size={20} className="mr-2" />
                Найти кофейню
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop&crop=center"
                alt="Чашка кофе"
                className="w-96 h-96 object-cover rounded-full shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-accent text-white p-4 rounded-full shadow-lg">
                <Icon name="Heart" size={32} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
