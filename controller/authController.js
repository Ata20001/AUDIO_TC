
const User = require('../model/user');
const register = (req, res) =>{

    try{

        //step 1: user get name email and password from frontend
        const {name, email, password} = req.body;

        //step 2: check if user already exists in database
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                
                message: "found"
            });
        }

        //step 3: password hashing or bcrypting
    

        // step 4: save user to database
        const user = await User.create({
            name,
            email,
            password
        });



    }
    catch(err){
        console.log(" error" , err)
}

}