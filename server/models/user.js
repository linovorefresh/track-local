import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true,
        },
        name: {
            type: String,
            trim: true,
            default: "",
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            maxlength: 256,
        },
        address: { type: String, default: "" },
        company: { type: String, default: "" },
        phone: { type: String, default: "" },
        photo: {},
        role: {
        type: [String],
        default: ["Buyer"],
        enum: ["Buyer", "Seller", "Admin"],
        },
        enquiredProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ad" }],
        wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ad" }],
        resetCode: "",
    },
    { timestamps: true }
  )

export default mongoose.model('User', schema);