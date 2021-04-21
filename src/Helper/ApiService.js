import axios from 'axios';

const Instance = axios.create({
    baseURL: '`http://localhost:4000/users/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+ localStorage.getItem("token")}
  });

  export default Instance;