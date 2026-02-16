export interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  year: number;
  transmission: string;
  fuel: string;
  seats: number;
  engine: string;
}

const IMG1 = "https://cdn.poehali.dev/projects/7509e7c4-cce0-433e-a98b-c4c0c43a273b/files/6e5107c5-9106-4431-826c-0e993106483b.jpg";
const IMG2 = "https://cdn.poehali.dev/projects/7509e7c4-cce0-433e-a98b-c4c0c43a273b/files/bf5b75b7-d98e-458a-bda6-76cd00e4dfe1.jpg";
const IMG3 = "https://cdn.poehali.dev/projects/7509e7c4-cce0-433e-a98b-c4c0c43a273b/files/245ea068-09be-4f45-86c5-3023b830f12a.jpg";

const placeholderImages = [IMG1, IMG2, IMG3];

export const cars: Car[] = [
  { id: 1, name: "Mercedes-Benz S-Class", category: "Премиум", price: 15000, image: IMG1, year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "3.0L V6" },
  { id: 2, name: "BMW X5", category: "Внедорожник", price: 12000, image: IMG2, year: 2024, transmission: "Автомат", fuel: "Дизель", seats: 5, engine: "3.0L I6" },
  { id: 3, name: "Porsche 911", category: "Спорт", price: 25000, image: IMG3, year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 2, engine: "3.0L H6" },
  { id: 4, name: "Audi A8", category: "Премиум", price: 14000, image: placeholderImages[0], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "3.0L V6" },
  { id: 5, name: "BMW 7 Series", category: "Премиум", price: 14500, image: placeholderImages[1], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "3.0L I6" },
  { id: 6, name: "Range Rover", category: "Внедорожник", price: 18000, image: placeholderImages[2], year: 2024, transmission: "Автомат", fuel: "Дизель", seats: 5, engine: "3.0L V6" },
  { id: 7, name: "Mercedes-Benz G-Class", category: "Внедорожник", price: 22000, image: placeholderImages[0], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "4.0L V8" },
  { id: 8, name: "Lamborghini Huracán", category: "Спорт", price: 45000, image: placeholderImages[2], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 2, engine: "5.2L V10" },
  { id: 9, name: "Toyota Camry", category: "Бизнес", price: 5000, image: placeholderImages[1], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "2.5L I4" },
  { id: 10, name: "Kia K5", category: "Бизнес", price: 4500, image: placeholderImages[0], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "2.5L I4" },
  { id: 11, name: "Genesis G80", category: "Премиум", price: 10000, image: placeholderImages[1], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "2.5L I4T" },
  { id: 12, name: "Volkswagen Touareg", category: "Внедорожник", price: 9000, image: placeholderImages[2], year: 2024, transmission: "Автомат", fuel: "Дизель", seats: 5, engine: "3.0L V6" },
  { id: 13, name: "Audi Q7", category: "Внедорожник", price: 11000, image: placeholderImages[0], year: 2024, transmission: "Автомат", fuel: "Дизель", seats: 7, engine: "3.0L V6" },
  { id: 14, name: "BMW M4", category: "Спорт", price: 18000, image: placeholderImages[1], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 4, engine: "3.0L I6T" },
  { id: 15, name: "Mercedes-AMG GT", category: "Спорт", price: 30000, image: placeholderImages[2], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 2, engine: "4.0L V8" },
  { id: 16, name: "Lexus LX", category: "Внедорожник", price: 13000, image: placeholderImages[0], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 7, engine: "3.5L V6T" },
  { id: 17, name: "Cadillac Escalade", category: "Внедорожник", price: 16000, image: placeholderImages[1], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 7, engine: "6.2L V8" },
  { id: 18, name: "Ferrari Roma", category: "Спорт", price: 50000, image: placeholderImages[2], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 2, engine: "3.9L V8T" },
  { id: 19, name: "Bentley Continental GT", category: "Премиум", price: 40000, image: placeholderImages[0], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 4, engine: "6.0L W12" },
  { id: 20, name: "Rolls-Royce Ghost", category: "Премиум", price: 55000, image: placeholderImages[1], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "6.75L V12" },
  { id: 21, name: "Hyundai Sonata", category: "Бизнес", price: 4000, image: placeholderImages[2], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "2.5L I4" },
  { id: 22, name: "Mazda CX-9", category: "Внедорожник", price: 6500, image: placeholderImages[0], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 7, engine: "2.5L I4T" },
  { id: 23, name: "Audi RS6", category: "Спорт", price: 22000, image: placeholderImages[1], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "4.0L V8T" },
  { id: 24, name: "Mercedes-Benz E-Class", category: "Бизнес", price: 8000, image: placeholderImages[2], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "2.0L I4T" },
  { id: 25, name: "BMW X7", category: "Внедорожник", price: 15000, image: placeholderImages[0], year: 2024, transmission: "Автомат", fuel: "Дизель", seats: 7, engine: "3.0L I6" },
  { id: 26, name: "Porsche Cayenne", category: "Внедорожник", price: 17000, image: placeholderImages[1], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "3.0L V6T" },
  { id: 27, name: "Maserati Ghibli", category: "Премиум", price: 20000, image: placeholderImages[2], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "3.0L V6T" },
  { id: 28, name: "Genesis GV80", category: "Внедорожник", price: 9500, image: placeholderImages[0], year: 2024, transmission: "Автомат", fuel: "Дизель", seats: 5, engine: "3.0L I6" },
  { id: 29, name: "Lexus LS", category: "Премиум", price: 13000, image: placeholderImages[1], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 5, engine: "3.5L V6T" },
  { id: 30, name: "Jaguar F-Type", category: "Спорт", price: 19000, image: placeholderImages[2], year: 2024, transmission: "Автомат", fuel: "Бензин", seats: 2, engine: "5.0L V8" },
];

export const categories = ["Все", "Премиум", "Внедорожник", "Спорт", "Бизнес"];

export default cars;
