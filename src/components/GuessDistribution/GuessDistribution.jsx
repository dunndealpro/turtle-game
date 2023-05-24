import { Container, Row, Col } from "react-bootstrap";

import './GuessDistribution.css'

export default function GuessDistribution(props) {

    //make guess dist into new array
    //iterate through new array, if score === guessNum, get index of score in new array
    //use index to get count of the score
    let guessTotal = props.guessDist.map((num) => num.score)
    let guess1 = "guess"
    let guess2 = "guess"
    let guess3 = "guess"
    let guess4 = "guess"
    let guess5 = "guess"
    let guess6 = "guess"

    let bold1 = "normal"
    let bold2 = "normal"
    let bold3 = "normal"
    let bold4 = "normal"
    let bold5 = "normal"
    let bold6 = "normal"

    
    let statGuess = [0, 0, 0, 0, 0, 0, 0]
    let statGuessBG = ['5%', '5%', '5%', '5%', '5%', '5%']
    let widthMin = 2.5
    let widthSet = 2.5

    if (props.currentGuessCount === 2){
        guess1 = "guess guess-current"
        bold1 = 'bold'
    }
    if (props.currentGuessCount === 3){
        guess2 = "guess guess-current"
        bold2 = 'bold'
    }
    if (props.currentGuessCount === 4){
        guess3 = "guess guess-current"
        bold3 = 'bold'
    }
    if (props.currentGuessCount === 5){
        guess4 = "guess guess-current"
        bold4 = 'bold'
    }
    if (props.currentGuessCount === 6){
        guess5 = "guess guess-current"
        bold5 = 'bold'
    }
    if (props.currentGuessCount === 7){
        guess6 = "guess guess-current"
        bold6 = 'bold'
    }

    guessTotal.forEach((guess, i) => {
        if (guess === 6) {
            statGuess.splice(0, 1, props.guessDist[i].count)
            let width = Math.round(((props.guessDist[i].count / props.totalGames)) * 100)
            if (width < widthMin ) {
                width = widthSet
            }
            width = width.toString() + "%"
            statGuessBG.splice(0, 1, width)
        }
        if (guess === 5) {
            
            statGuess.splice(1, 1, props.guessDist[i].count)
            let width = Math.round(((props.guessDist[i].count / props.totalGames)) * 100)
            if (width < widthMin ) {
                width = widthSet
            }
            width = width.toString() + "%"
            statGuessBG.splice(1, 1, width)
        }
        if (guess === 4) {
            statGuess.splice(2, 1, props.guessDist[i].count)
            let width = Math.round(((props.guessDist[i].count / props.totalGames)) * 100)
            if (width < widthMin ) {
                width = widthSet
            }
            width = width.toString() + "%"
            statGuessBG.splice(2, 1, width)
        }
        if (guess === 3) {
            statGuess.splice(3, 1, props.guessDist[i].count)
            let width = Math.round(((props.guessDist[i].count / props.totalGames)) * 100)
            if (width < widthMin ) {
                width = widthSet
            }
            width = width.toString() + "%"
            statGuessBG.splice(3, 1, width)
        }
        if (guess === 2) {
            
            statGuess.splice(4, 1, props.guessDist[i].count)
            let width = Math.round(((props.guessDist[i].count / props.totalGames)) * 100)
            if (width < widthMin ) {
                width = widthSet
            }
            width = width.toString() + "%"  
            statGuessBG.splice(4, 1, width)
        }
        if (guess === 1) {
            statGuess.splice(5, 1, props.guessDist[i].count)
            let width = Math.round(((props.guessDist[i].count / props.totalGames)) * 100)
            if (width < widthMin ) {
                width = widthSet
            }
            width = width.toString() + "%"           
            statGuessBG.splice(5, 1, width)
        }
        if (guess === 0) {
            statGuess.splice(6, 1, props.guessDist[i].count)
        }
    })  



    return (
        <Container fluid className=""  >
            <strong>Guess Distribution</strong>            
            <br /><br />
            <Row>
                <Col xs={1} style={{'fontWeight':`${bold1}`}}>1</Col>
                <Col className="mb-1" ><div
                    className={guess1}
                    style={{ 'width': `${statGuessBG[0]}` }}
                >{statGuess[0]}</div></Col>
            </Row>
            <Row>
                <Col xs={1} style={{'fontWeight':`${bold2}`}}>2</Col>
                <Col className="mb-1" ><div
                    className={guess2}
                    style={{ 'width': `${statGuessBG[1]}` }}
                >{statGuess[1]}</div></Col>
            </Row>
            <Row>
                <Col xs={1} style={{'fontWeight':`${bold3}`}}>3</Col>
                <Col className="mb-1" ><div
                    className={guess3}
                    style={{ 'width': `${statGuessBG[2]}` }}
                >{statGuess[2]}</div></Col>
            </Row>
            <Row>
                <Col xs={1} style={{'fontWeight':`${bold4}`}}>4</Col>
                <Col className="mb-1" ><div
                    className={guess4}
                    style={{ 'width': `${statGuessBG[3]}` }}
                >{statGuess[3]}</div></Col>
            </Row>
            <Row>
                <Col xs={1} style={{'fontWeight':`${bold5}`}}>5</Col>
                <Col className="mb-1" ><div
                    className={guess5}
                    style={{ 'width': `${statGuessBG[4]}` }}
                >{statGuess[4]}</div></Col>
            </Row>
            <Row>
                <Col xs={1} style={{'fontWeight':`${bold6}`}}>6</Col>
                <Col className="mb-1" ><div
                    className={guess6}
                    style={{ 'width': `${statGuessBG[5]}` }}
                >{statGuess[5]}</div></Col>
            </Row>           
        </Container>


    )
}