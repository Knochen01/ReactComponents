const App = () => {
    return (
        <div>
            {/* <First />
            <NamedComponent  name="Mohammed"/>
            <Tweet 
                username="Knochen"
                name="Marian Primak" 
                date={new Date().toLocaleDateString()} 
                message="This app will dirupt everything!!" />
            <Tweet 
                username="Richi Rick"
                name="Daniel Luscherno" 
                date={new Date().toLocaleDateString()} 
                message="This app will dirupt everything!!" />
            <Tweet 
                username="Peter"
                name="John Wick" 
                date={new Date().toLocaleDateString()} 
                message="Ich liebe KaeseKuschen" />
                <Tweet 
                username="Knochen"
                name="Marian Primak" 
                date={new Date().toLocaleDateString()} 
                message="This app will dirupt everything!!" /> */}
            <Person name="Dilyara" age="33" hobbies={["Dancing", "Singing", "Wrestling", "Reading"]} />
            <Person name="Johan" age="14" hobbies={["Dancing", "Singing", "Wrestling", "Reading"]} />
            <Person name="Max" age="99" hobbies={["Dancing", "Singing", "Wrestling", "Reading"]} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))