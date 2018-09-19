import React, { Component } from 'react';
import Results from '../../components/Results';
import Saved from '../../components/Saved';
import Search from '../../components/Search';

class Articles extends Component {
  state = {
    articles: [],
    title: '',
    date: '',
    url: ''
  };
};

export default Articles;
