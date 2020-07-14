//Install library pg - npm install pg

const { Pool } = require("pg");

// {pool} {Query}

const config = {
  user: "postgres",
  host: "localhost",
  password: "",
  database: "library",
};

const pool = new Pool(config);

const getBooks = async () => {
  // console.log("Getting books");
  try {
    const res = await pool.query("select * from books");
    console.log(res.rows);
    pool.end();
  } catch (e) {
    console.log(e);
  }
};

const insertUser = async () => {
  const text = "INSERT INTO users(username, password) VALUES ($1, $2)";
  const values = ["jhon", "jhon123"];

  const res = await pool.query(text, values);
  console.log(res);
  pool.end();
};

const deleteUser = async () => {
  const text = "DELETE FROM users WHERE username = $1";
  const value = ["joe"];
  const res = await pool.query(text, value);
  console.log(res);
  pool.end();
};

const editUser = async () => {
  const text =
    "UPDATE users SET username = $1, password = $2 WHERE username = $3";
  //"UPDATE users SET username = $1 WHERE username = $2"
  //values = ['John', 'ryan']
  //Agregar Bruce y bruce123 donde el username es John
  const values = ["Bruce", "bruce123", "john"];
  const res = await pool.query(text, values);
  console.log(res);
};
// getBooks();
// insertUser();
deleteUser();
