import { model, models, Schema } from "mongoose";


const profileSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    location: {
        type: String,
        required: true

    },
    phone: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true
    },
    realEstate: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["villa", "apartment", "store", "office"]
    },
    amenities: {
        type: [String],
        default: []
    },
    rules: {
        type: [String],
        default: []
    },
    constructionDate: {
        type: Date
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    published: {
        type: Boolean,
        default: false,
    },

},
    { timestamps: true },
)

const Profile = models.Profile || model("Profile", profileSchema)

export default Profile