import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Leaf",
      title: "100% Органический",
      description: "Используем только органические зёрна высшего качества",
    },
    {
      icon: "Award",
      title: "Премиум качество",
      description: "Каждая партия проходит строгий контроль качества",
    },
    {
      icon: "Users",
      title: "Семейная традиция",
      description: "Более 20 лет опыта в искусстве приготовления кофе",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-coffee-500 mb-4">
            О нашей кофейне
          </h2>
          <p className="text-xl text-coffee-400 font-inter max-w-2xl mx-auto">
            Мы создаём не просто кофе — мы создаём моменты радости и уюта для
            каждого гостя
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&crop=center"
              alt="Интерьер кофейни"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-playfair font-bold text-coffee-500 mb-6">
              Наша история
            </h3>
            <p className="text-coffee-400 font-inter text-lg leading-relaxed mb-6">
              Bean & Brew родилась из страсти к идеальному кофе. Начав как
              небольшая семейная обжарочная мастерская, мы выросли в уютную
              кофейню, где каждый гость становится частью нашей кофейной семьи.
            </p>
            <p className="text-coffee-400 font-inter text-lg leading-relaxed">
              Мы тщательно отбираем зёрна у лучших фермеров мира и обжариваем их
              по традиционным рецептам, создавая неповторимые вкусовые букеты.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-cream-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-accent text-white rounded-full mb-4">
                <Icon name={feature.icon as any} size={32} />
              </div>
              <h4 className="text-xl font-playfair font-bold text-coffee-500 mb-3">
                {feature.title}
              </h4>
              <p className="text-coffee-400 font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
