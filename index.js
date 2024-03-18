import axios from "axios";
import express from "express";

const APP = express();
const PORT = 3000;

const API_URL = "https://api.potterdb.com";

APP.use(express.static("public"));
APP.use(express.urlencoded({ extended: true }));

APP.get("/", (req, res) => {
  res.render("index.ejs", {
    pageTitle: "Wizarding World",
  });
});

APP.get("/books", async (req, res) => {
  const response = await axios.get(API_URL + `/v1/books/`);
  const data = response.data;

  console.log(Object.keys(data).length);

  res.render("books.ejs", {
    pageTitle: "Books",
    books: JSON.stringify(data),
  });
});

APP.get("/movies", (req, res) => {
  res.render("movies.ejs", {
    pageTitle: "Movies",
  });
});

APP.get("/potions", (req, res) => {
  res.render("potions.ejs", {
    pageTitle: "Potions",
  });
});

APP.get("/spells", (req, res) => {
  res.render("spells.ejs", {
    pageTitle: "Spells",
  });
});

APP.get("/characters", (req, res) => {
  res.render("characters.ejs", {
    pageTitle: "Characters",
  });
});
APP.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
