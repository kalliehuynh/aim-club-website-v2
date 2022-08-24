import DocumentTitle from "react-document-title"
import './Team.css'

const Person = ({person}) => {
    const {name, pronouns, desc, contact, img, alt_text} = person
    const img_src = `${process.env.PUBLIC_URL}/images/${img}`
    const mailto = `mailto:${contact}`
    return (
        <li key={name} className="person">
            <img src={img_src} alt={alt_text} className='person-image' />
            <div className="person-bio-wrapper">
                <h3 className="person-name">{name}</h3>
                <p className="person-pronouns">{pronouns}</p>
                <p className="person-desc">{desc}</p>
                <p className="person-contact">Contact: <a href={mailto} className="person-contact-email">{contact}</a></p>    
            </div>
        </li>
        
        
            
    )
}

const Team = () => {
    const people = [
        {
            'name': 'An Nguyen',
            'pronouns': 'she/her',
            'desc': 'An Nguyen is a nondisabled Vietnamese settler and second year medical student at the University of Alberta, on Treaty 6 territory. She was a Co-Lead for the Accessibility and Inclusivity in Medicine (AIM) Club in the 2021-2022 year and is returning as a Club Advisor and Coordinator for the 2022-2023 year. An had the pleasure of studying Critical Disability Studies during graduate school, earning her Master of Arts. She loves working with AIM and is excited for what’s to come this year. Feel free to connect with An through email!',
            'contact': 'huean@ualberta.ca',
            'img': 'an_nguyen.jpg',
            'alt_text': 'portrait of an'
        }
    ]

    return (
        <DocumentTitle title="Team">
            <div className="main team">
                <h1 className="header">Team</h1>
                <div className="team-content-wrapper">
                    <ul className="team-person-list">
                        {people.map(p => <Person person={p} />)}
                    </ul>       
                </div>
                
            </div>
        </DocumentTitle>
    )
}

export default Team