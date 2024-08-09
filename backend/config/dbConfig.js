import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config({ path: './backend/.env' });

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT, ENDPOINT_ID } = process.env;
PGPASSWORD = decodeURIComponent(PGPASSWORD);

console.log(PGHOST)

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

export const connectDB = async () => {
  try {
    const result = await sql`select version()`;
    console.log(result[0].version);
  } catch (err) {
    console.log("Database Error", err);
  }
};

