import mongoose, { models, Schema } from "mongoose";

const MemberSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
  },
  {
    _id: false,
  }
);

const RsvpSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    countryCode: {
      type: String,
      require: true,
    },
    contact: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    familyDetails: {
      type: [MemberSchema],
      default: [],
    },
    attending: {
      type: String,
      enum: ["Yes", "No", "Maybe"],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Rsvp = models.Rsvp || mongoose.model("Rsvp", RsvpSchema, "rsvps");

export default Rsvp;
