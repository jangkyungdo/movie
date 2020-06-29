const express = require("express");
const app = express();
const cors = require("cors");
const parser = require("body-parser");
const port = process.env.PORT || 3000;
const axios = require("axios");

const ID_KEY = "Eac0niRjiLQb_S68iAy_";
const SECRET_KEY = "141eefzBQz";

app.use(cors());

app.use(parser.json());

app.use("/search", (req, res) => {
  console.log("server-search");
  const search = req.query.query;

  axios
    .get("https://openapi.naver.com/v1/search/movie.json", {
      params: {
        query: search,
        display: 20,
      },
      headers: {
        "X-Naver-Client-Id": ID_KEY,
        "X-Naver-Client-Secret": SECRET_KEY,
      },
    })
    .then(function (response) {
      console.log(response.data.items);
      const items = response.data.items;
      res.send({ items });
    })
    .catch(() => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
