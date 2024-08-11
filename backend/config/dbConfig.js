import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });
import pg from "pg";
const { Pool } = pg;
import {
  createPersonTableQuery,
  createHealthCardInfoTableQuery,
  createContactInfoTableQuery,
  createMedicalHistoryTableQuery,
  createPatientVisitInfoTableQuery,
} from "../queries/initQueries.js";

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;
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
    const res = await client.query("SELECT version()");
    console.log(res.rows[0].version);
  } catch (err) {
    console.log("Database Error", err);
  } finally {
    client.release();
  }
};

export const initDBTables = async () => {
  const client = await pool.connect();
  try {
    let res = await client.query(createPersonTableQuery);
    res = await client.query(createHealthCardInfoTableQuery);
    res = await client.query(createContactInfoTableQuery);
    res = await client.query(createMedicalHistoryTableQuery);
    res = await client.query(createPatientVisitInfoTableQuery);
  } catch (err) {
    console.log("Database Error", err);
  } finally {
    client.release();
  }
};
