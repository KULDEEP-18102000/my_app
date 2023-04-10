import React, { useState } from 'react';
import { Link,useLocation, useNavigate} from "react-router-dom";


const Login = () => {
    // const admin_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNjQ2MjYwYzcwOTMxMDQwNjUwMGZhIn0sImlhdCI6MTY3MzAyMjQ0NX0.-9RBL-4fu9UGomZe-HZUAMKEAyYeV4VAgB-kM9bhgTY";
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/user/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const json = await response.json();
      console.log(json);
  
      if (json.success) {
        localStorage.setItem('token', json.authtoken);
        // const response = await fetch(`http://localhost:5000/api/admin/getallusers`, {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'auth-token': localStorage.getItem('token')
        //   },
        // });
        // const data = await response.json();
        // for (var i = 0; i < data.length; i++) {
        //   if (data[i].email == credentials.email) {
        //     if (data[i].approval == true) {
        //       navigate("/approveduser");
        //     }
        //     else {
        //       navigate("/visitor");
        //     }
        //   }
        // }
        // console.log(data[0]);
  
        // const data = jwt.verify(json.authtoken, JWT_SECRET);
        // console.log(data);
        if (credentials.email == "jadonkuldeepsingh2@gmail.com" && credentials.password == "kuldeepjadon") {
          console.log(credentials.email);
          navigate("/");
        }
        
      } 
    
    }
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
      <div className='mt-3'>
        <h2>Login to continue to Inventory Management system</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' id="Password" />
          </div>
  
          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
      </div>
    )
  }
  
  export default Login