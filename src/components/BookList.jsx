import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <Row className="gy-3">
      {props.books.map((book) => (
        <Col key={book.asin} md={6} lg={4}>
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
