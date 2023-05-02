import React, { useState} from 'react'
import {  useNavigate } from 'react-router-dom'

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
import { createTask } from '../services/user-service'


const CreateTask = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        taskName: ""
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
    taskName: ""
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

  createTask(data).then((resp) => {
      console.log(resp);
      console.log("success log");
      toast.success("Task is Created successfully !! task id " + resp.taskId);
    //   setData({
    //     taskName: "",
      
    // });
    navigate("/tasks")
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
            <CardHeader>
              <h3> Create Task!!</h3>
            </CardHeader>

            <CardBody>
              {/* creating form */}

              <Form onSubmit={submitForm}>
                {/* Name field */}
                <FormGroup>
                  <Label for="taskName"> Task</Label>
                  <Input
                    type="text"
                    placeholder="Enter here"
                    id="taskName"
                    onChange={(e) => handleChange(e, "taskName")}
                    value={data.taskName}
                    invalid={
                      error.errors?.response?.data?.taskName ? true : false
                    }
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.taskName}
                  </FormFeedback>
                </FormGroup>

                {/* email field */}
                

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

export default CreateTask