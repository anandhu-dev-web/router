import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import { Container } from "react-bootstrap";

function Register() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    fullName: yup.string().required().min(3,"fullname must contain more than 3 letters"),
    email: yup.string().required().email(),
    password: yup.string().required(),
    phone: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        phone:' ',
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Container>
          <Row>
            <h2>Register</h2>
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Row>
                  <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                      isValid={touched.fullName && !errors.fullName}
                      isInvalid={!!errors.fullName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
 
                  </Form.Group>
                  </Row>
                  <Row>
                  <Form.Group as={Col} md="4" controlId="validationFormik02">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                  </Row>
                  <Row>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormikUsername"
                  >
                    <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                  </Form.Group>
                  </Row>
                  <Row>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormikPhone"
                  >
                    <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                      />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                  </Form.Group>
                  </Row>
                </Row>
                <Button type="submit">Submit form</Button>
              </Form>
          </Row>
        </Container>
      )}
    </Formik>
  );
}

export default Register;
