import { useEffect, useState } from 'react'
import './Events.css'
import DocumentTitle from 'react-document-title'

const convertDate = (dateString) => {
    const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dateArray = dateString.split('-').map(date => parseInt(date))
    return `${months[dateArray[1]]} ${dateArray[2]}, ${dateArray[0]}`
}

const convertTimeString = (timeString) => {
    // Check correct timeString format and split into components
    timeString = timeString.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [timeString];

    if (timeString.length > 1) { // If timeString format correct
        timeString = timeString.slice (1);  // Remove full string match value
        timeString[5] = +timeString[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        timeString[0] = +timeString[0] % 12 || 12; // Adjust hours
    }
    return timeString.join (''); // return adjusted timeString or original string
}

const UpcomingEvent = ({ event }) => {
    const { name, date, location, signup } = event
    const eventName = name
    const startDate = date.start.slice(0, 10)
    const endDate = date.end.slice(0, 10)
    const startTime = date.start.slice(11, 16)
    const endTime = date.end.slice(11, 16)
    
    console.log('signup', signup)
    if (startDate === endDate) {
        return (
            <li className="event-item" key={eventName}>
                <div className="event-name-date-wrapper">
                    <h3 className="event-item-name">{eventName}</h3>
                    <p className="event-item-datetime">{convertDate(startDate)}, {convertTimeString(startTime)} - {convertTimeString(endTime)}</p>
                </div>
                <a href={signup} target="_blank" rel="noopener noreferrer" className="event-item-btn">View Details</a>
            </li>
                
        )
    }
    return (
        <li className="event-item" key={eventName}>
            <div className="event-name-date-wrapper">
                <h3 className="event-item-name">{eventName}</h3>
                <p className="event-item-datetime">{convertDate(startDate)} to {convertDate(endDate)}</p>
            </div>
            <a href={signup} target="_blank" rel="noopener noreferrer" className="event-item-btn">View Details</a>
        </li>
            
    )
}

const Events = () => {
    const [events, setEvents] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const isUpcoming = (startDate) => {
        const day = parseInt(startDate.slice(0, 10).replace('-', '').replace('-', ''))
        const timeString = parseInt(startDate.slice(11, 22).replace(':', '').replace(':', '').replace('.', ''))
        const today = parseInt(new Date().toJSON().slice(0, 10).replace('-', '').replace('-', ''))
        const currenttimeString = parseInt(new Date().toJSON().slice(11, 22).replace(':', '').replace(':', '').replace('.', ''))
        return ((day > today) ? true : (timeString > currenttimeString))
    }

    useEffect(() => {
        fetch("https://lively-sopapillas-a28532.netlify.app/")
            .then(response => {
                response = response.json()
                console.log('response', response.result)
                // const upcoming = response.data.filter(event => isUpcoming(event.date.start))
                // setEvents(upcoming)
                // setIsLoaded(true)
            })
    }, [])

    return (
        <DocumentTitle title='Events'>
            <div className="upcoming-events main" >
                <h1 className="header">Upcoming Events</h1>
                <EventsContent isLoaded={isLoaded} events={events} />
            </div>
        </DocumentTitle>
    )
}

const EventsContent = ({ isLoaded, events }) => {

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    if (events.length === 0 && isLoaded) {
        return <p>We are currently planning events... sign up to the mailing list to get notified!</p>
    }

    return (
        <ul className="upcoming-events-list">
            {events.map(e => 
                <UpcomingEvent event={e} />
            )}
        </ul>
    )

}

export default Events