import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fashion = new Schema(
  {
    fashionTitle: {
      type: String,
      required: true,
    },
    fashionDetails: {
      type: String,
    },
    thumbnail: {
      type: Buffer,
    },
    fashionStyle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Fashion = mongoose.model("Fashion", fashion);

export default Fashion;
