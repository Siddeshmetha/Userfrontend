import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Base from "../components/Base";


const Home = () => {
  return (
    <Base>

        <h1 className="text-center" > This is the Home Page </h1>
       <div className="text-left p-5 ">
  


        <h3>The application  consists the following pages:</h3>
     
        <li>1. A login page that allows users to enter their credentials (username 
and password).</li>
      <li>2. A registration page that allows new users to create an account by 
entering their details (name, email, password).</li>
      <li>3. A dashboard page that displays information depending on the user's 
role (admin, manager, or regular user). The dashboard should have 
different sections for each role.</li>
      <li>
4. An admin page that allows admins to manage users (create, edit, 
delete).</li>
      <li>5. A manager page that allows managers to manage tasks (create, edit, 
delete).</li>
      <li>6. A user page that allows regular users to view and update their profile 
information.</li></div> 
     
    
    





    </Base>
  );
};

export default Home;
