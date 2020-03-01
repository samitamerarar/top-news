import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import noImage from '../assets/no_image.png';
import dateFormat from 'dateformat';

export class News extends Component {
  render() {
    return (
      <div>
        {this.props.articles.map((item, index) => {
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

export default News;
