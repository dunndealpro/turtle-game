import { motion } from "framer-motion";
import Col from 'react-bootstrap/Col';
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

    classDisplay = classDisplay + ' tile'


    return (
        <>
            {/* <Col > */}
                <div className={classDisplay} >
                    <div className="font-size">
                        {props.letter}
                    </div>
                </div>
            {/* </Col> */}
        </>
    )
}

