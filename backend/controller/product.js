import product from "../models/productModel.js";

 export const createProduct = async (req,res)=>{
try {
    const newProduct = await product.create({
        name:req.body.name,
        productType: req.body.productType,
        productPrice:req.body.productPrice
    })
    res.status(201).json({
        message:'product created successfully',
        product:newProduct
    })
} catch (err) {
    console.error(err);
    res.status(500).send({
      message: 'Error creating user',
      error: err.message,
    });
    
}

 }