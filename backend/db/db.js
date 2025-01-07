import mongoose from "mongoose";
const mongodb = async() =>{
const url = 'mongodb+srv://manisbst123:U2Qov7xMfpYEkPZc@cluster0.e5ofn.mongodb.net/Practice_database?retryWrites=true&w=majority';

mongoose.connect(url)
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB:', err);
    });

}

export default mongodb