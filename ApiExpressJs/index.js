import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World GET!");
});

app.post("/", (req, res) => {
  const a = 5;
  const b = 6;
  const resultado = a + b;
  res.send("Resultado: " + resultado);
});

app.listen(3000, () => {
  console.log("API Started!");
});
