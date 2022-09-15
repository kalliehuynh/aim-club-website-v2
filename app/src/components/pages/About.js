import './About.css'
import DocumentTitle from 'react-document-title'

const About = () => {
    return (
        <DocumentTitle title='Accessibility and Inclusivity in Medicine Club'>
            <div className="main">
                <h1 className='header' tabIndex={0}>About Us</h1>
                <div className="about-desc">
                    <p>
                        We are medical students passionate about learning from and advocating with/for patients and students identifying with disability, Deaf communities, and Neurodivergence.
                    </p>
                </div>
                <div className='old-logo'>
                    <p>You may recognize us by our old logo:</p>
                    <img src={`/images/AIM_Logo_Nov_2020.png`} alt="The AIM club's old logo from 2020" className='old-logo-img'/>
                </div>
                <h1 className='header' tabIndex={0}>Purpose</h1>
                <div className="about-desc">
                    <p>
                        The purpose of the AIM Club is to <strong>increase medical students’ awareness, empathy, and knowledge for those who experience disability, are neurodiverse, are Deaf, and more</strong>. 
                    </p>
                </div>
                <h1 className='header' tabIndex={0}>Initiatives</h1>
                <div className="about-desc">
                    <ul>
                        <li>Sitting on the <strong>Social Accountability Council (SAC)</strong> at the University of Alberta Faculty of Medicine and Dentistry (FoMD) advocating for the disability community.</li>
                        <li>Sitting on the <strong>Medical Students’ Association (MSA)  Equity, Diversity, and Inclusion (EDI) Committee</strong> advocating for the disability community.</li>
                        <li>Working with the Canadian Association of Physicians with Disabilities and pre-clerkship faculty to address the lack of disability curriculum in pre-clerkship.</li>
                        <li>Planning various events for medical students to learn from those experiencing disability.</li>
                    </ul>
                </div>
                <div className='mailing-list'>
                    <h3><a href='https://forms.gle/VNWUeGTb4SE8mus76' className='signup-link'>Sign up to our mailing list!</a></h3>
                </div>
            </div>
        </DocumentTitle>
        
    )
}

export default About