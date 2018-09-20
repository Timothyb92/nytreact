import React, { Component } from 'react';
import axios from 'axios';
import request from 'request';
import Results from '../../components/Results';
import Saved from '../../components/Saved';
import Search from '../../components/Search';
import API from '../../utils/API';
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    title: '',
    date: '',
    startYear: '',
    endYear: '',
    url: '',
    saved: undefined
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getSavedArticles()
    .then(data => {
      this.setState({ articles: data.data, title: '', date: '', url: '' })
    })
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      // fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.REACT_APP_API_KEY}&q=${this.state.title}&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}0101`)
      // .then(results => {
      //   return JSON.parse(results)
      // })
      // .then(data => {
      //   console.log(data);
      // })
      request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
          'api-key': process.env.REACT_APP_API_KEY,
          'q': this.state.title,
          'begin_date': `${this.state.startYear}0101`,
          'end_date': `${this.state.endYear}0101`
        },
      }, function(err, response, body) {
        body = JSON.parse(body);
        console.log(body)
        // body.response.docs.map(article => {
        //   this.state.articles.push(article);
        // })
      })
    }
  };

  render() {
    return (
    <Container>
      <Row>
        <Col size="md-12">
          <Search>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              label="Topic"
            />
            <Input
              value={this.state.startYear}
              onChange={this.handleInputChange}
              name="startYear"
              label="Start Year"
            />
            <Input
              value={this.state.endYear}
              onChange={this.handleInputChange}
              name="endYear"
              label="End Year"
            />
            <FormBtn
              onClick={this.handleSubmit}
            >Search</FormBtn>
          </Search>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Results>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <strong>
                      {article.title}
                    </strong>
                  </ListItem>
                ))}
              </List>
            ): (
              <h3>No Results</h3>
            )}
          </Results>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Saved>
            {this.state.articles.saved ? (
              <List>
                {this.state.articles.saved.map(article => (
                  <ListItem key={article._id}>
                    <strong>
                      {article.title}
                    </strong>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Articles Saved</h3>
            )}
          </Saved>
        </Col>
      </Row>
    </Container>
    )
  }

};

export default Articles;
