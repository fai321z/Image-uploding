const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose")
mongoos.connect(`mongodb://127.0.0.1:27017/fi`);

const userSchema = mongoose.Schema({
    image:String
})

module.exports=mongoose.model("users",userSchema);

