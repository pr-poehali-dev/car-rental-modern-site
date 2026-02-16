import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Contacts = () => {
  return (
    <section id="contacts" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Свяжитесь с нами
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Контакты
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm mb-1">Телефон</p>
                    <a
                      href="tel:+74951234567"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm mb-1">Email</p>
                    <a
                      href="mailto:info@drive-moscow.ru"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      info@drive-moscow.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm mb-1">Адрес</p>
                    <p className="text-muted-foreground text-sm">
                      г. Москва, ул. Тверская, д. 12
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm mb-1">Режим работы</p>
                    <p className="text-muted-foreground text-sm">
                      Ежедневно, 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
                asChild
              >
                <a href="https://wa.me/74951234567" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </a>
              </Button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
                asChild
              >
                <a href="https://t.me/drivemoscow" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={18} />
                  Telegram
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border h-[350px] lg:h-auto">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A44c02b5c0a77eee3e3d7ab0c4e36b3d8c2d8fcb8e3f0b4e3d5c8a5b2e7f9d1a&amp;source=constructor&ll=37.607510%2C55.762823&z=15&pt=37.607510%2C55.762823%2Cpm2rdm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              title="Карта расположения DRIVE Moscow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
