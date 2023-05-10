import { faker } from '@faker-js/faker/locale/pl';


export const companyData = [];

for (let i = 0; i < 1000; i++) {
  const companyName = faker.company.name('pl');
  const city = faker.address.city('pl');
  const province = faker.address.state('pl');
  const professions = faker.commerce.department('pl');
  const number = faker.phone.number('pl');
  const about = faker.lorem.sentences(10);
  const logo = faker.internet.color();

  companyData.push({
    id: i + 1,
    name: companyName,
    cities: city,
    province: province,
    professions: professions,
    number: number,
    about: about,
    logo: logo
  });
}

