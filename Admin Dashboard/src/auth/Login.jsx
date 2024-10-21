import React from "react";
import { useForm } from "react-hook-form";
import { auth, signInWithEmailAndPassword } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { Email, Password } = data;

    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="styled-form">
      <input
        type="email"
        {...register("Email", { required: true })}
        placeholder="Enter your Email"
      />
      {errors.Email && <span className="error-msg">This field is required</span>}
      <input
        type="password"
        {...register("Password", { required: true })}
        placeholder="Enter your Password"
      />
      {errors.Password && <span className="error-msg">This field is required</span>}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Login;
