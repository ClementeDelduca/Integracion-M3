import style from "./Form.module.css";
import { useState } from "react";
import validate from "./validation";

export default function Form(props) {
const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
    setErrors(validate({ ...userData, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.login(userData);
  }

  return <form onSubmit={handleSubmit}>
        <label> Email: </label>
        {/*<input type="text" name="email" value={userData.email} onChange={handleChange}*/}
        <input type="text" name="email" placeholder="ejemplo@gmail.com" value={userData.email} onChange={handleChange}
        className={errors.email ? style.error: style.success}/>
        <p>{errors.email}</p>


        <label>Password:</label>
        {/*<input type="password" name="password" value={userData.password} onChange={handleChange}*/}
        <input type="password" name="password" placeholder="Password1%" value={userData.password} onChange={handleChange}
        className={errors.password ? style.error: style.success}/>
        <p>{errors.password}</p>
        
    {/* <input type="submit" value="LOGIN" /> */}
    <button>LOGIN</button>
    </form>
}