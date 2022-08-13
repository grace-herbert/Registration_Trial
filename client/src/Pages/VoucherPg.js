import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import {toast} from "react-toastify";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

const initialState = {
    voucherInput: ""
 };
 

function VoucherPg() {

    const navigate = useNavigate();
    const [state, setState] = useState(initialState);
    const voucherInput = state;
  
    const formSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/voucher", (err, res) => {
                
                if (err){
                    res.send(err);
                }else if(!res){
                    res.send("Oops something went wrong here.")
                }else{
                    console.log(state);
                    toast.success("Congratulations, you're registered successfully.");
                    setState(initialState);
                    setTimeout(() => {
                        navigate("/")
                    }, 500); 
                }}).then(() => {
                    setState({
                        voucherInput: "",
                    });
                }).catch((err) => toast.error(err.response.data))
            }

    
        return (
            <Container className='formAlign'>
            <Form onSubmit={formSubmit}>
                
                    <h1>Voucher No.</h1>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='voucher'>Voucher No.</Form.Label>
                            <Form.Control type="password" placeholder="Enter your exclusive voucher no." id= "voucherInput" name= "voucherInput" value={voucherInput} onChange={(e) => {
                                setState(e.target.value)
                            }}/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" onClick={formSubmit} >
                            Enter
                        </Button>
                        <Link to="/">
                            <Button type="button" value= "Go Back" >Go Back</Button>
                    </Link>
                    

                </Form>
                
            </Container>
        );
        };


        export default VoucherPg;