import { faker } from '@faker-js/faker/locale/pl';

class Company {
  constructor(id) {
    this.id = id;
    this.name = faker.company.name();
    this.cities = faker.address.city({maks: 5});
    this.province = faker.address.state();
    this.professions = faker.commerce.department();
    this.number = faker.phone.number();
    this.aboutShort = faker.lorem.sentences(10);
    this.aboutLong = faker.lorem.sentences(40);
    this.logo = [
      "https://picsum.photos/800/600?random=1",
      "https://picsum.photos/800/600?random=2",
      "https://picsum.photos/800/600?random=3",
      "https://picsum.photos/800/600?random=4",
      "https://picsum.photos/800/600?random=5"
    ];
    this.rating = faker.datatype.number({ min: 1, max: 5 }).toString();
  }
}

class Comment {
  constructor() {
    this.commentName = faker.name.firstName();
    this.comment = faker.lorem.sentences(5);
    this.rating = faker.datatype.number({ min: 1, max: 5 }).toString();
  }
}

class Province {
  constructor(id, name, cities) {
    this.id = id;
    this.name = name;
    this.cities = cities;
  }
}

class Profession {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const companyData = [];
for (let i = 0; i < 10; i++) {
  companyData.push(new Company(i + 1));
}

const comments = [];
for (let i = 0; i < 20; i++) {
  comments.push(new Comment());
}

const provinces = [
  new Province(1, 'dolnośląskie', ['Wrocław', 'Wałbrzych', 'Legnica', 'Głogów', 'Jelenia Góra']),
  new Province(2, 'kujawsko-pomorskie', ['Bydgoszcz', 'Toruń', 'Włocławek', 'Grudziądz', 'Inowrocław']),
  new Province(3, 'lubelskie', ['Lublin', 'Chełm', 'Zamość', 'Biała Podlaska', 'Puławy']),
  new Province(4, 'lubuskie', ['Gorzów Wielkopolski', 'Zielona Góra', 'Nowa Sól', 'Świebodzin', 'Kostrzyn nad Odrą']),
  new Province(5, 'łódzkie', ['Łódź', 'Piotrków Trybunalski', 'Skierniewice', 'Sieradz', 'Zgierz']),
  new Province(6, 'małopolskie', ['Kraków', 'Tarnów', 'Nowy Sącz', 'Oświęcim', 'Gorlice']),
  new Province(7, 'mazowieckie', ['Warszawa', 'Radom', 'Płock', 'Siedlce']),
  new Province(8, 'opolskie', ['Opole', 'Kędzierzyn-Koźle', 'Nysa', 'Brzeg', 'Kluczbork']),
  new Province(9, 'podkarpackie', ['Rzeszów', 'Przemyśl', 'Tarnobrzeg', 'Mielec', 'Krosno']),
  new Province(10, 'podlaskie', ['Białystok', 'Suwałki', 'Łomża']),
  new Province(11, 'pomorskie', ['Gdańsk', 'Gdynia', 'Sopot', 'Tczew', 'Wejherowo']),
  new Province(12, 'śląskie', ['Katowice', 'Gliwice', 'Zabrze', 'Bytom', 'Ruda Śląska']),
  new Province(13, 'świętokrzyskie', ['Kielce', 'Ostrowiec Świętokrzyski', 'Starachowice', 'Sandomierz', 'Skarżysko-Kamienna']),
  new Province(14, 'warmińsko-mazurskie', ['Olsztyn', 'Elbląg', 'Ełk', 'Ostróda', 'Szczytno']),
  new Province(15, 'wielkopolskie', ['Poznań', 'Kalisz', 'Konin', 'Ostrów Wielkopolski', 'Gniezno']),
  new Province(16, 'zachodniopomorskie', ['Szczecin', 'Koszalin', 'Stargard', 'Kołobrzeg', 'Police']),
];

const professions = [
  new Profession(1, "Architekt"),
  new Profession(2, "Inżynier budownictwa"),
  new Profession(3, "Projektant konstrukcji"),
  new Profession(4, "Murarz"),
  new Profession(5, "Elektryk budowlany"),
  new Profession(6, "Hydraulik"),
  new Profession(7, "Cieśla"),
  new Profession(8, "Wykończenie"),
  new Profession(9, "Tynkarz"),
  new Profession(10, "Glazurnik"),
];

export { companyData, comments, provinces, professions };
