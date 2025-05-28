import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import men from './image/mimages.jpeg';
import wmen from './image/wimages.jpeg';
import kid from './image/kimages.jpeg';
import k1 from './image/k1.jpeg'; 
import k2 from './image/k2.jpeg';
import k3 from './image/k3.jpeg';
import k4 from './image/k4.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Spinner from 'react-bootstrap/Spinner';
import m1 from './image/m1.jpeg';
import m2 from './image/m2.jpeg';
import m3 from './image/m3.jpeg';
import m4 from './image/m4.jpeg';
import w1 from './image/w1.jpeg';
import w2 from './image/w2.jpeg';
import w3 from './image/w3.jpeg';
import w4 from './image/w4.jpeg';
const App=()=>{
  return(
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container style={{boxShadow:"2px 2px 0px 1px solid black"}}>
          <Navbar.Brand href="#home">Book Your Feets</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h1 style={{color:"blue",display:"flex" ,justifyContent:"center",fontFamily:"cursive"}}>Welcome to Book Your Feets ,Here is something you may like </h1>

      <Carousel fade>
      <Carousel.Item>
        <img src={wmen} style={{width:"100%",height:"400px"}}/>
        <Carousel.Caption>
          <h3 style={{color:"black", fontFamily:"cursive"}}>For women</h3>
          <p style={{color:"black", fontFamily:"cursive"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={men} style={{width:"100%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>For Men</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={kid} style={{width:"100%",height:"400px"}}/>
        <Carousel.Caption>
          <h3 style={{color:"black", fontFamily:"cursive"}}>For Kids</h3>
          <p style={{color:"black", fontFamily:"cursive"}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <br></br>

     <Container>
      <h1 style={{color:"blue",display:"flex" ,justifyContent:"center",fontFamily:"cursive"}}>For Kids</h1>
      <Row>
        <Col>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={k1} style={{width:"286px",height: "300px"}}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={k2} style={{width:"286px",height: "300px"}} />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={k3} style={{width:"286px",height: "300px"}}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={k4} style={{width:"286px",height: "300px"}}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>


      <br></br>

      <h1 style={{color:"blue",display:"flex" ,justifyContent:"center",fontFamily:"cursive"}}>For Mens</h1>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={m1} style={{width:"286px",height: "300px"}}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={m2} style={{width:"286px",height: "300px"}}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={m3} style={{width:"286px",height: "300px"}}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={m4} style={{width:"286px",height: "300px"}} />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>


      <br></br>

      <h1 style={{color:"blue",display:"flex" ,justifyContent:"center",fontFamily:"cursive"}}>For Womens</h1>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={w1} style={{width:"286px",height: "300px"}}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={w2} style={{width:"286px",height: "300px"}}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>
         <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={w3} style={{width:"286px",height: "300px"}}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={w4} style={{width:"286px",height: "300px"}}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container> 
<br></br><br></br>
    {/* <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" /> */}

    <footer className="bg-primary text-white text-center text-lg-start mt-5">
     <Container className="p-4">
     <Row>
      <Col lg={6} md={12} className="mb-4 mb-md-0">
        <h5 className="text-uppercase">Book Your Feets</h5>
        <p>
          Discover the best in footwear for men, women, and kids. Quality, style, and comfort – all in one place.
        </p>
      </Col>

      <Col lg={3} md={6} className="mb-4 mb-md-0">
        <h5 className="text-uppercase">Quick Links</h5>
        <ul className="list-unstyled mb-0">
          <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
          <li><a href="#features" className="text-white text-decoration-none">Features</a></li>
          <li><a href="#contact" className="text-white text-decoration-none">Contact Us</a></li>
          <li><a href="#about" className="text-white text-decoration-none">About</a></li>
        </ul>
      </Col>

      <Col lg={3} md={6} className="mb-4 mb-md-0">
        <h5 className="text-uppercase">Contact</h5>
        <ul className="list-unstyled mb-0">
          <li>Email: support@bookyourfeets.com</li>
          <li>Phone: +91-9876543210</li>
          <li>Location: Delhi, India</li>
        </ul>
      </Col>
     </Row>
     </Container>

     <div className="text-center p-3 bg-dark">
       © {new Date().getFullYear()} Book Your Feets. All Rights Reserved.
     </div>
    </footer>


    </> 
  )
}

export default App;