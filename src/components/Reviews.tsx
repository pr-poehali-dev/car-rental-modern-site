import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Алексей Петров",
    text: "Арендовал Mercedes S-Class на свадьбу. Автомобиль был в идеальном состоянии, подали вовремя. Отличный сервис!",
    rating: 5,
    date: "Январь 2026",
  },
  {
    name: "Мария Козлова",
    text: "Регулярно беру авто для деловых поездок. Всегда чистые машины, быстрое оформление. Рекомендую!",
    rating: 5,
    date: "Декабрь 2025",
  },
  {
    name: "Дмитрий Волков",
    text: "Брал Porsche 911 на выходные. Незабываемые впечатления! Машина в отличном техническом состоянии.",
    rating: 5,
    date: "Ноябрь 2025",
  },
  {
    name: "Елена Соколова",
    text: "Очень удобный сервис. Оформление заняло 15 минут. Менеджеры вежливые и компетентные.",
    rating: 4,
    date: "Октябрь 2025",
  },
  {
    name: "Игорь Новиков",
    text: "Арендовал Range Rover для поездки за город. Всё прошло идеально. Спасибо за отличный сервис!",
    rating: 5,
    date: "Сентябрь 2025",
  },
  {
    name: "Анна Белова",
    text: "Приятные цены и широкий выбор автомобилей. Уже третий раз пользуюсь услугами DRIVE Moscow.",
    rating: 5,
    date: "Август 2025",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Нам доверяют
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Отзывы клиентов
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Icon
                    key={idx}
                    name="Star"
                    size={16}
                    className={
                      idx < review.rating
                        ? "text-primary fill-primary"
                        : "text-muted-foreground"
                    }
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                «{review.text}»
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-heading font-semibold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-heading font-medium text-sm">
                    {review.name}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
