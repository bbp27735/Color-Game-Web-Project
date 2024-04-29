const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        // console.log("Attempting authorization.");
        const token = req.header("Authorization");
        if(!token)
            return res.status(401).json({msg: "No token therefore access denied"});
        // Expecting "Bearer [token]"
        // console.log("Got out of !token");
        const token2 = token.split(" ")[1];
        // console.log('Split token into ', token2);
        if (!token2) {
            console.log("Inside !token2");
            return res.status(401).json({msg: "No token after Bearer, access denied."});
        }
        console.log("Passed !token2, so exists")
        // console.log("Finding JWT secret...");
        // console.log(token2);
        const verified = jwt.verify(token2, process.env.JWT_SECRET); // Use env var for JWT secret
        console.log("Verified worked as expected.");
        // console.log(verified);
        if(!verified) {
            return res.status(401).json({msg: "Token verification failed, authorization denied" });
        }

        // since the token was made out of the document id
        
        req.user = verified.id;
        console.log("Verified ID past")
        next();
    } catch (err) {
        console.log(err.message);
        res.status(500).json({error: err.message});
    }
};

module.exports = auth;