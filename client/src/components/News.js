import React, { Component } from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import noImage from "../assets/no_image.png";
import dateFormat from "dateformat";

export class News extends Component {
  render() {
    return (
      <div className="ui container" style={{ minHeight: "65vh" }}>
        <Card.Group stackable itemsPerRow="3">
          {this.props.articles.map((item, index) => (
            <Card key={index} color="grey" centered>
              <Image
                label={{
                  color: "grey",
                  content: `${item.source.name}`,
                  ribbon: true,
                  src: noImage,
                }}
                src={item.urlToImage !== null ? item.urlToImage : noImage}
              />
              <Card.Content>
                <Card.Meta>{dateFormat(item.publishedAt, "ddd, mmmm dS - h:MM TT")}</Card.Meta>
                <br />
                <Card.Header>{item.title}</Card.Header>
                <br />
                <Card.Description>{item.description}</Card.Description>
              </Card.Content>
              <br />
              <Button animated="vertical" color="grey" href={item.url} target="_blank">
                <Button.Content visible>Read more...</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Card>
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default News;
