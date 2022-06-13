import React from "react"
import { Card, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../assets/gambar2.jpg'
import image2 from '../../assets/gambar3.png'
import image3 from '../../assets/gambar4.jpg'

function Content() {


    return (
        <>
            <Card style={{ width: '30rem', marginLeft: 'auto',marginRight:'auto', borderRadius: '30px', padding: '20px' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    <Card.Title>Know What Cryptocurrency is and How it Works</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Card.Text>
                </Card.Body>
                
                <Card.Body>
                    <Card.Link href="/detail">See details and Video Course</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '30rem', marginLeft: 'auto',marginRight:'auto', borderRadius: '30px', padding: '20px' }}>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                    <Card.Title>Know What Cryptocurrency is and How it Works</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Card.Text>
                </Card.Body>

                <Card.Body>
                    <Card.Link href="/detail">See details and Video Course</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '30rem', marginLeft: 'auto',marginRight:'auto', borderRadius: '30px', padding: '20px' }}>
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                    <Card.Title>Know What Cryptocurrency is and How it Works</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Card.Text>
                </Card.Body>

                <Card.Body>
                    <Card.Link href="/detail">See details and Video Course</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Content;
