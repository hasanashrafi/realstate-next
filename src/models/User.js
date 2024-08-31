import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    }
})

const User = models.User || model("User", userSchema)

export default User