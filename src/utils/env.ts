import dotenv from "dotenv";
dotenv.config();

const varAsString = (varId: string): string => {
  const varValue = process.env[varId];
  if (varValue === undefined) {
    throw new Error(`Missing environment variable: ${varId}`);
  }
  return varValue;
};

const varAsInt = (varName: string): number => {
  return parseInt(varAsString(varName), 10);
};

export default {
  database: {
    user: varAsString("DATABASE_USER"),
    host: varAsString("DATABASE_HOST"),
    name: varAsString("DATABASE_NAME"),
    password: varAsString("DATABASE_PASSWORD"),
    port: varAsInt("DATABASE_PORT"),
  },
};
