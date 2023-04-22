export default function LetterCard(props) {

    let color = "red"
    // console.log(props.letter)
    return (
        <>
            <div className='border'
                style={{ 'background': `${props.background}`, 'width': '3em', 'height': '3em', 'margin': '4px', 'padding': '10px', }}

            ><strong>
                    {props.letter}
                </strong></div>
        </>
    )
}

