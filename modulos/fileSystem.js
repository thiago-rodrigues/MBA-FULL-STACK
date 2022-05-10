import { promises as fs } from "fs";

async function init() {
  try {
    await fs.writeFile("teste.txt", "bla bla bla");
    await fs.appendFile("teste.txt", "\nteste apend file");
    const data = await fs.readFile("teste.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function writeReadJson() {
  try {
    const arrayCarros = ["Gol", "HB20", "Palio", "Fusca"];
    const obj = {
      carros: arrayCarros,
    };
    await fs.writeFile("teste.json", JSON.stringify(obj));

    const data = JSON.parse(await fs.readFile("teste.json"));
    data.carros.push("Sandero");

    await fs.writeFile("teste.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

export default { init, writeReadJson };
