import LetterCard from "../LetterCard/LetterCard";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function GameBoardContainer() {



    return (
        <>
            <div >
                <Container >
                    <Row className='justify-content-center'>
                        <LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard />
                    </Row>
                    <Row className='justify-content-center'>
                        <LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard />
                    </Row>
                    <Row className='justify-content-center'>
                        <LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard />
                    </Row>
                    <Row className='justify-content-center'>
                        <LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard />
                    </Row>
                    <Row className='justify-content-center'>
                        <LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard />
                    </Row>
                    <Row className='justify-content-center'>
                        <LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard /><LetterCard />
                    </Row>
                    
                </Container>

            </div>
        </>
    )
}