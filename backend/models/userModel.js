
import mongoose from 'mongoose';

// Define the schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String, // Corrected the type to String
            required: true,
            unique: true, // Ensure email is unique
            match: /.+\@.+\..+/ // Regex to validate email format
        },
        age:{
            type:Number,
            required: [true ,'please enter your age']  
        },
        phone:{
            type: Number,
            required: [true , 'please enter you mobile number'],
            

        },
    },
    { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

// Create the model
const User = mongoose.model('User', userSchema);

// Export the model
export default User;
