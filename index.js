// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// const firstUser = {};
// const secondUser = {};


// colorMonica = ['Yellow, Pink, White, Purple'];
// colorWendy = ['Blue, Black, Grey'];

// favRestoMonica = ['Bento, Sushi, Pancake, Eggy, Tempura, Bento, Eggy, Padang, Tteok, Sushi, Sushi'];
// favRestoWendy = ['Tempura, Bento, Sushi, Pancake, Padang, Katsu, Geprek, Pancake, Eggy'];

educationMonica = {
 SD : 'name: SD 01, city: Jakarta, graduate: 2016',
 SMP : 'name: SMP 02, city: Jakarta, graduate: 2019',
 SMA : 'name: SMA 03, city: Tangerang'
};

educationWendy = {
    SD : 'name: SD 02, city: Jakarta, graduate: 2010',
    SMP : 'name: SMP 03, city: Bogor, graduate: 2013',
    SMA : 'name: SMA 01, city: Surabaya, graduate: 2016',
    UNIV : 'name: Universitas Maju, city: Tangerang'
   };

let warnaMonica = new Set();
warnaMonica.add("Yellow");
warnaMonica.add("Pink");
warnaMonica.add("White");
warnaMonica.add("Purple");
   
let warnawendy = new Set();
warnawendy.add("Blue");
warnawendy.add("Black");
warnawendy.add("Grey");

let favRestoMonica = new Set();
favRestoMonica.add("Bento");
favRestoMonica.add("Sushi");
favRestoMonica.add("Pancake");
favRestoMonica.add("Eggy");
favRestoMonica.add("Tempura");
favRestoMonica.add("Bento");
favRestoMonica.add("Eggy");
favRestoMonica.add("Padang");
favRestoMonica.add("Tteok");
favRestoMonica.add("Sushi");
favRestoMonica.add("Sushi");

let favRestoWendy = new Set();
favRestoWendy.add("Tempura");
favRestoWendy.add("Bento");
favRestoWendy.add("Sushi");
favRestoWendy.add("Pancake");
favRestoWendy.add("Padang");
favRestoWendy.add("Katsu");
favRestoWendy.add("Geprek");
favRestoWendy.add("Pancake");
favRestoWendy.add("Eggy");

firstUser = {
    name : 'Monica',
    gender : 'Female',
    age : 17,
    email : 'monica@dingdong.com',
    favoriteColor : [...warnaMonica],
    isHavePet : 'Yes',
    education : [educationMonica.SD, educationMonica.SMP, educationMonica.SMA],
    favoriteRestaurant : [...favRestoMonica]
};

secondUser = {
    name : 'Wendy',
    gender : 'Male',
    age : 23,
    email : 'wendy@dingdong.com@dingdong.com',
    favoriteColor : [...warnawendy],
    isHavePet : 'Yes',
    education : [educationWendy.SD, educationWendy.SMP, educationWendy.SMA, educationWendy.UNIV],
    favoriteRestaurant : [...favRestoWendy]
};

// // TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};

// console.log(users);