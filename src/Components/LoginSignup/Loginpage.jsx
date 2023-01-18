import React, { useState } from 'react'
import './LoginSignup.css'
import Header from '../Dashboard/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
function Loginpage() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")



  async function SubmitForm(e) {
    console.log(Email, Password)
    let item = {
      "email": Email,
      "password": Password
    }
    e.preventDefault()
    const response = await axios.post("http://127.0.0.1:8000/login", item)

      .then(res => console.log("posting data :", res)
        ,
        alert("login Succes")
      )
      .catch(err => console.log("error found :", err)
        ,
        alert("Username or password is wrong")
      )

  }



  return (
    <div>
      <Header />
      <h2 className='Heading1'>
        Login
      </h2>
      <div className="formsHolder">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>



          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </Form.Group>





          <Button onClick={SubmitForm} variant="primary" >
            Login
          </Button>
        </Form>


      </div>
    </div>
  )
}

export default Loginpage