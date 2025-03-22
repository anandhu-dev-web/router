import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity(event) === false) {
      event.stopPropagation();
    }
    else{
        const loginData = {
        }
        console.log("login data-----" , loginData);
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col}  controlId="validationCustomUsername" className="postition-relative">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(event)=>(event.target.value)}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    Please enter your email.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback tooltip>
                    Email looks good.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom03" className="position-relative">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                 placeholder="Password"
                  required 
                  onChange={(event)=>(event.target.value)}
                  />
                <Form.Control.Feedback type="invalid">
                  Please your password.
                </Form.Control.Feedback>
                <Form.Control.Feedback tooltip>
                  Password looks good.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit" className="w-100">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
