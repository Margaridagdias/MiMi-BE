const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  //chamar o UserId
  {
    user: {
      type: Schema.Types.ObjectId
    },
    backgroundImage: {
      type: String
    },
    font: {
      type: String
    },
    fontColor: {
      type: String
    },
    music: {
      type: String
    },
    imageUrl: {
      type: String
    }
  }
);


const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;