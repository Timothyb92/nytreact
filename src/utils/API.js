import axios from 'axios';

export default {
  searchArticles: (data) => {
    axios.get({
      url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      qs: {
        'api-key': process.env.REACT_APP_API_KEY,
        'q': data.title,
        'begin_date': data.startYear + '0101',
        'end_date': data.endYear + '0101'
      }
    })
    .then(results => {
      console.log(results);
      return results;
    })
  },

  getSavedArticles: (id) => axios.get(`api/articles/${id}`),

  removeSavedArticle: (id) => axios.delete(`api/articles/${id}`),

  saveArticle: (article) => axios.put('/api/articles/', article)
};