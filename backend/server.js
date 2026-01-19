const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

const TMDB_BASE = "https://api.themoviedb.org/3";

app.get("/movies", async (req, res) => {
  const { q, page = 1 } = req.query;

  try {
    const response = await axios.get(
      `${TMDB_BASE}/search/movie?query=${q}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }
    );

    res.json(response.data.results);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/books", async (req, res) => {
  const { q, page = 1 } = req.query;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${q}&startIndex=${(page - 1) * 10}`
    );

    res.json(response.data.items || []);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(5000, () =>
  console.log("Backend running on http://localhost:5000")
);
