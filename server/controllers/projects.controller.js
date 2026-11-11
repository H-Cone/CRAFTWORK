const projectModel = require("../models/projects.model")


const createProject = async (req, res) => {
    try{
        const {name, description, requiredSkills, budget} = req.body

        const newProject = new projectModel({name, description, requiredSkills, budget, client: req.user.id})

        const saveProject = await newProject.save()
        console.log(saveProject);
        res.status(201).json({message: "New project created", project: saveProject})
    } catch(err) {
        console.log(err)
        if (err.name === "ValidationError") {
        return res.status(400).json({ message: err.message })
    }
        res.status(500).json({message: "ERROR"})
    }
}


const getProjects = async (req, res) => {
    try{ 
        const {search} = req.query

        const filter = {status: "open"}

        if(search){
            filter.$or = [
                {name: {$regex: search, $options: "i"}},
                {requiredSkills: {$regex: search, $options: "i"}}
            ]
        }

        const projects = await projectModel.find(filter).sort({createdAt: -1}).populate("client", "firstName lastName")

        res.status(200).json(projects)
    } catch(err) {
        console.log(err)
        res.status(500).json({message: "Something went wrong"})
    }
}

module.exports = {createProject, getProjects}