import mongoose  from 'mongoose';
const { model, Schema } = mongoose

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      ref: 'Category',
      required: true,
    },
    weight: {
      type: String,
      // required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model('Product', productSchema)
export default Product;