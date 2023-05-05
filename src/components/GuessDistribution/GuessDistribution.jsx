// import Chart from "chart.js/auto";
// import BarChart from "../components/BarChart"
import { Container, Row, Col } from "react-bootstrap";

import { Bar } from "react-chartjs-2";
import './GuessDistribution.css'

export default function GuessDistribution(props) {

    //make guess dist into new array
    //iterate through new array, if score === guessNum, get index of score in new array
    //use index to get count of the score
console.log(props.testStuff)
    let guessTotal = props.testStuff.map((num) => num.score)
    console.log(guessTotal)
    let statGuess = [0, 0, 0, 0, 0, 0, 0]
    let statGuessBG = ['5%', '5%', '5%', '5%', '5%', '5%']
    let widthMin = 2.5
    let widthSet = 2.5
    guessTotal.forEach((guess, i) => {
        if (guess === 6) {
            console.log(props.totalGames)
            statGuess.splice(0, 1, props.testStuff[i].count)
            //    let width = (props.testStuff[i].count / props.totalGames).toString() + "%"
            let width = Math.round(((props.testStuff[i].count / props.totalGames)) * 100)
            console.log(width)
            if (width < widthMin ) {
                width = widthSet
            }
            width = width.toString() + "%"
            
            console.log(width)
            statGuessBG.splice(0, 1, width)
        }
        if (guess === 5) {
            console.log(i)
            statGuess.splice(1, 1, props.testStuff[i].count)
            let width = Math.round(((props.testStuff[i].count / props.totalGames)) * 100)
            console.log(width)
            if (width < widthMin ) {
                width = widthSet
            }
            width = width.toString() + "%"
            statGuessBG.splice(1, 1, width)
        }
        if (guess === 4) {
            console.log(i)
            statGuess.splice(2, 1, props.testStuff[i].count)
            let width = Math.round(((props.testStuff[i].count / props.totalGames)) * 100)
            console.log(width)
            if (width < widthMin ) {
                width = widthSet
            }

            width = width.toString() + "%"
            statGuessBG.splice(2, 1, width)
        }
        if (guess === 3) {
            console.log(i)
            statGuess.splice(3, 1, props.testStuff[i].count)
            let width = Math.round(((props.testStuff[i].count / props.totalGames)) * 100)
            console.log(width)
            if (width < widthMin ) {
                width = widthSet
            }
            width = width.toString() + "%"
            statGuessBG.splice(3, 1, width)
        }
        if (guess === 2) {
            console.log(i)
            statGuess.splice(4, 1, props.testStuff[i].count)
            let width = Math.round(((props.testStuff[i].count / props.totalGames)) * 100)
            console.log(width)
            if (width < widthMin ) {
                width = widthSet
            }
            width = width.toString() + "%"
            width = "50%"

            statGuessBG.splice(4, 1, width)
        }
        if (guess === 1) {
            console.log(i)
            statGuess.splice(5, 1, props.testStuff[i].count)
            let width = Math.round(((props.testStuff[i].count / props.totalGames)) * 100)
            console.log(width)
            if (width < widthMin ) {
                width = widthSet
            }
            width = width.toString() + "%"
            width = "50%"
            statGuessBG.splice(5, 1, width)
        }

        if (guess === 0) {
            console.log(i)
            statGuess.splice(6, 1, props.testStuff[i].count)
        }
    })

    console.log(statGuess)
    console.log(statGuessBG)

    // const state ={
    //     labels:["1 guess",'2 guesses', '3 guesses', '4 guesses', '5 guesses', '6 Guesses'],
    //     datasets: {
    //         label: "Guess Dist",
    //         backgroundColor: 'rgba(75,192,192,1)',
    //         borderWidth:2,
    //         data:[props.userScore.]
    //     }
    // }

    let testWidth = '80%'

    return (


        <Container fluid>
            <strong>Guess Distribution</strong>            
            <br /><br />
            <Row>
                <Col xs={1}>1</Col>
                <Col className="mb-1" ><div
                    className="guess"
                    style={{ 'width': `${statGuessBG[0]}` }}
                >{statGuess[0]}</div></Col>
            </Row>
            <Row>
                <Col xs={1}>2</Col>
                <Col className="mb-1" ><div
                    className="guess"
                    style={{ 'width': `${statGuessBG[1]}` }}
                >{statGuess[1]}</div></Col>
            </Row>
            <Row>
                <Col xs={1}>3</Col>
                <Col className="mb-1" ><div
                    className="guess"
                    style={{ 'width': `${statGuessBG[2]}` }}
                >{statGuess[2]}</div></Col>
            </Row>
            <Row>
                <Col xs={1}>4</Col>
                <Col className="mb-1" ><div
                    className="guess"
                    style={{ 'width': `${statGuessBG[3]}` }}
                >{statGuess[3]}</div></Col>
            </Row>
            <Row>
                <Col xs={1}>5</Col>
                <Col className="mb-1" ><div
                    className="guess"
                    style={{ 'width': `${statGuessBG[4]}` }}
                >{statGuess[4]}</div></Col>
            </Row>
            <Row>
                <Col xs={1}>6</Col>
                <Col className="mb-1" ><div
                    className="guess"
                    style={{ 'width': `${statGuessBG[5]}` }}
                >{statGuess[5]}</div></Col>
            </Row>           
        </Container>


    )
}