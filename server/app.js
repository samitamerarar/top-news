const express = require("express");
const request = require("request");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(__dirname + "/../client/build"));
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/../client/build/index.html");
});

const API_KEY = "3b988ce4f31c473fae5bfd8fc5b274a5";
var country = "ca";
var category = "general";
var page = "1";
app.get("hi", (req, res) => {
  console.log(`Sent 5passwords`);
});
app.get("/TopHeadlines", (req, res) => {
  country = req.query.country;
  category = req.query.category;
  page = req.query.page;
  request(
    `
    https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=20&page=${page}&apiKey=${API_KEY}`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      } else {
        res.send("error");
      }
    }
  );
});

var language = "en";
var activePage = "1";
var keyword = "";
var date = "";

app.get("/SearchResults", (req, res) => {
  keyword = req.query.keyword;
  language = req.query.language;
  date = req.query.date;
  activePage = req.query.activePage;
  request(
    `
    https://newsapi.org/v2/everything?q=${keyword}&language=${language}&from=${date}&sortBy=publishedAt&pageSize=20&page=${activePage}&apiKey=${API_KEY}`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      } else {
        res.send("error");
      }
    }
  );
});

app.listen(port, () => console.log(`Server started on port ${port}`));
