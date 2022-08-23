const EventInfo = ({ name, startDate, endDate, startTime, endTime, location, desc }) => {
    if (startDate === endDate) {
        return (
            <div className="main">
                <h1>{name}</h1>
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
                        <tr>
                            <td>Info:</td>
                            <td>{desc}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )    
    }
    return (
        <div className="main">
            <h1>{name}</h1>
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
                    <tr>
                        <td>Info:</td>
                        <td>{desc}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )    
}

export default EventInfo