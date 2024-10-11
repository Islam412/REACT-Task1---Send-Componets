export default function Artical(props) {
    console.log("The props are", "props")

    const name = props.name
    const email = props.email
    const age = props.age
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
                <h1>{ name }</h1>
                <pr></pr>
                <h3>{ email }</h3>
                <pr></pr>
                <h3>{ age }</h3>

                <hr></hr>
                <p>sjhkdzxjnjfkxz,dmkaj ebzsn</p>
            </div>
        </>
    )
}
