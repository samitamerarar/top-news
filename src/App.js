import React, { Component } from 'react';
import './App.css';
import News from './components/News';
import NavbarPage from './components/Navbar';

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
        <NavbarPage />
        <News articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
