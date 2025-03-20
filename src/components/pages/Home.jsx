import Carousel from 'react-bootstrap/Carousel';
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Carousel interval={3000} controls indicators>
        <Carousel.Item>
          <Image
            src="https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg"
            alt="img-1"
            className="w-100"
            loading="lazy"
          />
          <Carousel.Caption>
            <h3>Exclusive Sale Offer</h3>
            <p>Get the best deals on your favorite brands today!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg"
            alt="img-2"
            className="w-100"
            loading="lazy"
          />
          <Carousel.Caption>
            <h3>New Arrivals</h3>
            <p>Explore the latest trends and fresh styles.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg"
            alt="img-3"
            className="w-100"
            loading="lazy"
          />
          <Carousel.Caption>
            <h3>Limited Time Offer</h3>
            <p>Don't miss out on our exclusive discounts.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-4">
        <Row className="g-4">
          <Col md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51rQ2E8J0YL._SX300_SY300_QL70_FMwebp_.jpg" />
              <Card.Body>
                <Card.Title>Special Discount</Card.Title>
                <Card.Text>
                  Get 50% off on selected items. Hurry up before the offer ends!
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81UaZ5sA0aL._AC_UL480_FMwebp_QL65_.jpg" />
              <Card.Body>
                <Card.Title>Special Discount</Card.Title>
                <Card.Text>
                  Get 50% off on selected items. Hurry up before the offer ends!
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/A18uJUwmalL._AC_UL480_FMwebp_QL65_.jpg" />
              <Card.Body>
                <Card.Title>Special Discount</Card.Title>
                <Card.Text>
                  Get 50% off on selected items. Hurry up before the offer ends!
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81kA1sTqlEL._AC_UL480_FMwebp_QL65_.jpg" />
              <Card.Body>
                <Card.Title>Special Discount</Card.Title>
                <Card.Text>
                  Get 50% off on selected items. Hurry up before the offer ends!
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default Home;
