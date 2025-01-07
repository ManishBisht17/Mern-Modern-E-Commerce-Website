import User from '../models/userModel.js'; 
// Sample route handlers

// Signup route handler
export const signup = async (req, res) => {
  try {
    // Create a new user in the database
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      phone:req.body.phone
    });

    // Send a success response
    res.status(201).send({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send({
      message: 'Error creating user',
      error: err.message,
    });
  }
};

export const Userlogin = async(req,res)=>{
  try {

    const {email,password} = req.body;
    if(!email || !password){
       return res.status(400).json({
        message: `email and password is required`
      })
    }

    const user = await User.findOne({email}).select('+password')
    if(!user){
      return res.status(400).json({
        message: 'user does not exist please signup first '
      })
    }
    if(password === user.password){
      res.status(200).json({
      message:"success",
      data:{
        name: user.name,
        email
      }
    })
    }else{
      return res.status(401).json({
        message:'wrong password '
      })
    }

  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (req,res)=>{
  try{
    const {email ,password} = req.body;
  const user = await User.findOne({email});

  if(!user){
    return res.status(400).json({
      message:'user does not exist'
    })
  }
 if (password !== user.password) {
    return res.status(401).json({
        message: 'Invalid password'
    });
}
if (email!== user.email) {
  return res.status(401).json({
      message: 'Invalid email'
  });
}

  await User.deleteOne({_id:user._id});
  return res.status(204).json({
    message:"user deleted successfully"
  })

}catch(error){
  console.log(error);
  return res.status(500).json({
    message: 'Server error',
    error: error.message
});
}
}

