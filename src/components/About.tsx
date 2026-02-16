import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              О компании
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              DRIVE<span className="text-primary">.</span>Moscow
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Мы — сервис премиального автопроката в Москве с 2018 года. Наш
              автопарк насчитывает более 30 автомобилей от ведущих мировых
              производителей: Mercedes-Benz, BMW, Porsche, Lamborghini,
              Rolls-Royce и других.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Наша миссия — предоставить вам автомобиль мечты с безупречным
              сервисом. Каждый автомобиль проходит регулярное ТО и всегда в
              идеальном состоянии.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "Award", value: "7 лет", label: "На рынке" },
                { icon: "Car", value: "30+", label: "Автомобилей" },
                { icon: "Users", value: "5 000+", label: "Клиентов" },
                { icon: "ThumbsUp", value: "98%", label: "Довольных" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={stat.icon}
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg">{stat.value}</p>
                    <p className="text-muted-foreground text-xs">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/7509e7c4-cce0-433e-a98b-c4c0c43a273b/files/bf5b75b7-d98e-458a-bda6-76cd00e4dfe1.jpg"
                alt="DRIVE Moscow автопарк"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-6 hidden lg:block">
              <p className="font-heading font-bold text-3xl">7+</p>
              <p className="text-sm font-medium">лет опыта</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
