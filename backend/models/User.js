const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  imgCollection: {
    type: Array
  },
},
{
  collection: 'users'
})

const UserModel =  mongoose.model('UserModel', userSchema)


module.exports = UserModel