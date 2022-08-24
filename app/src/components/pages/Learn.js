import './Learn.css'
import DocumentTitle from 'react-document-title'

const Resource = ({resource}) => {
    const {title, link, desc} = resource
    return (
        <li className='resource-item'>
            <div className="resource-wrapper">
                <a href={link} className='resource-link'>{title}</a>
                <p className="resource-desc">{desc}</p>  
            </div>
        </li>
        
    )
}


const Learn = () => {
    const resources = [
        {
            'title': "Autistic Hoya's Ableist Language Blogpost",
            'link': 'https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html',
            'desc': 'Ableist language is engrained in our everyday lives. Autistic Hoya (Lydia X.Y. Brown)’s blogpost is useful for learning about everyday ableist language.',
            'id': 1
        }
    ]
    return (
        <DocumentTitle title='Learn with us'>
            <div className='main'>
                <h1 className="header">Learn with us!</h1>
                <div className="learn-content">
                    <div className='learn-content-text'>
                        <p>
                            Below are links to resources we have compiled from disability 
                            self-advocates in the community.
                        </p>
                        <p>Feel free to check it out!</p>
                    </div>
                    {resources.map(r => <Resource resource={r} />)}
                </div>
             </div>
        </DocumentTitle>
    )
}

export default Learn