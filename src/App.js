import React, { Component } from "react";
import "./App.css";
import News from "./components/News";
import { newsCategoriesList } from "./constants/news-categories";
import { newsCountriesList } from "./constants/news-countries";
import { newsLanguagesList } from "./constants/news-languages";
import { Container, Dropdown, Menu, Select, Button, Input, Pagination } from "semantic-ui-react";
import dateFormat from "dateformat";
import axios from "axios";

import "fomantic-ui-css/semantic.css";

const herokuapi = "https://top-news-webapp.herokuapp.com";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalResults: "",
      articles: [],
      country: "ca",
      category: "general",
      keyword: "",
      language: "en",
      date: "",
      page: "1",
      showHeadlines: true,
      keywordTyped: "",
      dailyQuotaReached: true,
    };

    // binding for future use with child component
    this.fetchTopHeadlines = this.fetchTopHeadlines.bind(this);
    this.fetchNewsWithKeywords = this.fetchNewsWithKeywords.bind(this);
  }

  componentDidMount = () => {
    var date = new Date(new Date().setDate(new Date().getDate() - 20));
    this.setState({ date: dateFormat(date, "yyyy-mm-dd") });

    this.fetchTopHeadlines(this.state.country, this.state.category, this.state.page);
  };

  fetchTopHeadlines = (country, category, page) => {
    axios
      .get(`${herokuapi}/TopHeadlines`, {
        params: {
          country,
          category,
          page,
        },
      })
      .then((response) => {
        if (response.data !== "error") {
          this.setState({
            totalResults: response.data.totalResults,
            articles: response.data.articles,
            dailyQuotaReached: false,
          });
        } else {
          this.setState({
            dailyQuotaReached: true,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    this.setState({ showHeadlines: true });
  };

  fetchNewsWithKeywords(keyword, activePage) {
    if (keyword.length > 0) {
      axios
        .get(`${herokuapi}/SearchResults`, {
          params: {
            keyword,
            activePage,
            language: this.state.language,
            date: this.state.date,
          },
        })
        .then((response) => {
          if (response.data !== "error") {
            this.setState({
              totalResults: response.data.totalResults,
              articles: response.data.articles,
              dailyQuotaReached: false,
            });
          } else {
            this.setState({
              dailyQuotaReached: true,
            });
          }
        })
        .catch((error) => {
          console.log(error.message);
        });

      this.setState({ showHeadlines: false, keywordTyped: keyword });
    }
  }

  changePage = (e, data) => {
    e.persist();
    this.setState({ page: data.activePage });
    if (this.state.showHeadlines) {
      this.fetchTopHeadlines(this.state.country, this.state.category, data.activePage);
    } else {
      this.fetchNewsWithKeywords(this.state.keyword, data.activePage);
    }
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleButtonSearch();
    }
  };

  handleButtonSearch = (e) => {
    const activePage = "1";
    this.setState({ page: activePage });
    this.fetchNewsWithKeywords(this.state.keyword, activePage);
    this.input.value = "";
  };

  getKeywordTyped = (e, data) => {
    e.persist();
    this.setState({ keyword: data.value });
  };

  handleLanguageDropdownChange = (e, data) => {
    e.persist();
    this.setState({ language: data.value });
  };

  handleCountryDropdownChange = (e, data) => {
    e.persist();
    this.setState({ country: data.value, page: "1" });
    this.fetchTopHeadlines(data.value, this.state.category);
  };

  handleCategoryDropdownChange = (e, data) => {
    e.persist();
    this.setState({ category: data.value, page: "1" });
    this.fetchTopHeadlines(this.state.country, data.value);
  };

  render() {
    return (
      <div>
        <Menu inverted stackable attached>
          <Container>
            <a
              href="https://samitamerarar.github.io/top-news"
              style={{ display: "flex", textDecoration: "none" }}
            >
              <Menu.Item color="red" active header>
                Top News
              </Menu.Item>
            </a>
            <Dropdown
              style={{ textAlign: "right" }}
              pointing
              scrolling
              openOnFocus
              inline
              item
              placeholder="Country"
              defaultValue="ca"
              onChange={this.handleCountryDropdownChange}
              options={newsCountriesList}
            />
            <Dropdown
              openOnFocus
              inline
              item
              placeholder="Category"
              defaultValue="general"
              onChange={this.handleCategoryDropdownChange}
              options={newsCategoriesList}
            />
            <div className="right menu" style={{ padding: "0.25rem" }}>
              <Input
                type="text"
                placeholder="Search by keyword..."
                action
                onChange={this.getKeywordTyped}
                onKeyPress={this.onKeyPress}
              >
                <input name="input" ref={(input) => (this.input = input)} />
                <Select
                  compact
                  options={newsLanguagesList}
                  defaultValue="en"
                  onChange={this.handleLanguageDropdownChange}
                />
                <Button color="blue" type="submit" onClick={this.handleButtonSearch}>
                  Search
                </Button>
              </Input>
            </div>
          </Container>
        </Menu>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          <Pagination
            boundaryRange={1}
            siblingRange={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            totalPages={
              (this.state.totalResults ? Math.ceil(this.state.totalResults / 20) : 1) > 5
                ? 5
                : Math.ceil(this.state.totalResults / 20)
            }
            onPageChange={this.changePage}
            activePage={this.state.page}
          />
        </div>
        {this.state.showHeadlines && !this.state.dailyQuotaReached && (
          <div className="searchResults">
            <h2 className="ui header">
              Showing {newsCategoriesList.find((c) => c.value === this.state.category).text} Top
              News in {newsCountriesList.find((c) => c.value === this.state.country).text}
            </h2>
          </div>
        )}
        {!this.state.showHeadlines && !this.state.dailyQuotaReached && (
          <div className="searchResults">
            <h2 className="ui header">Showing search results for '{this.state.keywordTyped}'</h2>
            <div className="ui header searchResults">
              <a
                href="https://samitamerarar.github.io/top-news"
                style={{ textDecoration: "none", outline: "none" }}
              >
                Go back to Canada Top News
              </a>
            </div>
          </div>
        )}

        {this.state.dailyQuotaReached && (
          <div
            className="searchResults"
            style={{
              visibility: "hidden",
              animation: "0s linear 2s forwards delayedShow",
            }}
          >
            <h3
              className="ui header"
              style={{
                color: "red",
              }}
            >
              <div>{"Unable to contact the server"}</div>
            </h3>
            <a
              href="https://samitamerarar.github.io/top-news"
              style={{ textDecoration: "none", outline: "none" }}
            >
              {"The server might be sleeping, please refresh the page"}
            </a>
          </div>
        )}

        <News articles={this.state.articles} />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          <Pagination
            boundaryRange={1}
            siblingRange={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            totalPages={
              (this.state.totalResults ? Math.ceil(this.state.totalResults / 20) : 1) > 5
                ? 5
                : Math.ceil(this.state.totalResults / 20)
            }
            onPageChange={this.changePage}
            activePage={this.state.page}
          />
        </div>

        <footer
          style={{
            marginTop: "5rem",
            textAlign: "center",
            backgroundColor: "RGB(27, 28, 29)",
            padding: "0.8rem",
            width: "100%",
          }}
        >
          <a
            href="https://newsapi.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "RGB(33, 133, 208)", outline: "none" }}
          >
            Powered by NewsAPI.org
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
