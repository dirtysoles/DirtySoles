import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
        email: { type: String, required: true },
        passWord: { type: String, required: true },
        firstName: { type: Object, required: true },
        lastName: { type: String, required: true },
        shippingAddress: {type: Object,
            street: {type: String}, 
            unit: {type: Number}, 
            city: {type: String}, 
            state: {type: String}, 
            zip: {type: Number}
         },
  },
  { strict: false }
);

export const User = mongoose.model("User", UserSchema);