import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true , 'please enter your name '],
        max:[20 , 'max length is 20 character'],
        min: [2 , ' min length is 2 character']
    },
    productType:{
        type:String,
        required:[true , 'please enter your product type'],
        max:[20,'max length is 20 character'],
        min: [2 , 'min length is 2 character']
        
    },
    productPrice:{
        type: Number,
        required: [true ,'please enter your price ']
    },
})

const product = mongoose.model('product', productSchema)

export default product;
