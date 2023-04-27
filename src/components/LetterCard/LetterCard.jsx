import { motion } from "framer-motion";
import './style.css'

export default function LetterCard(props) {
    let classDisplay
    if (props.background === 'white') {
        classDisplay = 'border'
    } else if (props.background === "green") {

            classDisplay = 'borderflipG' + props.index

    }
    else if (props.background === "yellow") {

            classDisplay = 'borderflipY' + props.index

    } else if (props.background === "DimGray") {

            classDisplay = 'borderflipDG' + props.index

    }



    // if (props.index === 0){
    //     classDisplay = 'borderflip'+props.index
    // }

    let color = "red"
    // console.log(props.letter)
    return (
        <>

            <div
                className={classDisplay}
            // style={{
            //     // 'background': `${props.background}`,
            //     // 'width': '3em',
            //     // 'height': '3em',
            //     // 'margin': '4px',
            //     // 'padding': '10px',


            // }}
            >
                <strong>
                    {props.letter}
                </strong>
            </div>
        </>
    )
}

