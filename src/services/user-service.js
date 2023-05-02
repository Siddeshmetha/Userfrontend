import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios.post("/signup", user).then((response) => response.data);
};


export const loginUser = (loginDetail) => {
  return myAxios
    .post("/login", loginDetail)
    .then((response) => response.data);
};

export const getall = () => {
  return myAxios.get(`/task/fetch`).then((resp) => resp.data);
};

export const createTask = (data) => {
  return myAxios.post(`/task/createTask`, data).then((resp) => resp.data);
};

export const getcurrentuser = () => {
  // const token = localStorage.getItem('data');
  return myAxios.get('http://localhost:8080/current-user/').then((resp) => resp.data)
};

