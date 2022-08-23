import DocumentTitle from "react-document-title";

const Person = ({person}) => {
    const {name, pronouns, desc, contact, img, alt_text} = person;
    const img_src = `${process.env.PUBLIC_URL}/assets/images/${img}`
    const mailto = `mailto:${contact}`
    return (
        <div className="person">
            <img src={img_src} alt={alt_text} className='person-image' />
            <h3 className="person-name">{name}</h3>
            <p className="person-pronouns">{pronouns}</p>
            <p className="person-desc">{desc}</p>
            <p className="person-contact">Contact: <a href={mailto} className="person-contact-email">{contact}</a></p>
        </div>
        
            
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
            <div className="team">
                <h1 className="team-header">Team</h1>
                <ul className="team-person-list">
                    {people.map(p => <Person person={p} />)}
                </ul>   
            </div>
        </DocumentTitle>
    )
}

export default Team