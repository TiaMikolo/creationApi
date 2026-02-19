import User from "../../models/user.js"
import { userValidationSchema } from "../../validation/userValidation.js"

export const addUser = async (req,res) => {
    const {error, value} = userValidationSchema.validate(req.body)

    if (error){
        return res.status(400).json({error : error.details[0].message})
    }

    try{
        const {email} = value
        const userExists = await User.findOne({email})
        if (userExists){
            return res.status(400).send('Email déjà utilisé')
        }
        
        const newUser = new User(value)
        const saveUser = await newUser.save()
        return res.status(201).json({message : "User créé", user : saveUser})
    }catch(err){
        return res.status(400).json({error : err.message})
    }
}