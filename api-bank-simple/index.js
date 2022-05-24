import express from "express";
import winston from "winston";
import accountsRouter from "./routes/accounts.js";
import { promises as fs } from "fs";

global.fileName = "accounts.json";
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "api-bank-simple" }),
  ],
  format: combine(label({ label: "api-bank-simple" }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());

app.use("/account", accountsRouter);

/*INICIA SERVIDOR CRIANDO ARQUIVO */
app.listen(3000, async () => {
  try {
    await fs.readFile("accounts.json");
    logger.info("API Started!");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    fs.writeFile("accounts.json", JSON.stringify(initialJson))
      .then(() => {
        logger.info("API Started and File Created!");
      })
      .catch((err) => {
        logger.error(err);
      });
  }
});
