
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

export default function KeyCard(props) {

    return (
        <>
       
            <Button className=" bg-light text-dark" style={{ 'margin': '1px', 'padding': '10px', 'height':'60px'}}>
                {/* <Card className='m-2 align-center' style={{ width: '4em', height: '4em' }}>{props.letter}</Card> */}
                {/* <div className='' >{props.letter}</div> */}
                {props.letter}
            </Button>
        
            
        </>
    )
}