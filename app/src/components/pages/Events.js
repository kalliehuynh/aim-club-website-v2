import EventServices from "../../services/EventServices";
import EventInfo from "./EventInfo";
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

const UpcomingEvent = ({ event, viewingEvent, setViewingEvent }) => {
    const { name, date, location, desc } = event
    const eventName = name
    const startDate = date.start.slice(0, 10)
    const endDate = date.end.slice(0, 10)
    const startTime = date.start.slice(11, 16)
    const endTime = date.end.slice(11, 16)
    
    const handleClick = (e) => {
        setViewingEvent(event)
    }
    if (startDate === endDate) {
        return (
            <li className="event-item" key={eventName}>
                <div className="event-name-date-wrapper">
                    <h3 className="event-item-name">{eventName}</h3>
                    <p className="event-item-datetime">{convertDate(startDate)}, {convertTimeString(startTime)} - {convertTimeString(endTime)}</p>
                </div>
                <button onClick={handleClick} className="event-item-btn">View Details</button>
            </li>
                
        )
    }
    return (
        <li className="event-item" key={eventName}>
            <div className="event-name-date-wrapper">
                <h3 className="event-item-name">{eventName}</h3>
                <p className="event-item-datetime">{convertDate(startDate)} to {convertDate(endDate)}</p>
            </div>
            <button onClick={handleClick} className="event-item-btn">View Details</button>
        </li>
            
    )

}

const Events = () => {
    const [viewingEvent, setViewingEvent] = useState(null)
    const [events, setEvents] = useState([])

    const isUpcoming = (startDate) => {
        const day = parseInt(startDate.slice(0, 10).replace('-', '').replace('-', ''))
        const timeString = parseInt(startDate.slice(11, 22).replace(':', '').replace(':', '').replace('.', ''))
        const today = parseInt(new Date().toJSON().slice(0, 10).replace('-', '').replace('-', ''))
        const currenttimeString = parseInt(new Date().toJSON().slice(11, 22).replace(':', '').replace(':', '').replace('.', ''))
        return ((day > today) ? true : (timeString > currenttimeString))
    }

    useEffect(() => {
        EventServices
            .getAll()
            .then(response => {
                const upcoming = response.data.filter(event => isUpcoming(event.date.start))
                setEvents(upcoming)
            })
    }, [])

    if (events.length === 0) {
        return (
            <DocumentTitle title='Events'>
            <div className="upcoming-events main" >
                <h1 className="header">Upcoming Events</h1>
                <p>We are still planning events... check back later!</p>
                
            </div>
        </DocumentTitle>
        )
    }
    if (viewingEvent) {
        const { name, date, location, desc } = viewingEvent
        const eventName = name
        const startDate = date.start.slice(0, 10)
        const endDate = date.end.slice(0, 10)
        const startTime = date.start.slice(11, 16)
        const endTime = date.end.slice(11, 16)
        
        return (
            <DocumentTitle title={`AIM events - ${eventName}`}>
                <div className="upcoming-events main" >
                    <h1 className="header">Upcoming Events</h1>
                    <EventInfo
                        eventName={eventName}
                        startDate={convertDate(startDate)}
                        endDate={convertDate(endDate)}
                        startTime={convertTimeString(startTime)}
                        endTime={convertTimeString(endTime)}
                        location={location}
                        desc={desc}
                        setViewingEvent={setViewingEvent}
                    />
                    
                </div>
            </DocumentTitle>
            
        )
    }
    console.log('events', events)
    return (
        <DocumentTitle title='Events'>
            <div className="upcoming-events main" >
                <h1 className="header">Upcoming Events</h1>
                <ul className="upcoming-events-list">
                    {events.map(e => 
                        <UpcomingEvent event={e} setViewingEvent={setViewingEvent} />
                    )}
                </ul>
                
            </div>
        </DocumentTitle>
        
    )
}

export default Events