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

// Фото с сайта servis-prokat.ru (прямые ссылки из sitemap)
const SOLARIS = "https://servis-prokat.ru/wp-content/uploads/2022/02/hendaj-solyaris-2018-1.jpeg";
const LOGAN = "https://servis-prokat.ru/wp-content/uploads/2022/02/f9723dc8-fb35-8150-8915-e0b6b39036c7_810_350_775_420_2_.jpeg";
const GEELY_ATLAS = "https://servis-prokat.ru/wp-content/uploads/2023/11/ac_7e289fb8c1cf0b57866bd05caa86cb5f_1650668677.webp";
const UAZ = "https://servis-prokat.ru/wp-content/uploads/2022/02/540773be-54e4-6565-8d7c-cefd90c56677_furg775_420_775_420_2_.jpeg";
const SAMOKAT = "https://servis-prokat.ru/wp-content/uploads/2024/06/e2b6469e-b5d4-4cfe-b184-860724f7865d.webp";

// Открытые фото через Wikipedia CDN
const POLO = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/VW_Polo_VI_IMG_0046.jpg/1280px-VW_Polo_VI_IMG_0046.jpg";
const KIA_RIO = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/2017_Kia_Rio_GT-Line_1.4_Front.jpg/1280px-2017_Kia_Rio_GT-Line_1.4_Front.jpg";
const FORD_FOCUS = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ford_Focus_III_Estate_%28facelift%2C_blue%29%2C_front_8.17.17.jpg/1280px-Ford_Focus_III_Estate_%28facelift%2C_blue%29%2C_front_8.17.17.jpg";
const OCTAVIA = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Skoda_Octavia_III_facelift_%2820170326%29_2.jpg/1280px-Skoda_Octavia_III_facelift_%2820170326%29_2.jpg";
const KIA_OPTIMA = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2016_Kia_Optima_%28JF%29_Si_sedan_%282018-10-09%29_01.jpg/1280px-2016_Kia_Optima_%28JF%29_Si_sedan_%282018-10-09%29_01.jpg";
const GEELY_COOL = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Geely_Coolray_IAA_2019_IMG_0469.jpg/1280px-Geely_Coolray_IAA_2019_IMG_0469.jpg";
const LARGUS = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2015_Lada_Largus_%28F90%29_Cross_wagon_%282018-10-20%29_01.jpg/1280px-2015_Lada_Largus_%28F90%29_Cross_wagon_%282018-10-20%29_01.jpg";
const GAC_M8 = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/GAC_Trumpchi_GM8_at_Shanghai_2019.jpg/1280px-GAC_Trumpchi_GM8_at_Shanghai_2019.jpg";
const JUMPER = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Citroen_Jumper_front_20100509.jpg/1280px-Citroen_Jumper_front_20100509.jpg";

export const cars: Car[] = [
  {
    id: 1,
    name: "Hyundai Solaris 2018",
    category: "Эконом",
    price: 2500,
    image: SOLARIS,
    year: 2018,
    transmission: "Автомат",
    fuel: "Бензин",
    seats: 5,
    engine: "1.6 л / 123 л.с.",
  },
  {
    id: 2,
    name: "Renault Logan АКПП",
    category: "Эконом",
    price: 2200,
    image: LOGAN,
    year: 2020,
    transmission: "Автомат",
    fuel: "Бензин",
    seats: 5,
    engine: "1.6 л / 82 л.с.",
  },
  {
    id: 3,
    name: "Volkswagen Polo МКПП",
    category: "Эконом",
    price: 2000,
    image: POLO,
    year: 2015,
    transmission: "Механика",
    fuel: "Бензин",
    seats: 5,
    engine: "1.6 л / 86 л.с.",
  },
  {
    id: 4,
    name: "Kia Rio X-Line",
    category: "Эконом",
    price: 2500,
    image: KIA_RIO,
    year: 2021,
    transmission: "Автомат",
    fuel: "Бензин",
    seats: 5,
    engine: "1.6 л / 123 л.с.",
  },
  {
    id: 5,
    name: "Ford Focus МКПП",
    category: "Эконом",
    price: 2300,
    image: FORD_FOCUS,
    year: 2018,
    transmission: "Механика",
    fuel: "Бензин",
    seats: 5,
    engine: "1.6 л / 100 л.с.",
  },
  {
    id: 6,
    name: "Skoda Octavia АКПП",
    category: "Комфорт",
    price: 3200,
    image: OCTAVIA,
    year: 2019,
    transmission: "Автомат",
    fuel: "Бензин",
    seats: 5,
    engine: "1.8 л / 152 л.с.",
  },
  {
    id: 7,
    name: "Skoda Octavia A7",
    category: "Комфорт",
    price: 3500,
    image: OCTAVIA,
    year: 2020,
    transmission: "Автомат",
    fuel: "Бензин",
    seats: 5,
    engine: "1.8 л / 180 л.с.",
  },
  {
    id: 8,
    name: "Kia Optima",
    category: "Бизнес",
    price: 3800,
    image: KIA_OPTIMA,
    year: 2020,
    transmission: "Автомат",
    fuel: "Бензин",
    seats: 5,
    engine: "2.0 л / 150 л.с.",
  },
  {
    id: 9,
    name: "Geely Atlas PRO",
    category: "Внедорожник",
    price: 4500,
    image: GEELY_ATLAS,
    year: 2023,
    transmission: "Автомат",
    fuel: "Бензин",
    seats: 5,
    engine: "2.0 л / 177 л.с.",
  },
  {
    id: 10,
    name: "Geely CoolRay SPORT",
    category: "Внедорожник",
    price: 4200,
    image: GEELY_COOL,
    year: 2024,
    transmission: "Автомат",
    fuel: "Бензин",
    seats: 5,
    engine: "1.5 л / 150 л.с.",
  },
  {
    id: 11,
    name: "UAZ Patriot МКПП",
    category: "Внедорожник",
    price: 3500,
    image: UAZ,
    year: 2021,
    transmission: "Механика",
    fuel: "Бензин",
    seats: 5,
    engine: "2.7 л / 128 л.с.",
  },
  {
    id: 12,
    name: "Lada Largus 7 мест",
    category: "Минивэн",
    price: 3000,
    image: LARGUS,
    year: 2021,
    transmission: "Механика",
    fuel: "Бензин",
    seats: 7,
    engine: "1.6 л / 105 л.с.",
  },
  {
    id: 13,
    name: "GAC M8",
    category: "Минивэн",
    price: 6000,
    image: GAC_M8,
    year: 2024,
    transmission: "Автомат",
    fuel: "Бензин",
    seats: 7,
    engine: "2.0 л / 252 л.с.",
  },
  {
    id: 14,
    name: "Citroen Jumper Фургон",
    category: "Грузовой",
    price: 4000,
    image: JUMPER,
    year: 2019,
    transmission: "Механика",
    fuel: "Дизель",
    seats: 3,
    engine: "2.2 л / 120 л.с.",
  },
  {
    id: 15,
    name: "Электросамокат Ninebot E2 Pro",
    category: "Мото",
    price: 800,
    image: SAMOKAT,
    year: 2024,
    transmission: "—",
    fuel: "Электро",
    seats: 1,
    engine: "350 Вт",
  },
];

export const categories = ["Все", "Эконом", "Комфорт", "Бизнес", "Внедорожник", "Минивэн", "Грузовой", "Мото"];

export default cars;
