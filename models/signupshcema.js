import mongoose from "mongoose"
const SignupScema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true,
        unique: true
    }
})

let signup =  mongoose.model('Signup', SignupScema)
export default signup;