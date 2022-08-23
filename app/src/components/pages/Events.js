import EventServices from "../../services/EventServices";
import { useEffect, useState } from 'react'
import './Events.css'
import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'


const UpcomingEvent = ({ event }) => {
    const { name, date, location, desc } = event
    const startDate = date.start.slice(0, 10)
    const endDate = date.end.slice(0, 10)
    const startTime = date.start.slice(11, 16)
    const endTime = date.end.slice(11, 16)
    
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
    const handleClick = (e) => {
        console.log('e.target.value', e.target.value)
    }

    
    if (startDate === endDate) {
        return (
            <li>
                <div className="event-item" key={name}>
                    <h3 className="event-item-name">{name}</h3>
                    <div className="event-item-datetime">
                        <p>{convertDate(startDate)}</p>
                        <p>{convertTimeString(startTime)} - {convertTimeString(endTime)}</p>
                    </div>
                    <Link to={`event-info/${name.toLowerCase().replaceAll(' ', '-')}`} className="event-item-btn">View Details</Link>
                </div>
            </li>
                
        )
    }
    return (
        <li>
            <div className="event-item" key={name} tabIndex={0}>
                <h3 className="event-item-name">{name}</h3>
                <p>{convertDate(startDate)} {convertTimeString(startTime)}</p>
                <p>{convertDate(endDate)} {convertTimeString(endTime)}</p>
                <button onClick={handleClick} className="event-item-btn">View Details</button>
            </div>
        </li>
            
    )

}

const Events = () => {
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
    
    return (
        <DocumentTitle title='Events'>
            <div className="upcoming-events main" >
                <h1 className="header">Upcoming Events</h1>
                <ul className="upcoming-events-list">
                    {events.map(e => 
                        <UpcomingEvent event={e} />
                    )}
                </ul>
                
            </div>
        </DocumentTitle>
        
    )
}

export default Events