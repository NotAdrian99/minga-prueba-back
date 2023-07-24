import { Schema, model, Types } from "mongoose";

let schema = new Schema(
  {
    name: { type: String, required: true },
    last_name: { type: String, required: false },
    city: { type: String, required: true },
    country: { type: String, required: false }, //change to test
    date: { type: Date, required: false },
    photo: { type: String, required: true },
    active: { type: Boolean, required: true },
    user_id: {
      type: Types.ObjectId,
      ref: "auths",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let collection = "authors";
let Author = model(collection, schema);
export default Author;
