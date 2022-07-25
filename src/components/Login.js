import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Signimg from './Signimg';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: ""

  })
  //const [data,setData] = useState([]);
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
    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === ""){
      alert('email field is requred!');

    }
    else if (!email.includes("@")) {
      alert('enter a valid email id');

    }
  
    else if (password === "") {
      alert('password field is required!');

    }
    else {

      console.log("login data fetch succesfully");

      if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password
      });

      if (userlogin.length === 0) {
        alert("invalid details")
    } else {
        console.log("user login succesfulyy");

        localStorage.setItem("user_login", JSON.stringify(userlogin))

        history("/details")
    }


      }
      //localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

    }


    //console.log(inpval);


  }



  return (
    <>
        <div className="container mt-3">
        <section className='d-flex justify-content-between'>
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className='text-center col-lg-6'>Login</h3>
            <Form>
              
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
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

export default Login