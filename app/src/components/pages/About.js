import './About.css'
import DocumentTitle from 'react-document-title'
import { useEffect } from 'react'

const About = () => {
    return (
        <DocumentTitle title='Accessibility and Inclusivity in Medicine Club'>
            <div className="main">
                <h1 className='header'>About Us</h1>
                <div className="about-desc">
                    <p>
                    Located on Treaty 6 Territory, the <strong>Accessibility and Inclusivity in Medicine (AIM) Club</strong> is a student initiative started in 2021-2022 by <b>Surina Grover</b> and <b>Vienna Bucholz</b> at the University of Alberta’s Faculty of Medicine and Dentistry. 
                    </p>
                    <p>
                        We are medical students who are passionate about learning from disability communities and educating medical students in order to better serve our future patients identifying with disability, Deaf communities, Neurodivergence, and beyond. 
                    </p>
                </div>
                <div className="advocacy-curriculum">
                    <div className="advocacy-curriculum-box">
                        <h2 className='header'>Advocacy</h2>
                        <p>We are advocating for:</p>
                        <ul className="advocacy-list">
                            <li className="advocacy-list-item">A more accessible medical school application and medical school education</li>
                            <li className="advocacy-list-item">An accessibility policy within MSA and FoMD club/initiative events</li>
                        </ul>
                    </div>
                    <div className="advocacy-curriculum-box">
                        <h2 className='header'>Curriculum</h2>
                        <p>We are working to increase disability-affirming curriculum in the pre-clerkship medical education. </p>
                    </div>
                </div>
            </div>
        </DocumentTitle>
        
    )
}

export default About