import React from 'react'
import './ProjectCard.css'
import WaveBackground from './WaveBackground'

const ProjectCard = ({project}) => {
  return (
    
          <div className='project-card'>
      <div className='dark-card project-wave'>
        <WaveBackground/>
      </div>
      
      <div className='project-body'>
        <div className='project-top'>
          <p className='status-pill'>{project.status}</p> 
          <p className='project-budget'>₦{project.budget.toLocaleString()}</p>
        </div>
        <h3>{project.name}</h3>
        <p className="project-desc">{project.description}</p>

        <div className= "project-skills">
          {project.requiredSkills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard