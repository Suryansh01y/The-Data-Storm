const express = require("express");
const mongoose = require("mongoose");
const Post = require("../models/Post");
const User = require("../models/User");

const router = express.Router();

// GET /posts/recent - return the 3 most recent posts
// Keep this route before /:id so "recent" is not treated as an ID.
router.get("/recent", async (req, res, next) => {
  try {
    const posts = await Post.find()
      .populate("authorId", "name email")
      .sort({ createdAt: -1 })
      .limit(3);

    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

// GET /posts - return all posts
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find()
      .populate("authorId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

// GET /posts/:id - return one post
router.get("/:id", async (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: "Post ID must be a valid MongoDB ObjectId." });
  }

  try {
    const post = await Post.findById(req.params.id).populate("authorId", "name email");

    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
});

// POST /posts - create a post
router.post("/", async (req, res, next) => {
  const { title, content, authorId } = req.body;

  if (typeof title !== "string" || !title.trim() ||
      typeof content !== "string" || !content.trim()) {
    return res.status(400).json({ message: "Title and content are required." });
  }

  if (authorId && !mongoose.isValidObjectId(authorId)) {
    return res.status(400).json({ message: "authorId must be a valid MongoDB ObjectId." });
  }

  try {
    const post = await Post.create({
      title: title.trim(),
      content: content.trim(),
      ...(authorId ? { authorId } : {})
    });

    const populatedPost = await post.populate("authorId", "name email");
    res.status(201).json({
      message: "Post created successfully.",
      post: populatedPost
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    next(error);
  }
});

// DELETE /posts/:id - delete a post
router.delete("/:id", async (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: "Post ID must be a valid MongoDB ObjectId." });
  }

  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found." });
    }

    res.status(200).json({
      message: "Post deleted successfully.",
      postId: deletedPost._id
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
