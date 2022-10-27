const Tweet = (props) => {
    return (
        <ul className="tweet">
            <li>Name: {props.name}</li>
            <li className="username">Username: {props.username}</li>
            <li className="date">Date: {props.date}</li>
            <li><b>{props.message}</b></li>
        </ul>
    )
}