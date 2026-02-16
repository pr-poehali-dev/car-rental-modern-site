import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/projects/7509e7c4-cce0-433e-a98b-c4c0c43a273b/files/6e5107c5-9106-4431-826c-0e993106483b.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <div className="animate-fade-in-up">
          <p className="text-primary font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-6">
            Премиальный автопрокат
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Аренда авто
            <br />
            <span className="text-primary">в Москве</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Более 30 автомобилей премиум-класса. Быстрое оформление, прозрачные
            условия, подача в любую точку Москвы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 h-14 text-base"
              asChild
            >
              <a href="#catalog">
                Выбрать авто
                <Icon name="ArrowRight" size={18} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary hover:text-primary font-heading font-semibold px-8 h-14 text-base"
              asChild
            >
              <a href="#terms">
                Условия аренды
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
          {[
            { value: "30+", label: "Автомобилей" },
            { value: "24/7", label: "Поддержка" },
            { value: "1ч", label: "Оформление" },
            { value: "5★", label: "Рейтинг" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading font-bold text-2xl md:text-3xl text-primary">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
