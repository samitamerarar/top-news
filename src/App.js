import React, { Component } from 'react';
import './App.css';
import News from './components/News';
import noImage from './assets/no_image.png';
import { newsCategoriesList } from './constants/news-categories';
import { newsCountriesList } from './constants/news-countries';
import { newsLanguagesList } from './constants/news-languages';
import {
  Container,
  Dropdown,
  Menu,
  Select,
  Button,
  Input,
  Pagination
} from 'semantic-ui-react';
import dateFormat from 'dateformat';

import 'fomantic-ui-css/semantic.css';

const API_KEY = '3b988ce4f31c473fae5bfd8fc5b274a5';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalResults: '',
      articles: [],
      country: 'ca',
      category: 'general',
      keyword: '',
      language: 'en',
      date: '',
      page: '1',
      showHeadlines: true
    };

    // binding for future use with child component
    this.fetchTopHeadlines = this.fetchTopHeadlines.bind(this);
    this.fetchNewsWithKeywords = this.fetchNewsWithKeywords.bind(this);
  }

  componentDidMount() {
    var date = new Date(new Date().setDate(new Date().getDate() - 20));
    this.setState({ date: dateFormat(date, 'yyyy-mm-dd') });
    this.fetchTopHeadlines(
      this.state.country,
      this.state.category,
      this.state.page
    );
  }

  fetchTopHeadlines(country, category, page) {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=20&page=${page}&apiKey=${API_KEY}`
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        this.setState({
          totalResults: json.totalResults,
          articles: json.articles
        });
      });
  }

  fetchNewsWithKeywords(keyword, activePage) {
    fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&language=${this.state.language}&from=${this.state.date}&sortBy=publishedAt&pageSize=20&page=${activePage}&apiKey=${API_KEY}`
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        this.setState({
          totalResults: json.totalResults,
          articles: json.articles
        });
      });
  }

  changePage = (e, data) => {
    e.persist();
    this.setState({ page: data.activePage });
    if (this.state.showHeadlines) {
      this.fetchTopHeadlines(
        this.state.country,
        this.state.category,
        data.activePage
      );
    } else {
      this.fetchNewsWithKeywords(this.state.keyword, data.activePage);
    }
  };

  handleButtonSearch = e => {
    const activePage = '1';
    this.setState({ page: activePage });
    this.fetchNewsWithKeywords(this.state.keyword, activePage);
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
    this.setState({ country: data.value, page: '1' });
    this.fetchTopHeadlines(data.value, this.state.category);
  };

  handleCategoryDropdownChange = (e, data) => {
    e.persist();
    this.setState({ category: data.value, page: '1' });
    this.fetchTopHeadlines(this.state.country, data.value);
  };

  render() {
    return (
      <div>
        <Menu inverted stackable>
          <Container>
            <Menu.Item color="red" active href="" header>
              Top News
            </Menu.Item>
            <Dropdown
              style={{ textAlign: 'right' }}
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
            <div className="right menu" style={{ padding: '5px' }}>
              <Input
                type="text"
                placeholder="Enter a keyword..."
                action
                onChange={this.getKeywordTyped}
              >
                <input />
                <Select
                  compact
                  options={newsLanguagesList}
                  defaultValue="en"
                  onChange={this.handleLanguageDropdownChange}
                />
                <Button
                  color="blue"
                  type="submit"
                  onClick={this.handleButtonSearch}
                >
                  Search
                </Button>
              </Input>
            </div>
          </Container>
        </Menu>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '35px'
          }}
        >
          <Pagination
            boundaryRange={1}
            siblingRange={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            totalPages={
              (this.state.totalResults
                ? Math.ceil(this.state.totalResults / 20)
                : 1) > 5
                ? 5
                : Math.ceil(this.state.totalResults / 20)
            }
            onPageChange={this.changePage}
            activePage={this.state.page}
          />
        </div>
        <News articles={this.state.articles} />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '35px'
          }}
        >
          <Pagination
            boundaryRange={1}
            siblingRange={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            totalPages={
              (this.state.totalResults
                ? Math.ceil(this.state.totalResults / 20)
                : 1) > 5
                ? 5
                : Math.ceil(this.state.totalResults / 20)
            }
            onPageChange={this.changePage}
            activePage={this.state.page}
          />
        </div>
        <a
          href="https://newsapi.org/"
          target="_blank"
          style={{
            width: '99%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
            marginTop: '15px'
          }}
        >
          Powered by NewsAPI.org
        </a>
      </div>
    );
  }
}

export default App;
