import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Base from "./components/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Userdashboard from "./pages/user-routes/Userdashboard";
import Privateroute from "./components/Privateroute";
import ProfileInfo from "./pages/user-routes/ProfileInfo";
import PostPage from "./pages/PostPage";
import UserProvider from "./context/UserProvider";
import UpdateBlog from "./pages/UpdateBlog";
import NotFound from "./components/Notfound";
import TaskTable from "./pages/TaskTable";
import Update from "./pages/Update";
import UpdateTask from "./pages/UpdateTask";
import Docs from "./components/Docs";
import CreateUser from "./pages/CreateUser";
import CurrentUserCard from "./components/CurrentUserCard";
import CreateTask from "./pages/CreateTask";


function App() {
  return (
    <UserProvider>        
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tasks" element={<TaskTable/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/update" element={<Update/>} />
          <Route path="/updatetask" element={<UpdateTask/>} />
          <Route path="/createUser" element={<CreateUser/>} />
          <Route path="/createtask" element={<CreateTask/>} />
          <Route path="/docs" element={<Docs/>} />
          <Route path="/current-user" element={<CurrentUserCard/>} />
          {/* <Route path="/posts/:postId" element={<PostPage />} /> */}
          {/* <Route path="/categories/:categoryId" element={<Categories />} /> */}

          <Route path="/user" element={<Privateroute />}>
            <Route path="dashboard" element={<Userdashboard />} />
            <Route path="profile-info/:userId" element={<ProfileInfo />} />
            {/* <Route path="update-blog/:blogId" element={<UpdateBlog />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
