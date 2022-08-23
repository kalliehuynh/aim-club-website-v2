import EventServices from "../../services/EventServices";

const Events = () => {
    const handleClick = () => {
        console.log('yay');
        EventServices
            .getAll()
            .then(response => {
                console.log('response.data', response.data)
            })
    }
    return (
        <div>
            <button onClick={handleClick}>fetch</button>
        </div>
    )
}

export default Events