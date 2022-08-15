import Category from '../models/category.js';

export const addCategory = async (req, res) => {
  try {
    const categoryName = (req.body.name).toLowerCase().trim();
    await Category.create({
      name: categoryName,
    });
    return res.status(201).json({
      success: true,
      message: 'Category added',
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      messgae: 'Something went wrong',
      error: err.message,
    });
  }
};

// eslint-disable-next-line
export const viewCategory = async (req, res) => {
  try {
    const categories = await Category.find({});

    return res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'something went wrong ',
      error: err.message,
    });
  }
};
