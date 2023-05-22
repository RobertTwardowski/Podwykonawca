import { faker } from '@faker-js/faker/locale/pl'

export const companyData = []

for (let i = 0; i < 100000; i++) {
  const companyName = faker.company.name()
  const city = faker.address.city()
  const province = faker.address.state()
  const professions = faker.commerce.department()
  const number = faker.phone.number()
  const about = faker.lorem.sentences(10)
  const logo = faker.internet.color()
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
    about: about,
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
