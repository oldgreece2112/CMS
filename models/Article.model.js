var mongoose = require("mongoose");

var ArticleSchema = new mongoose.Schema({
    title: String,
    body: String,
    tags: [{
        type: String
    }],
    created: {
        type: Date,
        default: Date.now()
    },
    Page: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Page"
    },
    readMore: Boolean
});

module.exports = new mongoose.model("Article", ArticleSchema);