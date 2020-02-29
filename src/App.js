import React, { Component } from 'react';
import './App.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import noImage from './assets/no_image.png';
import dateFormat from 'dateformat';

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
      `http://newsapi.org/v2/everything?q=bitcoin&language=en&from=2020-01-29&sortBy=publishedAt&apiKey=${API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          articles: json.articles
        });
        console.log(this.state);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.articles.map((item, index) => {
          return (
            <div>
              <Card>
                <CardImg
                  className="img-fluid"
                  top
                  height="400px"
                  src={item.urlToImage === null ? noImage : item.urlToImage}
                />
                <CardBody>
                  <CardTitle>
                    <h3>
                      <b>{item.title}</b>
                    </h3>
                  </CardTitle>
                  <CardSubtitle>{item.source.name}</CardSubtitle>
                  <CardSubtitle>
                    <p style={{ fontStyle: 'italic' }}>
                      {dateFormat(
                        item.publishedAt,
                        'ddd, mmmm dS, yyyy, h:MM TT'
                      )}
                    </p>
                  </CardSubtitle>
                  <CardText>{item.description}</CardText>
                  <Button
                    href={item.url}
                    target="_blank"
                    style={{ margin: '3px' }}
                  >
                    Read More...
                  </Button>
                  <br></br>
                  <Button
                    href={item.url}
                    target="_blank"
                    alt="Card image cap"
                    style={{ margin: '3px' }}
                  >
                    Website
                  </Button>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
