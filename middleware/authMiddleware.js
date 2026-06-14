const jwt = require('jsonwebtoken');
const protectedRoute = (req, res, next) => {

    const token = req.headers.authorization?.split(' ')[1];

    console.log("token value:", token);
    if (!token) {
        return res.status(404).json({ 
            message: 'not found' 
        });
    }

 try{
       // Verify the token

    const verified = jwt.verify(token, process.env.jwt_secretKey);
    req.user = verified;
    console.log(verified);

    next();
 }
    catch(error){
        console.log(error);

}



module.exports =  protectedRoute;