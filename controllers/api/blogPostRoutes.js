const router = require('express').Router();
const { BlogPost, User, Comment } = require('../../models');

// POST new blogpost
router.post('/', async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update blogpost
router.put('/:id', async (req, res) => {
  try {
    const updateBlogPost = await BlogPost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE blogpost
router.delete('/:id', async (req, res) => {
  try {
    const deleteBlogPost = await BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deleteBlogPost) {
      res.status(404).json({ message: 'No blogpost found with this id!' });
      return;
    }

    res.status(200).json(deleteBlogPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
