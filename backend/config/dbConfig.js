import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });
import pg from 'pg'
const { Pool } = pg

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } =
  process.env;
PGPASSWORD = decodeURIComponent(PGPASSWORD);

export const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: {
    require: true,
  },
});

export const getPgVersion = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT version()");
    console.log(result.rows[0].version);
  } catch (err) {
    console.log("Database Error", err);
  } finally {
    client.release();
  }
};
