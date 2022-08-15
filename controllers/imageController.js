import Image from '../models/image.js';

// eslint-disable-next-line
export const addImage = async (req, res) => {
  try {
    // return res.json(req.body);

    const imgUrl = req.body.url.trim();
    const img = await Image.findOne({ url: imgUrl });
    if (!img) {
      await Image.create({
        categoryId: req.body.categoryId,
        url: imgUrl,
      });
      return res.status(201).json({
        success: true,
        message: 'Image was created successfully',
        data: req.body,
      });
    }
    return res.status(406).json({
      success: false,
      message: 'Image already exists',
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Somthing went wrong',
      error: err.message,
    });
  }
};

export const viewImages = async (req, res) => {
  try {
    const images = await Image.find({}).select('categoryId url');
    return res.status(200).json({
      success: true,
      data: images,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Somthing went wrong',
      error: err.message,
    });
  }
};
