import DocumentTitle from "react-document-title"

const Contact = () => {
    return (
        <DocumentTitle title='Contact' >
            <div>
                <h1 className="section-header">Contact</h1>
                <div className="contact-content">
                    <p>For Accessibility Inquiries/Feedback/Edit suggestions: Please contact An Nguyen at <a href="mailto:huean@ualberta.ca">huean@ualberta.ca</a>.</p>
                    <p>To Collaborate with AIM please contact:_______________</p>
                    <p>For General Inquiries please contact:_______________</p> 
                </div>
            </div>    
        </DocumentTitle>
        
    )
}

export default Contact