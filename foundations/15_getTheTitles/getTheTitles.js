const books = [
  {
    title: 'Harry Potter',
    author: 'Mace Windu'
  },
  {
    title: 'Lord of the Rings',
    author: 'Yoda'
  },
  {
    title: 'A Song of Fire and Ice',
    author: 'Anakin Skywalker'
  },
  {
    title: 'House of the Dragon',
    author: 'Ashoka Tano'
  }
];

const getTheTitles = function(books) {
    return books.map(book => book.title);
};




// Do not edit below this line
module.exports = getTheTitles;
