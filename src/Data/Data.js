import { faker } from '@faker-js/faker/locale/pl'

export const companyData = []

for (let i = 0; i < 10; i++) {
  const companyName = faker.company.name()
  const city = faker.address.city({maks:5})
  const province = faker.address.state()
  const professions = faker.commerce.department()
  const number = faker.phone.number()
  const aboutShort = faker.lorem.sentences(10)
  const aboutLong = faker.lorem.sentences(40)
  const logo = `https://picsum.photos/800/600?random=${i}`
  const rating = faker.datatype
    .number({
      min: 1,
      max: 5
    })
    .toString()

  companyData.push({
    id: i + 1,
    name: companyName,
    cities: city,
    province: province,
    professions: professions,
    number: number,
    aboutShort: aboutShort,
    aboutLong: aboutLong,
    logo: logo,
    rating: rating
  })
}

export const comments = []

for (let i = 0; i < 20; i++) {
  const commentName = faker.name.firstName()
  const comment = faker.lorem.sentences(5)
  const rating = faker.datatype
    .number({
      min: 1,
      max: 5
    })
    .toString()

  comments.push({
    commentName: commentName,
    commnet: comment,
    rating: rating
  })
}

export const provinces = [
  {
    id: 1,
    name: 'dolnośląskie',
    cities: [
      'Wrocław',
      'Wałbrzych',
      'Legnica',
      'Głogów',
      'Jelenia Góra'
    ]
  },
  {
    id: 2,
    name: 'kujawsko-pomorskie',
    cities: [
      'Bydgoszcz',
      'Toruń',
      'Włocławek',
      'Grudziądz',
      'Inowrocław'
    ]
  },
  {
    id: 3,
    name: 'lubelskie',
    cities: [
      'Lublin',
      'Chełm',
      'Zamość',
      'Biała Podlaska',
      'Puławy'
    ]
  },
  {
    id: 4,
    name: 'lubuskie',
    cities: [
      'Gorzów Wielkopolski',
      'Zielona Góra',
      'Nowa Sól',
      'Świebodzin',
      'Kostrzyn nad Odrą'
    ]
  },
  {
    id: 5,
    name: 'łódzkie',
    cities: [
      'Łódź',
      'Piotrków Trybunalski',
      'Skierniewice',
      'Sieradz',
      'Zgierz'
    ]
  },
  {
    id: 6,
    name: 'małopolskie',
    cities: [
      'Kraków',
      'Tarnów',
      'Nowy Sącz',
      'Oświęcim',
      'Gorlice'
    ]
  },
  {
    id: 7,
    name: 'mazowieckie',
    cities: [
      'Warszawa',
      'Radom',
      'Płock',
      'Siedlce',
    ]
  },
  {
    id: 8,
    name: 'opolskie',
    cities: [
      'Opole',
      'Kędzierzyn-Koźle',
      'Nysa',
      'Brzeg',
      'Kluczbork'
    ]
  },
  {
    id: 9,
    name: 'podkarpackie',
    cities: [
      'Rzeszów',
      'Przemyśl',
      'Tarnobrzeg',
      'Mielec',
      'Krosno'
    ]
  },
  {
    id: 10,
    name: 'podlaskie',
    cities: ['Białystok', 'Suwałki', 'Łomża']
  },
  {
    id: 11,
    name: 'pomorskie',
    cities: [
      'Gdańsk',
      'Gdynia',
      'Sopot',
      'Tczew',
      'Wejherowo'
    ]
  },
  {
    id: 12,
    name: 'śląskie',
    cities: [
      'Katowice',
      'Gliwice',
      'Zabrze',
      'Bytom',
      'Ruda Śląska'
    ]
  },
  {
    id: 13,
    name: 'świętokrzyskie',
    cities: [
      'Kielce',
      'Ostrowiec Świętokrzyski',
      'Starachowice',
      'Sandomierz',
      'Skarżysko-Kamienna'
    ]
  },
  {
    id: 14,
    name: 'warmińsko-mazurskie',
    cities: [
      'Olsztyn',
      'Elbląg',
      'Ełk',
      'Ostróda',
      'Szczytno'
    ]
  },
  {
    id: 15,
    name: 'wielkopolskie',
    cities: [
      'Poznań',
      'Kalisz',
      'Konin',
      'Ostrów Wielkopolski',
      'Gniezno'
    ]
  },
  {
    id: 16,
    name: 'zachodniopomorskie',
    cities: [
      'Szczecin',
      'Koszalin',
      'Stargard',
      'Kołobrzeg',
      'Police'
    ]
  }
]

export const professions = [
  {
    id: 1,
    name: "Architekt",
  },
  {
    id: 2,
    name: "Inżynier budownictwa",
  },
  {
    id: 3,
    name: "Projektant konstrukcji",
  },
  {
    id: 4,
    name: "Brygadzista budowlany",
  },
  {
    id: 5,
    name: "Elektryk budowlany",
  },
  {
    id: 6,
    name: "Hydraulik",
  },
  {
    id: 7,
    name: "Cieśla",
  },
  {
    id: 8,
    name: "Wykończenie",
  },
  {
    id: 9,
    name: "Tynkarz",
  },
  {
    id: 10,
    name: "Glazurnik",
  },
];

