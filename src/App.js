import React, { Component } from 'react';
import './App.css';
import News from './components/News';
import noImage from './assets/no_image.png';
import image from './assets/alex-ZR48YvUpk04-unsplash.jpg';
import { newsCategoriesList } from './constants/news-categories';
import { newsCountriesList } from './constants/news-countries';
import {
  Image,
  Container,
  Dropdown,
  Menu,
  Search,
  MenuItem
} from 'semantic-ui-react';
import 'fomantic-ui-css/semantic.css';

const API_KEY = '3b988ce4f31c473fae5bfd8fc5b274a5';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch(
      `http://newsapi.org/v2/everything?q=bitcoin&language=en&from=2020-02-25&sortBy=publishedAt&apiKey=${API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          articles: json.articles
        });
      });
  }

  render() {
    return (
      <div>
        <Menu stackable inverted>
          <Container>
            <Menu.Item color="red" active href="https://www.google.ca/" header>
              Top News
            </Menu.Item>
            <Dropdown
              pointing
              scrolling
              openOnFocus
              inline
              item
              placeholder="Country"
              options={newsCountriesList}
            />
            <Dropdown
              openOnFocus
              inline
              item
              placeholder="Category"
              options={newsCategoriesList}
            />
            <Dropdown openOnFocus inline item placeholder="Language" />
            <MenuItem position="right">
              <div className="ui right aligned category search">
                <div className="ui icon input">
                  <input
                    className="prompt"
                    type="text"
                    placeholder="Search by keyword..."
                  />
                  <i className="search link icon" />
                </div>
                <div className="results" />
              </div>
            </MenuItem>
          </Container>
        </Menu>
        <News articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
