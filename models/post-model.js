const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  //chamar o UserId
  {
    user: {
      type: Schema.Types.ObjectId,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String
    }
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
