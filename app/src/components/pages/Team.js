import DocumentTitle from "react-document-title"
import './Team.css'

const Person = ({person}) => {
    const {role, name, pronouns, desc, contact, img, alt_text} = person
    const img_src = `${process.env.PUBLIC_URL}/images/${img}`
    const mailto = `mailto:${contact}`
    if (img === '') {
        const img_src = `${process.env.PUBLIC_URL}/images/${'placeholder.jpeg'}`
        const alt_text = 'A placeholder image for a person'
        return (
            <li key={name} className="person" tabIndex={0}>
            <img src={img_src} alt={alt_text} className='person-image' />
            <div className="person-bio-wrapper">
                <h3 className="person-name">{name}, {pronouns}</h3>
                <p className="person-role">{role}</p>
                <p className="person-desc">{desc}</p>
                <p className="person-contact">Contact: <a href={mailto} className="person-contact-email">{contact}</a></p>    
            </div>
        </li>
        )
    }
    return (
        <li key={name} className="person" tabIndex={0}>
            <img src={img_src} alt={alt_text} className='person-image' />
            <div className="person-bio-wrapper">
                <h3 className="person-name">{name}, {pronouns}</h3>
                <p className="person-role">{role}</p>
                <p className="person-desc">{desc}</p>
                <p className="person-contact">Contact: <a href={mailto} className="person-contact-email">{contact}</a></p>    
            </div>
        </li>
        
        
            
    )
}

const Team = () => {
    const people = [
        {
            'role': 'Co-Lead',
            'name': 'Kirsten Webster',
            'pronouns': 'she/her',
            'desc': 'Kirsten Webster is a second year Métis medical student at the University of Alberta with ADHD, social anxiety disorder, and fibromyalgia. She was a committee member for the AIM Club in the 2021-2022 year and is returning as a Co-Lead for the 2022-2023 year. Kirsten studied Immunology and Infection in undergrad and is passionate about chronic pain conditions and disabilities, and where they intersect. Feel free to connect with Kirsten through email.',
            'contact': 'kawebste@ualberta.ca',
            'img': 'kirsten_webster.jpg',
            'alt_text': 'Portrait pisture of Kirsten'
        },
        {
            'role': 'Co-Lead',
            'name': 'Jenice Ma',
            'pronouns': 'she/her',
            'desc': 'Jenice Ma (she/her) is a nondisabled second year medical student at the Unversity of Alberta, on Treaty 6 territory. She was a committee member for the Accessibility and Inclusivity in Medicine AIM Club in her first year and is incredibly excited to be returning as a Co-Lead this year. She is passionate about the club’s values and goals and is excited to share her passion with others in the medical field. Reach out to Jenice anytime through email!',
            'contact': 'jnma@ualberta.ca',
            'img': '',
            'alt_text': ''
        },
        {
            'role': 'Club Advisor and Coordinator',
            'name': 'An Nguyen',
            'pronouns': 'she/her',
            'desc': 'An Nguyen is a nondisabled Vietnamese settler and second year medical student at the University of Alberta, on Treaty 6 territory. She was a Co-Lead for the Accessibility and Inclusivity in Medicine (AIM) Club in the 2021-2022 year and is returning as a Club Advisor and Coordinator for the 2022-2023 year. An had the pleasure of studying Critical Disability Studies during graduate school, earning her Master of Arts. She loves working with AIM and is excited for what’s to come this year. Feel free to connect with An through email!',
            'contact': 'huean@ualberta.ca',
            'img': 'an_nguyen.jpg',
            'alt_text': 'Portrait pisture of An'
        },
    ]
    return (
        <DocumentTitle title="Team">
            <div className="main team">
                <h1 className="header">Team</h1>
                <div className="recruiting">
                    <p>We are currently recruiting the following roles for this Fall 2022!</p>
                    <ul>
                        <li><strong>VP Events</strong></li>
                        <li><strong>VP Curriculum</strong></li>
                        <li><strong>VP Advocacy/EDI</strong></li>
                    </ul>
                </div>
                <div className="team-content-wrapper">
                    <ul className="team-person-list">
                        {people.map(p => <Person person={p} />)}
                    </ul>       
                </div>
                <div className="team-history">
                     <p>
                        The Accessibility and Inclusivity in Medicine (AIM) Club is a student initiative 
                        started in 2020 by Surina Grover and Vienna Buchholz (c2024 medical students) at the 
                        University of Alberta’s Faculty of Medicine and Dentistry, located on Treaty 6 Territory. 
                    </p>
                    <div className="team-history-images">
                        <div className="surina-grover team-history-img">
                            <p>Surina Grover:</p>
                            <img src="/images/surina_grover.png" alt='Surina Grover, in front of a university building'  className="team-history-img"/>
                        </div>
                        <div className="vienna-bucholz team-history-img">
                            <p>Vienna Bucholz:</p>
                            <img src="/images/vienna_bucholz.png" alt="Vienna Bucholz, in front of a wall of lights" />
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        </DocumentTitle>
    )
}

export default Team