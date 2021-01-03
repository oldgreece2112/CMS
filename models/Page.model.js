var mongoose = require("mongoose");

var PageSchema = new mongoose.Schema({
    title: String,
    nav: Boolean,
    lastEdited: {
        type: Date,
        default: Date.now()
    },
    priv: Number,
    desc: String
});

module.exports = new mongoose.model("Page", PageSchema);