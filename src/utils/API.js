import axios from 'axios';

export default {
  getSavedArticles: (id) => axios.get(`api/articles/${id}`),

  removeSavedArticle: (id) => axios.delete(`api/articles/${id}`),

  saveArticle: (article) => axios.put('/api/articles/', article)
};