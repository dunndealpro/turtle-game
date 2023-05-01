import { motion } from "framer-motion";
import './LetterCard.css'

export default function LetterCard(props) {
    let classDisplay
    if (props.background === 'white') {
        classDisplay = 'bordertest'
    } else if (props.background === "green") {

        classDisplay = 'borderflipG' + props.index

    }
    else if (props.background === "rgb(184, 184, 0)") {

        classDisplay = 'borderflipY' + props.index

    } else if (props.background === "DimGray") {

        classDisplay = 'borderflipDG' + props.index

    }

    classDisplay = classDisplay +  ' tile'

    // if (props.index === 0){
    //     classDisplay = 'borderflip'+props.index
    // }

    let color = "red"
    // console.log(props.letter)
    return (
        <>

            <div
            // style={{
                // 'background': `${props.background}`,
                // 'width': '3em',
                // 'height': '3em',
                // 'margin': '4px',
                // 'padding': '10px',
                // borderWidth: 4
                
                
            // }
            // }
            className={classDisplay}
            >
                <div className="font-size">
                    {/* <strong> */}
                        {props.letter}
                    {/* </strong> */}

                </div>
            </div>
        </>
    )
}

