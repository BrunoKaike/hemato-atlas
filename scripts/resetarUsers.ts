import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Resetando users");

    await Promise.all([
        db.delete(schema.userProgress),
        db.delete(schema.challengeProgress),
        db.delete(schema.userSubscription),
      ]);

    console.log("Banco de dados preenchido com sucesso");
    } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
    }
};

void main();