let Jsonfile = require("./car-list.json");
let marcas = JSON.stringify(Jsonfile);
let teste = [];
teste = JSON.parse(marcas);

for (let i = 0; i < teste.length; i++) {
  console.log(teste[i].brand + ":" + teste[i].models.length);
}
/*
for (let i = 0; i < teste.length; i++) {
  if (teste[i].brand === "Hummer") {
    console.log(teste[i].models);
  }
}
*/
