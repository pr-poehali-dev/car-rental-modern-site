import Icon from "@/components/ui/icon";

const terms = [
  {
    icon: "FileText",
    title: "Документы",
    desc: "Паспорт РФ и водительское удостоверение. Возраст от 21 года. Стаж вождения от 2 лет.",
  },
  {
    icon: "CreditCard",
    title: "Оплата",
    desc: "Наличные, банковские карты, безналичный расчёт для юрлиц. Залог возвращается при сдаче авто.",
  },
  {
    icon: "Shield",
    title: "Страховка",
    desc: "КАСКО и ОСАГО включены в стоимость. Дополнительное покрытие по запросу.",
  },
  {
    icon: "Clock",
    title: "Сроки аренды",
    desc: "От 1 суток. При аренде от 7 дней — скидка 10%. При аренде от 30 дней — скидка 20%.",
  },
  {
    icon: "MapPin",
    title: "Подача авто",
    desc: "Бесплатная подача в пределах МКАД. За МКАД — 50 ₽/км. Подача в аэропорт — от 1 500 ₽.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    desc: "Круглосуточная техническая поддержка и помощь на дороге. Подменный автомобиль при поломке.",
  },
];

const Terms = () => {
  return (
    <section id="terms" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Прозрачные условия
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Условия аренды
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {terms.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={item.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terms;
