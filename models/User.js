const {Schema, model, ObjectId} = require("mysql2")


const User = new Schema({
    id:{type:Number, require: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    verificated: {type: Boolean, required: true},
    createdDate: {type: String, required: true},
    name: {type: String, required: true},
    XP: {type: Number, required: true},
    currentBalance: {type: Number, required: true},
    level: {type: Number, required: true}
})

module.exports = model('User', User)