import { useState } from "react";
import { cars, categories } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered =
    activeCategory === "Все"
      ? cars
      : cars.filter((c) => c.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);

  return (
    <section id="catalog" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Автопарк
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Каталог автомобилей
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(9);
              }}
              className={
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((car) => (
            <div
              key={car.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {car.category}
                </Badge>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg mb-3">
                  {car.name}
                </h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    {car.year}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Cog" size={14} />
                    {car.transmission}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Fuel" size={14} />
                    {car.fuel}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Users" size={14} />
                    {car.seats} мест
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <span className="font-heading font-bold text-xl text-primary">
                      {car.price.toLocaleString("ru-RU")} ₽
                    </span>
                    <span className="text-muted-foreground text-sm"> / сутки</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Забронировать
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVisibleCount((p) => p + 9)}
              className="border-border hover:border-primary hover:text-primary"
            >
              Показать ещё
              <Icon name="ChevronDown" size={18} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
