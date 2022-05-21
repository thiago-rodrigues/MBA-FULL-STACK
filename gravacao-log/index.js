import express from "express";
import winston from "winston";

const app = express();
app.use(express.json());

const { combine, printf, label, timestamp } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "my-log.log" }),
  ],
  format: combine(label({ label: "My-App" }), timestamp(), myFormat),
});

logger.error("Error Log");
logger.warn("Warn Log");
logger.info("info log");
logger.verbose("verbose log");
logger.debug("debug log");
logger.silly("silly log");
logger.log("info", "Hello with Parameter!");

app.listen(3000, () => {
  console.log("App Started!");
});
