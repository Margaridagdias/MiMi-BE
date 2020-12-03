const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mainSchema = new Schema(
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
    }
  }
);


const Main = mongoose.model('Main', mainSchema)

module.exports = Main;