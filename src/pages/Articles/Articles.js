import React, { Component } from 'react';
import Results from '../../components/Results';
import Saved from '../../components/Saved';
import Search from '../../components/Search';
import API from '../../utils/API';
import { Col, Row, Container } from "../../components/Grid";

class Articles extends Component {
  state = {
    articles: [],
    title: '',
    date: '',
    url: ''
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
      API.saveArticle({
        title: this.state.title,
        date: this.state.date,
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
          <Search />
        </Col>
      </Row>
    </Container>
    )
  }

};

export default Articles;
