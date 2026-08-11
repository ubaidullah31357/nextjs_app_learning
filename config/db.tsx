import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Ubaid@31357",
  database: "db_hospital",
});

try {
  const connection = await db.getConnection();
  console.log("Connection established:");
  connection.release();
} catch (error) {
  console.log(error);
  process.exit(1);
}
