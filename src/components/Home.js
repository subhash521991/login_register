import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Signimg from './Signimg';
import { useState } from 'react'

const Home = () => {
 
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: ""

  })

  const [data,setData] = useState([]);

  const getData = (e) => {

    //console.log(e.target);
    const { value, name } = e.target;
    setInpval(() => {
      return {
          ...inpval,
          [name]: value
      }
  })
 //console.log(inpval);
  }

  const addData = (e) => {
    e.preventDefault();


    const { name, email, date, password } = inpval;
    if (name === "") {
        alert('name field is requred!');
    }
    else if (email === ""){
      alert('email field is requred!');

    }
    else if (!email.includes("@")) {
      alert('enter a valid email id');

    }
    else if (date === "") {
      alert('select a date');

    }
    else if (password === "") {
      alert('password field is required!');

    }
    else {

      console.log("data added succesfully");
      localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

    }


    //console.log(inpval);


  }

 

  return (
    <>
      <div className="container mt-3">
        <section className='d-flex justify-content-between'>
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className='text-center col-lg-6'>Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                <Form.Control type="text" name='name' onChange={getData} placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                <Form.Control type="date" name='date' onChange={getData} placeholder="Select DOB" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
                <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
            </Form>

          </div>

          <Signimg />
        </section>



      </div>


    </>
  )
}

export default Home