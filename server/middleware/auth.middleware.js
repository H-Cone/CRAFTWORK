const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next)=> {
    const bearerToken = req.headers.authorization

    if(!bearerToken){
        res.status(401).json({message: "no token"})
    } else{
        const token = bearerToken.split(" ")[1]

        try {
            const decoded = jwt.verify(token, process.env.jwt_secret)

            if(decoded){
                req.user = decoded
                console.log("verifyToken passed")
                next()
            }else{null}
        } catch (error) {
            console.log(error);
            res.status(401).json({message: "invalid or expired token"})
        }
    }
}

module.exports = verifyToken
