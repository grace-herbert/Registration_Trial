import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import {toast} from "react-toastify";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";


const initialState = {
    iD: "",
    email: "",
    password: ""
 };
 

function Registration() {
   
    const navigate = useNavigate();
    const [state, setState] = useState(initialState);
    const {iD, email, password} = state;
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state,[name]: value} )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!iD || !email || !password){
            toast.error("Please provide value into each field.");
            
        }else{
            axios.post("http://localhost:5000/register", {
                iD,
                email,
                password
            }).then(() => {
                setState({
                    iD: "",
                    email: "",
                    password: ""
                });
            }).catch((err) => toast.error(err.response.data));
            toast.success("Congratulations, you're registered successfully.");
            setState(initialState);
            setTimeout(() => {
                navigate("/")
            }, 500);
        };
    };
 
 
    
  return (
    <Container className='formAlign'>
     <Form onSubmit={handleSubmit}>
        
            <h1>Register</h1>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='iD'>ID</Form.Label>
                    <Form.Control type={"text"} placeholder="Enter a random username" id= 'iD' name='iD' value={iD} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='email'>Email address</Form.Label>
                    <Form.Control type={"email"} placeholder="Enter email" id= 'email' name='email' value={email} onChange={handleInputChange}/>
                </Form.Group>


                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='spdksa'>Password</Form.Label>
                    <Form.Control type={"password"}  placeholder="Password" id= 'password' name='password' value={password} onChange={handleInputChange}/>
                </Form.Group>
               

                <Button variant="primary" type="submit" value="Save">
                    Register
                </Button>
                <Link to="/">
                    <Button type="button" value= "Go Back" >Go Back</Button>
            </Link>
               

        </Form>
        
    </Container>
  );
};


export default Registration;