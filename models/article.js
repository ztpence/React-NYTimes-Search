const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    data:  { type: Schema.Types.Mixed }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
