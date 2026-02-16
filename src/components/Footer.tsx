import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-heading font-bold text-xl tracking-tight">
              DRIVE<span className="text-primary">.</span>Moscow
            </span>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Премиальный автопрокат в Москве. Широкий выбор автомобилей от
              бизнес-класса до суперкаров.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Навигация</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Каталог", href: "#catalog" },
                { label: "Условия", href: "#terms" },
                { label: "О компании", href: "#about" },
                { label: "Отзывы", href: "#reviews" },
                { label: "Контакты", href: "#contacts" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Контакты</h4>
            <div className="space-y-2">
              <a
                href="tel:+74951234567"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={14} />
                +7 (495) 123-45-67
              </a>
              <a
                href="mailto:info@drive-moscow.ru"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <Icon name="Mail" size={14} />
                info@drive-moscow.ru
              </a>
              <p className="flex items-center gap-2 text-muted-foreground text-sm">
                <Icon name="MapPin" size={14} />
                г. Москва, ул. Тверская, д. 12
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 DRIVE.Moscow. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={18} fallback="Camera" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Send" size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
