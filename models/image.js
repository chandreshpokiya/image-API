import mongoose from 'mongoose';

const imageSchema = mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true });

export default mongoose.model('Image', imageSchema);
