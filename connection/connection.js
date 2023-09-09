import mongoose from 'mongoose';
let connectDB = async (uri) => {
    try {
        await mongoose.connect(uri)
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;
