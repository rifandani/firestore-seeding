// const c3 = require('./cities3.json');
const faker = require('faker/locale/id_ID');

async function makeRoompies(num, arr) {
  for (let i = 0; i < num; i++) {
    let roompy = {
      age: ~~(Math.random() * 54 + 17), // max age == 70, min == 17
      budget: ~~faker.commerce.price(100000, 10000000),
      createdAt: Date.now(),
      desc: faker.lorem.sentences(5),
      gender: Math.random() > 0.5 ? 'Pria' : 'Wanita',
      homePref: {
        room:
          Math.random() < 0.3
            ? 'Satu kamar'
            : Math.random() < 0.6
            ? 'Satu rumah'
            : 'Flex',
        parking: Math.random() > 0.5 ? 'Required' : 'Flex',
        wifi: Math.random() > 0.5 ? 'Required' : 'Flex',
        bathroom: Math.random() > 0.5 ? 'Dalam' : 'Flex',
      },
      isSmoker: faker.random.boolean(),
      locPref: [
        faker.address.state(),
        faker.random.boolean() && faker.address.state(),
      ],
      moveDate:
        Date.now() + 1000 * 60 * 60 * 24 * 30 * ~~(Math.random() * 11 + 1),
      name: faker.name.findName(),
      occupation: faker.name.jobTitle(),
      ownPet: faker.random.boolean(),
      phoneNumber: faker.phone.phoneNumber('08##-####-####'),
      photoURL: faker.image.imageUrl(640, 480, 'people', true, true),
      postedBy: faker.random.uuid(),
      roompiesPref: {
        gender:
          Math.random() < 0.3
            ? 'Pria'
            : Math.random() < 0.6
            ? 'Wanita'
            : 'Flex',
        ageFrom: ~~(Math.random() * 43 + 17),
        ageTo: ~~(Math.random() * 50 + 20),
        smoker: faker.random.boolean() ? 'Okay' : 'Not Okay',
        pet: faker.random.boolean() ? 'Okay' : 'Not Okay',
      },
      stayLength: ~~Math.random() * 10 + 5,
      updatedAt:
        Math.random() < 0.3
          ? Date.now() + 1000 * 60 * 60 * 24
          : Math.random() < 0.6
          ? Date.now() + 1000 * 60 * 60 * 24 * 2
          : Date.now(),
    };

    arr.push(roompy);
  }
}
// console.log(roompy);
// console.log(faker.address.city());

// console.log(c3.length); // 514
// console.log(c3[0]);
// console.log(c3.filter((el) => el.id === 6271));

module.exports = {
  makeRoompies,
};
