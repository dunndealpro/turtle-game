import KeyCard from "../KeyCard/KeyCard";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import EnterKey from "../EnterKey/EnterKey";
import BackKey from "../BackKey/BackKey";

export default function KeyBoardContainer() {

    const topRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    const midRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    const botRow = ["z", "x", "c", "v", "b", "n", "m"]


    return (
        <>


            <div>
                {topRow.map((letter) => (
                    <KeyCard
                        key={letter.toString()}
                        letter={letter}
                    />
                ))}

            </div>
            <div>
                {midRow.map((letter) => (
                    <KeyCard
                        key={letter.toString()}
                        letter={letter}
                    />
                ))}

            </div>
            <div>
                <EnterKey/>
                {botRow.map((letter) => (
                    <KeyCard
                        key={letter.toString()}
                        letter={letter}
                    />
                ))}
                <BackKey/>

            </div>





        </>
    )
}