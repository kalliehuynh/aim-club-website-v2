import './EventInfo.css'

const EventInfo = ({ eventName, startDate, endDate, startTime, endTime, location, desc, setViewingEvent }) => {
    const handleClick = () => {
        setViewingEvent(null)
    }
    if (startDate === endDate) {
        return (
            <div className="main">
                <h1>{eventName}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Date:</td>
                            <td>{startDate} {startTime} - {endTime}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>{location}</td>
                        </tr>
                    </tbody>
                </table>
                <p>{desc}</p>
                <button onClick={handleClick}>Return to all events</button>
            </div>
        )    
    }
    return (
        <div className="main">
            <h1>{eventName}</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Date:</td>
                        <td>{startDate} {startTime} - {endDate} {endTime}</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>{location}</td>
                    </tr>
                </tbody>
            </table>
            <p>{desc}</p>
            <button onClick={handleClick}>Return to all events</button>
        </div>
    )    
}

export default EventInfo