const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
      email: {
            type: String,
            require: true, 
            unique: true
      },
   
       otp:{
            type: String,
      }
});

UserSchema.path('otp').default(() => {
      return "";
  })


const Verifieduser = mongoose.model("Verifieduser", UserSchema);
 
module.exports = Verifieduser;