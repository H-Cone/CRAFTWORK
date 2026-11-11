import React from 'react'
import './Home.css'
import './Browse.css'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import WaveBackground from '../components/WaveBackground'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../service/api'

const Browse = () => {
            const stats = [
            { value: "2.4k", label: "Freelancers" },
            { value: "₦180M", label: "Paid out" },
            { value: "4.9", label: "Average rating" },
        ]

        const [projects, setProjects] = useState([])
        const [query, setQuery] = useState("")
        const [search, setSearch] = useState("")
        const [loading, setLoading] = useState(true)


    useEffect(() => {
            const fetchProjects = async ()=> {
                try{
                    const res = await api.get('/projects/browse', {params: {search}})
                    console.log(res.data)
                    setProjects(res.data)
                } catch(err){
                    console.log(err);
                } finally{
                    setLoading(false)
                }
            }
            fetchProjects()
    }, [search])

        const handleSearch = (e)=> {
            e.preventDefault()
            setSearch(query.trim())
        }
    
return (
    <>
            <div className='main'>
    
    
                <div className='intro-card'>
                    <div className='card1'>
                        <h1>Work with the best, <span>from anywhere.</span></h1>
    
                        <p className='brief'>A calm workspace where clients post projects, freelancers send proposals, and milestones get paid securely.</p>
    
                    <div className='section'>
                        <Link to={'/post-project'}>
                        <button>Post a project →</button>
                        </Link>
    
                        <p>✓ Free to join</p>
                    </div>
    
                    </div>
    
                        <div className='card2'>
                            <p>Trusted by clients and freelancers across Africa</p>
    
                            <div className='stats'>
                                {stats.map((s) => (
                                    <div key={s.label}>
                                        <h3>{s.value}</h3>
                                        <p>{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
    
                </div>
    
            
                        <div className="dark-card visual-card">
                            <WaveBackground />
                            <div className="glass-card">
                                <div>
                                    <p className="glass-small">Milestone approved</p>
                                    <p className="glass-title">Logo concepts · ₦200,000</p>
                                </div>
                                <span className="glass-pill">Released</span>
                            </div>
                        </div>
    
            </div>

                <section className='browse-section'>
                    <div className='search-container'>
                        <div className='search-text'>
                        <h3>Open projects</h3>
                        <span>Fresh this week</span>
                    </div>
                    <form className="browse-search" onSubmit={handleSearch}>
                        <input
                        type="text"
                        placeholder="Search projects or skills…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        />

                        <button type="submit">Search</button>
                    </form>
                </div>


                    {
                        loading ? (
                            <p className='empty-state'>Loading...</p>
                        ) : projects.length === 0 ? (
                            <p className='empty-state'>No projects found</p>
                        ) : (
                            <div className='projectCard-grid'>
                                {projects.map((p) => (
                                    <ProjectCard key={p._id} project={p}/>
                                ))}
                            </div>
                        )
                    }
                </section>
    
    </>
)
}

export default Browse