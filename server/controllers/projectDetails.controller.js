const projectModel = require("../models/projects.model")


const getProjectById = async (req, res)=> {
    try{
        const id = req.params.id
        const project = await projectModel.findById(id).populate("client", "firstName lastName")

        if(!project){
        return res.status(404).json({ message: "Project not found" })
        }
        res.status(200).json({message: "Project found", project})
    } catch(err){
        console.log(err)

        if(err.name === "CastError"){
            return res.status(404).json({message: "Project not found"})
        }

        res.status(500).json({message: "Something went wrong"})
    }
}

module.exports = {getProjectById}