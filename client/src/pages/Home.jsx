    import React from 'react'
    import './Home.css'
    import Navbar from '../components/Navbar'
    import WaveBackground from '../components/WaveBackground'
    import { Link } from 'react-router-dom'
    import { BadgeCheck, Mail, Scale, ShieldCheck, Sparkles, Star } from 'lucide-react'
import Footer from '../components/Footer'

    const Home = () => {

        const stats = [
            { value: "2.4k", label: "Freelancers" },
            { value: "₦180M", label: "Paid out" },
            { value: "4.9", label: "Average rating" },
        ]


        const features = [
            {icon: BadgeCheck, title: "Verified profiles", text: "Skills, portfolios and reviews that show real work, so you hire with confidence." },
            {icon: Sparkles, title: "Smart proposals", text: "Compare bids side by side, shortlist your favorites and hire in one click."},
            {icon: ShieldCheck, title: "Milestone escrow", text: "Funds are held safely and released only when you approve the work."},
            {icon: Mail, title: "Built-in messaging", text: "Talk to your client or freelancer in the project, with notifications for every update."},
            {icon: Star, title: "Ratings and reviews", text: "Both sides review each other after completion, building trust over time."},
            {icon: Scale, title: "Fair dispute handling", text: "If something goes wrong, the milestone freezes while the issue gets resolved."}
        ] 


        const steps = [
            {num: '01', title: "Post a project", text: "Describe the work, set a budget and break it into milestones."},
            {num: "02", title: "Choose your freelancer", text: "Review proposals and profiles, then hire the best fit.", wave: true},
            {num: "03", title: "Pay by milestone", text: "Approve each deliverable and release payment as the work lands."}
        ]

    return (
        <>

        <div className='main'>


            <div className='intro-card'>
                <div className='card1'>
                    <h1>Work with the best, <span>from anywhere.</span></h1>

                    <p className='brief'>A calm workspace where clients post projects, freelancers send proposals, and milestones get paid securely.</p>

                <div className='section'>
                    <Link to={'/signup'}>
                    <button>Get started →</button>
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


        <div className='features' id='features'>
            <p>FEATURES</p>
            <h1>Everything a project needs, <span>in one place.</span></h1>
        </div>

        <div className='feature-container'>
            {features.map(({icon: Icon, title, text})=> (
                <div key={title} className='feature-cards'>
                    <div className='feature-icon'>
                        <Icon size={18}/>
                    </div>

                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            ))}
        </div>


        <div className='how-it-works' id='how-it-works'>
            <p>HOW IT WORKS</p>
            <h1>From idea to delivery <span>in three steps.</span></h1>
        </div>

        <div className='how-it-works-container'>
            {steps.map((step)=> (
                <div key={step.num} className={`how-it-works-card ${step.wave ? "dark-card" : ""}`}>

                    {step.wave && <WaveBackground/>}

                    <h1>{step.num}</h1>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                </div>
            ))}
        </div>

        <div className='about-container'>
            <div className='about-card' id='about'>
                <p className='about'>ABOUT</p>
                <h1>Built for people who do great work.</h1>
                <p className='about-text'>Craftwork connects clients with skilled freelancers and keeps every project clear from first proposal to final payment.</p>
            </div>

            <div className='dark-card ready-card'>
                <WaveBackground/>
                <h1>Ready to start?</h1>

                <Link to={'/signup'}>
                    <button>Create your account →</button>
                </Link>
            </div>
        </div>

            <Footer/>
</>
    )
    }

    export default Home