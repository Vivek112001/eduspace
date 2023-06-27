import React from 'react'
import logo from "../../assets/logo.png";
import { useLocalContext } from '../../context/createclasscontext';
import "./style.css";
import { Button } from '@mui/material';

export default function Login() {
  const { login, loggedInUser } = useLocalContext();
  console.log(loggedInUser);
  return (
      <>
      <div className="login">
        <img className="login__logo" src={logo} alt="Classroom" />

        <Button variant="contained" color="primary" onClick={() => login()}>
          Login Now!
        </Button>
      </div>
      </>
  )
}
