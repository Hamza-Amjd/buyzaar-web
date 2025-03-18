import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: String,
  wishlist: {
    type: Array,
    default: []
  },
  searchHistory: {
    type: Array,
    default: []
  },
  addresses:[{
    "title": String,
    "address": String,
    "coordinates": {"longitude":Number,"latitude":Number},
    "city": String,
    "country": String,
    "countryCode": String,
    "phoneNumber": String,
    "postalCode": String,
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;