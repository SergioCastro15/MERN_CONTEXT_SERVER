import Post from '../models/Post.js'

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.send(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newPost = new Post({ title, description });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost)
  } catch (error) {
    res.satus(500).json({
      message: error.message
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postRemoved = await Post.findByIdAndDelete(req.params.id);
    if(!postRemoved) {
      res.sendStatus(404);
    }
    res.sendStatus(204);
  } catch (error) {
    res.satus(500).json({
      message: error.message
    });
  }
}

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(!post) {
      res.sendStatus(404);
    }
    res.json(post);
  } catch (error) {
    res.satus(500).json({
      message: error.message
    });
  }
}