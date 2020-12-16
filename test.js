const fs = require('fs');
const axios = require('axios').default;
// files
// const p = require('./provinces.json'); // 34
// const c = require('./cities.json'); // 444

let provinces = [];
let cities = [];

async function main() {
  try {
    const res = await axios.get(
      'https://dev.farizdotid.com/api/daerahindonesia/provinsi',
    );

    provinces = res.data.provinsi;
    console.log(provinces);

    // loop provinces
    for (let i = 0; i < provinces.length; i++) {
      const res2 = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinces[i].id}`,
      );

      cities = [...cities, ...res2.data.kota_kabupaten];
      console.log(`Loop #${i} for ${provinces[i].nama}: `);

      if (i === provinces.length - 1 && res2) {
        fs.writeFileSync('cities3.json', JSON.stringify(cities));
      }
    }
  } catch (err) {
    console.error(err);
  }
}

main();

// console.log(c.filter((el) => el.id === 6471));
