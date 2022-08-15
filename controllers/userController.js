import User from '../models/user.js';

export const addUser = async (req, res) => {
  try {
    await User.create(req.body);
    return res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Something went wrong', error: err.message });
  }
};

export const getUser = (req, res) => res.json(req.body);
