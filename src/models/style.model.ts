import mongoose from "mongoose";

// *INFO: This plugin is used to replace the normalizeId as it is getting error
const mongooseLeanId = require('mongoose-lean-id')

const Schema = mongoose.Schema;

const style = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

style.plugin(mongooseLeanId)

style.virtual("fashions", {
  ref: "AdvanceFashion",
  localField: "_id",
  foreignField: "styleId",
});

style.set("toObject", { virtuals: true });
style.set("toJSON", { virtuals: true });

const Style = mongoose.model("Style", style);

export default Style;
