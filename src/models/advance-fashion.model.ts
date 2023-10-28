import mongoose from "mongoose";

// *INFO: This plugin is used to replace the normalizeId as it is getting error
const mongooseLeanId = require("mongoose-lean-id");

const Schema = mongoose.Schema;

const advanceFashion = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    styleId: {
      type: Schema.Types.ObjectId,
      ref: "Style",
    },
  },
  {
    timestamps: true,
  }
);

advanceFashion.plugin(mongooseLeanId);

advanceFashion.virtual("style", {
  ref: "Style",
  localField: "styleId",
  foreignField: "_id",
});

advanceFashion.set("toObject", { virtuals: true });
advanceFashion.set("toJSON", { virtuals: true });

const AdvanceFashion = mongoose.model("AdvanceFashion", advanceFashion);

export default AdvanceFashion;
