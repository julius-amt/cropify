import { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: String },
        signinMethod: { type: String, required: true, default: "default" },
        role: { type: String, default: "user", enum: ["user", "admin"] },
        isVerified: { type: Boolean, default: true },
        resetToken: { type: String },
        resetTokenExpiry: { type: Date },
    },
    { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
