import { Col, Container, Row, Button, Spinner } from 'react-bootstrap'

export const BootstrapSample = () => {
  return (
    <Container>
      <Row xs={2} md={4} lg={6}>
        <Col>1 of 2 <Spinner animation="border" /></Col>
        <Col>2 of 2</Col>
      </Row>
      <Row xs={1} md={2}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row xs="auto">
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>
      </Row>
    </Container>
  )
}
