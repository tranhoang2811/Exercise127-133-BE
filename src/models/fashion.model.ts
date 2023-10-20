import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fashion = new Schema(
  {
    style: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
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

const Fashion = mongoose.model("Fashion", fashion);

export default Fashion;
