import React, { useEffect, useState, useReducer } from 'react'
// import CrNavbar from '../components/CrNavbar'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import CustomNavbar from '../components/CustomNavbar'
import { myAxios } from '../services/helper'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Row,
  } from "reactstrap";
import Base from '../components/Base'
import { toast } from 'react-toastify'


const CreateUser = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
});

const [error, setError] = useState({
  errors: {},
  isError: false,
});

// handle change
const handleChange = (event, property) => {
  //dynamic setting the values
  setData({ ...data, [property]: event.target.value });
};

//reseting the form
const resetData = () => {
  setData({
    name: "",
    email: "",
    password: "",
    role: "",
  });
};

//submit the form
const submitForm = (event) => {
  event.preventDefault();

  // if(error.isError){
  //   toast.error("Form data is invalid , correct all details then submit. ");
  //   setError({...error,isError:false})
  //   return;
  // }
    event.preventDefault();
    myAxios.post("/user/createUser",data).then((resp) => {
      console.log(resp);
      console.log("success log");
      toast.success("User is Created successfully !! user id " + resp.id);
      setData({
        name: "",
        email: "",
        password: "",
        role: "",
    });
    navigate("/services")
})
.catch((error) => {
    console.log(error);
    console.log("Error log");
    //handle errors in proper way
    setError({
        errors: error,
        isError: true,
    });
    });

};

const handleBack = (e) => {
    e.preventDefault();
    navigate(-1)
}


return (
  <Base>
    <Container>
      <Row className="mt-4">
        {/* { JSON.stringify(data) } */}

        <Col sm={{ size: 6, offset: 3 }}>
          <Card color="dark" inverse>
            <CardHeader className='text-center'>
              <h3> Create User !!</h3>
            </CardHeader>

            <CardBody>
              {/* creating form */}

              <Form onSubmit={submitForm}>
                {/* Name field */}
                <FormGroup>
                  <Label for="name">Enter Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter here"
                    id="name"
                    onChange={(e) => handleChange(e, "name")}
                    value={data.name}
                    invalid={
                      error.errors?.response?.data?.name ? true : false
                    }
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.name}
                  </FormFeedback>
                </FormGroup>

                {/* email field */}
                <FormGroup>
                  <Label for="email">Enter Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter here"
                    id="email"
                    onChange={(e) => handleChange(e, "email")}
                    value={data.email}
                    invalid={
                      error.errors?.response?.data?.email ? true : false
                    }
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.email}
                  </FormFeedback>
                </FormGroup>

                {/* password field */}
                <FormGroup>
                  <Label for="password">Enter password</Label>
                  <Input
                    type="password"
                    placeholder="Enter here"
                    id="password"
                    onChange={(e) => handleChange(e, "password")}
                    value={data.password}
                    invalid={
                      error.errors?.response?.data?.password ? true : false
                    }
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.password}
                  </FormFeedback>
                </FormGroup>

                {/* about field */}
                <FormGroup>
                  <Label for="Role">Role</Label>
                  <Input
                    type="role"
                    placeholder="Enter here"
                    id="role"
                    onChange={(e) => handleChange(e, "role")}
                    value={data.role}
                    invalid={
                      error.errors?.response?.data?.role ? true : false
                    }
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.role}
                  </FormFeedback>
                </FormGroup> 

                <Container className="text-center">
                  <Button type="submit" outline color="light">
                    Create
                  </Button>
                  <Button
                    onClick={resetData}
                    color="secondary"
                    type="reset"
                    className="ms-2"
                  >
                    Reset
                  </Button>
                  <button type="" className="btn btn-danger ms-2" outline color="light" onClick={handleBack} >Back</button>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </Base>
    );
}

export default CreateUser