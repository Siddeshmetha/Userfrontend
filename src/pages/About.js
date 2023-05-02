import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          {console.log(object)}
          <h1>Welcome user: {object.user.login && object.user.data.name}</h1>
          <h1>About Assessment</h1>
      <h3> The application  consists the following pages:</h3>
     
     <h5>1. A login page that allows users to enter their credentials (username 
and password).</h5>
<h5>2. A registration page that allows new users to create an account by 
entering their details (name, email, password).</h5>
<h5>3. A dashboard page that displays information depending on the user's 
role (admin, manager, or regular user). The dashboard should have 
different sections for each role.</h5>
<h5>4. An admin page that allows admins to manage users (create, edit, 
delete).</h5>
<h5>5. A manager page that allows managers to manage tasks (create, edit, 
delete).</h5>
<h5>6. A user page that allows regular users to view and update their profile 
information.</h5>







  
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
