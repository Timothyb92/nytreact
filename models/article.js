import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const articleSchema = new Schema ({
  title: { type: string, required: true },
  date: { type: Date },
  url: { type: String }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;