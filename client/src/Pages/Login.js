import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Login() {

  return (
    <Container className='formAlign'>
        
        <Form>
            <h1>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

        </Form>
    </Container>
  );
}

export default Login;