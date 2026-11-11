const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

const signup = async (req, res) => {

    try{
    const {password, ...theRest} = req.body

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    // console.log(req.body, hashedPassword);

        const newUser = new userModel({password: hashedPassword, ...theRest})
        const saveUser = await newUser.save()

        console.log(saveUser);

        res.status(200).json({message: "signup successful"})
    } catch(err) {
        console.log(err);
    }
}

const signin = async (req, res) => {
    try{
        const user = await userModel.findOne({email: req.body.email})

        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        const verify = await bcrypt.compare(req.body.password, user.password)

        if(verify) {
            const payload = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                id: user._id
            }

            const token = jwt.sign(payload, process.env.jwt_secret, {
                expiresIn: "1d"
            })

            res.status(201).json({message: "welcome back", token} )
        } else{
            res.status(401).json({message: "invalid"})
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" })
    }
}


module.exports = {signup, signin}