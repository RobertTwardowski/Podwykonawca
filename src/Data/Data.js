import { faker } from '@faker-js/faker/locale/pl';


export const companyData = [];

for (let i = 0; i < 10000; i++) {
  const companyName = faker.company.name();
  const city = faker.address.city();
  const province = faker.address.state();
  const professions = faker.commerce.department();
  const number = faker.phone.number();
  const about = faker.lorem.sentences(10);
  const logo = faker.internet.color();
  const rating = faker.datatype.number({
    'min': 1,
    'max': 5
  }).toString();

  companyData.push({
    id: i + 1,
    name: companyName,
    cities: city,
    province: province,
    professions: professions,
    number: number,
    about: about,
    logo: logo,
    rating: rating,
  });
}

