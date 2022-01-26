import React from "react";
import "./Textarea.css";

const Textarea = ({ placeholder, size, register, name, errors }) => {
  return (
    <div className={`form-group padd-15 ${size}`}>
      <textarea
        name=""
        className="form-control"
        placeholder={placeholder}
        {...register(name, { required: true })}
      ></textarea>
      <span className="error">
        {errors.name && <span>{name} is required</span>}
      </span>
    </div>
  );
};

export default Textarea;
