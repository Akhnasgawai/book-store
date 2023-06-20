// let books = [
//     {
//         "title": 'Five Points at Someone',
//         "author": 'Chetan Bhagat',
//         "price": 350,
//     },
//     {
//         "title": 'The Death of Gary',
//         "author": 'Sydney Sheldon',
//         "price": 699,
//     },
//     {
//         "title": 'Mey Anmol',
//         "author": 'Humaira Ahmed',
//         "price": 560,
//     },
//     {
//         "title": 'The fault in our stars',
//         "author": 'John Green',
//         "price": 730,
//     },
//     {
//         "title": 'A Game of Thrones',
//         "author": 'George R.R Martin',
//         "price": 430,
//     },
//     {
//         "title": 'It Ends With Us',
//         "author": 'Colleen Hoover',
//         "price": 330,
//     },
// ];

// let books = [];

const storedBooks = localStorage.getItem('books');
const books = storedBooks ? JSON.parse(storedBooks) : [];

export default books;