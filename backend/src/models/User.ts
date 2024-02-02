import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Joi from "joi";

export type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export function validateRegisterUser(obj: any) {
  const schema = Joi.object({
    email: Joi.string().trim().required(),
    password: Joi.string().trim().min(6).required(),
    firstName: Joi.string().trim().min(2).max(100).required(),
    lastName: Joi.string().trim().min(2).max(100).required(),
  });

  return schema.validate(obj);
}

export function validateLoginUser(obj: any) {
  const schema = Joi.object({
    email: Joi.string().trim().required(),
    password: Joi.string().trim().min(6).required(),
  });
  return schema.validate(obj);
}

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;
