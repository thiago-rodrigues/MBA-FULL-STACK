let Jsonfile = require("./pedidos.json");
let pedidos = JSON.stringify(Jsonfile);
let teste = [];
teste = JSON.parse(pedidos);

/*
for (let i = 0; i < teste.pedidos.length; i++) {
  if (teste.pedidos[i].id === 216) {
    console.log(teste.pedidos[i]);
  } else {
  }
}
*/

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
  /*
  if (
    teste.pedidos[i].produto === "Pizza Atum" &&
    teste.pedidos[i].entregue === true
  ) {
    total = total + teste.pedidos[i].valor;
  } else {
  }
  */
  console.log("");
}
console.log(total);

let PizzaAtum = 0;
let PizzaModa = 0;
let PizzaCalabresa = 0;
let PizzaNapolitana = 0;
let PizzaMuçarela = 0;
let PizzaFrango = 0;

for (let i = 0; i < teste.pedidos.length; i++) {
  if (teste.pedidos[i].produto === "Pizza Atum") {
    PizzaAtum += 1;
  } else if (teste.pedidos[i].produto === "Pizza a Moda") {
    PizzaModa += 1;
  } else if (teste.pedidos[i].produto === "Pizza Calabresa") {
    PizzaCalabresa += 1;
  } else if (teste.pedidos[i].produto === "Pizza Napolitana") {
    PizzaNapolitana += 1;
  } else if (teste.pedidos[i].produto === "Pizza Muçarela") {
    PizzaMuçarela += 1;
  } else if (teste.pedidos[i].produto === "Pizza Frango com Catupiry") {
    PizzaFrango += 1;
  }
}

console.log("Pizza Atum: " + PizzaAtum);
console.log("Pizza a Moda: " + PizzaModa);
console.log("Pizza Calabresa: " + PizzaCalabresa);
console.log("Pizza Napolitana: " + PizzaNapolitana);
console.log("Pizza Muçarela: " + PizzaMuçarela);
console.log("Pizza Frango Catupiry: " + PizzaFrango);
