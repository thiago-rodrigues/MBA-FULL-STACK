let Jsonfile = require("./pedidos.json");
let pedidos = JSON.stringify(Jsonfile);
let teste = [];
teste = JSON.parse(pedidos);

for (let i = 0; i < teste.pedidos.length; i++) {
  if (teste.pedidos[i].id === 216) {
    console.log(teste.pedidos[i]);
  } else {
  }
}

let total = 0;
for (let i = 0; i < teste.pedidos.length; i++) {
  /*TOTAL POR CLIENTE */
  /*
  if (
    teste.pedidos[i].cliente === "Rosaura Azenha" &&
    teste.pedidos[i].entregue === true
  ) {
    total = total + teste.pedidos[i].valor;
  } else {
  }
   */

  if (
    teste.pedidos[i].produto === "Pizza Atum" &&
    teste.pedidos[i].entregue === true
  ) {
    total = total + teste.pedidos[i].valor;
  } else {
  }
}
console.log(total);

/*
for (let i = 0; i < teste.length; i++) {
  if (teste[i].brand === "Hummer") {
    console.log(teste[i].models);
  }
}
*/
/*
for (let i = 0; i < teste.length; i++) {
  console.log(teste[i].brand + ":" + teste[i].models.length);
}
*/
