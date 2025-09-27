import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function Content({ posts }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {posts.map((post, index) => (
        <Col key={index}>
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.description}</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Content;
