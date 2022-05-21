import express from "express";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  throw new Error("Error message teste!");
});

/*Tratamento de Erro Async */
app.post("/", async (req, res, next) => {
  try {
    throw new Error("Erro Mensage Asyc");
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log("Error 1");
  next(err);
});

app.use((err, req, res, next) => {
  console.log("Error 2");
  res.status(500).send("Ocorreu um erro, tenta novamente mais tarde 2");
});

app.listen(3000, () => {
  console.log("API Started!!");
});
