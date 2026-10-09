const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
      minlength: [1, "Title cannot be empty."]
    },
    content: {
      type: String,
      required: [true, "Content is required."],
      trim: true,
      minlength: [1, "Content cannot be empty."]
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", postSchema);
