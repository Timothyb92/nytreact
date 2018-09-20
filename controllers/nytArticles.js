import axios from 'axios';
import db from '../models';

export default {
  findAll: (req, res) => {
    const params = Object.assign(
      { api_key: process.env.REACT_APP_API_KEY },
      req.query
    );
    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params
    }).then(results => {
      db.Article.find()
      .then(dbArticles => {
        return results.data.response.docs.filter(article => 
          dbArticles.every(
            dbArticle => dbArticle._id.toString() !== article._id
          )
        )
      })
      .then(articles => res.json(articles))
      .catch(err => res.status(422).json(err));
    })
  }
}

// module.exports = {
//   findAll: function(req, res) {
//     const params = Object.assign(
//       { api_key: "9b3adf57854f4a19b7b5782cdd6e427a" },
//       req.query
//     );
//     axios
//       .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
//         params
//       })
//       .then(response => {
//         db.Article
//           .find()
//           .then(dbArticles =>
//             response.data.response.docs.filter(article =>
//               dbArticles.every(
//                 dbArticle => dbArticle._id.toString() !== article._id
//               )
//             )
//           )
//           .then(articles => res.json(articles))
//           .catch(err => res.status(422).json(err));
//       });
//   }
// };