const Person = (props) => {
    let vote = props.age >= "18" ? <h3>"Go Vote!"</h3> : <h3>"You must be 18"</h3>
    
    return (
        <div>
            <hr></hr>
            <p>Learn some information about this person</p>
            <p>Name: {props.name.slice(0,6)}</p> 
            <p>{vote}</p>
            <p>Age:  {props.age}</p>
                <ul>
                {props.hobbies.map(data => <li>{data}</li>)}
                </ul>
            <hr></hr>
        </div>
    )
}