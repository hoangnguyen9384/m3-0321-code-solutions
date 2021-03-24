const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

// all numbers multiplied by 2
const map1 = numbers.map(a => a * 2);
console.log(map1);

// numbers formatted into "$0.00" strings.
const map2 = numbers.map(a => a.toFixed(2));
console.log(map2);

// all languages converted to uppercase.
const map3 = languages.map(a => a.toUpperCase());
console.log(map3);

// the first letter of each language.
const map4 = languages.map(a => a[0]);
console.log(map4);
