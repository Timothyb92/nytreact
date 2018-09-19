import React, { Component } from 'react';
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
    console.log(this.state);
    if (this.state.title) {
      API.searchArticles({
        title: this.state.title,
        startYear: this.state.startYear,
        endYear: this.state.endYear,
        url: this.state.url
      })
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
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
              name="title"
              label="Start Year"
            />
            <Input
              value={this.state.endYear}
              onChange={this.handleInputChange}
              name="title"
              label="End Year"
            />
            <button className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
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
