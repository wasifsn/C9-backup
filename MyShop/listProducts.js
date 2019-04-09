var faker = require("faker");


var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random cont
var randomprod = faker.commerce.product();
var randomprice = faker.helpers.price();

// console.log(randomName);

console.log("=================================");
console.log("             welcome             ");
console.log("=================================");


for(var i = 1; i <= 10 ; i++);
{
console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));


// console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));
// console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));
// console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));
// console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));
// console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));
// console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));
// console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));
// console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));
// console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));
};

    















