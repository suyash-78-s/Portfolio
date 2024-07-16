import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';

const MessageMe = () => {
  return (
    <div>
      <section className="contact-section" id="message-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={7} className="text-center">
            <h2 className="mb-4">Have a Question?</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <i className="fas fa-envelope"></i>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <i className="fas fa-phone"></i>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control type="text" placeholder="Enter your phone number" />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter the subject" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="warning" type="submit" className="btn-block">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default MessageMe
