import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault()
    await dispatch(login('demo@aa.io','password'))
    closeModal()
  };

  return (
    <div className="loginContainer">
      <h1 id="modal-title">Log In</h1>
      <div >
        <form onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
          <div>
          <label>
            Email
            <input
              className="inputBox loginInput"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          </div>
          <div>
          <label>
            Password
            <input
              className="inputBox loginInput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          </div>

          <button className="confirmButtonDesign formButton" type="submit">Log In</button>
          

        </form>
        <button className="confirmButtonDesign formButton" onClick={demoLogin}>Demo Log In</button>
      </div>
    </div>
  );
}

export default LoginFormModal;
