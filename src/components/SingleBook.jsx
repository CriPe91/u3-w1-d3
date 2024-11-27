import { Card, Col, Container, Row } from "react-bootstrap";

const SingleBook = (props) => (
  <Container>
    <Row className="justify-content-center">
      <Col>
        <Card bg="light">
          <Card.Img variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title>{props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
export default SingleBook;
