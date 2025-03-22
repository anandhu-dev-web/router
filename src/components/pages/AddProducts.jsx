import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AddProducts() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        
        setValidated(true);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                <h2>Add Products</h2>
                </Col>
            </Row>
            <Row className="justify-content-center py-4">
                <Col>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Product name</Form.Label>
                                <Form.Control required type="text" placeholder="Product name" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Product Details</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Product Details"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustomUsername">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control
                                    type="textarea"
                                    placeholder="Product Description"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter the products description.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom03">
                                <Form.Label>Product Image</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the path"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please add the photos of your products.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button type="submit">Add products</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddProducts;
