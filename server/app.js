const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use(cors());


app.get("/news", async (req, res) => {
  console.log("called query in server");
  await axios
    .get("http://newsapi.org/v2/everything", {
      headers: {
        "X-Api-Key": "0cc387f4b77f4ed88b4989e9d38b9c21",
      },
      params: {
        q: req.query.qry,
        sources:
          "bbc-news,the-hindu,google-news,google-news-in,the-times-of-india",
      },
    })
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/category", async (req, res) => {
  console.log("called in category in server");
  await axios
    .get("https://newsapi.org/v2/top-headlines", {
      headers: {
        "X-Api-Key": "0cc387f4b77f4ed88b4989e9d38b9c21",
      },
      params: {
        category: req.query.category,
      },
    })
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/sources", async (req, res) => {
  console.log("called in sources in server");
  await axios
    .get("https://newsapi.org/v2/top-headlines", {
      headers: {
        "X-Api-Key": "0cc387f4b77f4ed88b4989e9d38b9c21",
      },
      params: {
        sources: req.query.sources,
      },
    })
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});




app.listen(5000, () => {
  console.log("server on");
});
