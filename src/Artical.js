export default function Artical({ personalName, email, age, content='no content',children }) {
    return (
        <>
            <div style={{
                backgroundColor: 'lightblue',
                background: 'white',
                boxShadow: '0px 10px 10px gray',
                color: 'black',
                margin: '10px',
                padding: '10px'
            }}>
                <h1>{ personalName }</h1>
                <pr></pr>
                <h3>{ email }</h3>
                <pr></pr>
                <h3>{ age }</h3>

                <hr></hr>
                <p>{ content }</p>
            </div>
        </>
    )
}
