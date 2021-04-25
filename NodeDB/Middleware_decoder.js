const jwt = require('jsonwebtoken');


module.exports = function(req, res, next)

{

    const token = req.header('auth-token');

    if(!token){
	
        return res.status(401).json({msg: 'No token auth'});
        
        
    }

    try{
        const decoded = jwt.verify(token, 'This secret key can be used in Config');
        
         // req.user = decoded.user;
        req.user = decoded._id;
        next();
        
    }
    catch(err){
	
        res.status(401).json({msg: "Token is not valid"});
        }
}