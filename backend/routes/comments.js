const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const { protect, authorize } = require('../middleware/auth');

router.get('/', protect, authorize('read'), async (req, res) => {
  const comments = await Comment.find().populate('user', 'name');
  res.json(comments);
});

router.post('/', protect, authorize('write'), async (req, res) => {
  const comment = await Comment.create({ user: req.user._id, text: req.body.text });
  res.status(201).json(comment);
});

router.delete('/:id', protect, authorize('delete'), async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Comment deleted' });
});

module.exports = router;