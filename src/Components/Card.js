import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.price} DT</Card.Text>
        <Button variant="primary">Add to card</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
