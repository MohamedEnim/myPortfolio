import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, size, register, name, errors }) => {
  return (
    <div className={`form-group padd-15 ${size}`}>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...register(name, { required: true })}
      />
      <span className="error">
        {errors.name && <span>Enter a valid {name} </span>}
      </span>
    </div>
  );
};

export default Input;
