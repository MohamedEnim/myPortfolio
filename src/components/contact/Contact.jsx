import React, { useState, useEffect } from "react";
import "./Contact.css";

import Input from "./input/Input";
import Textarea from "./textarea/Textarea";
import ContactInfo from "./contactInfo/ContactInfo";
import { KeysToComponentMap } from "../../utils/mapTocomponent";
import { useForm } from "react-hook-form";
import firebase from "./../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ data, selected }) => {
  const [email, setEmail] = useState();

  useEffect(() => {
    setEmail({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }, []);

  const { register, handleSubmit, reset, watch, formState } = useForm();

  const name = watch("name");
  const emailW = watch("email");
  const subject = watch("subject");
  const message = watch("message");

  let isValid = name && emailW && subject && message && true;

  const notifySuccess = (message) => toast.success(message);
  const notifyFailer = (message) => toast.error(message);

  const onSubmit = async (dataForm) => {
    const docRef = await firebase.addDoc(
      firebase.collection(firebase.db, "emails"),
      dataForm
    );

    if (docRef.id) {
      notifySuccess(data?.emailSent);
    } else {
      notifyFailer(data?.emailFailed);
    }

    reset(email);
  };

  return (
    <div
      className={`contact section ${
        selected === "contact" ? "section--active" : " "
      }`}
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="section__title padd-15">
            <h2>{data?.contactTitle}</h2>
          </div>
        </div>

        <h3 className="contact__title padd-15">{data?.contactMessage} ?</h3>
        <h4 className="contact__subTitle padd-15">{data?.contactSubTitle}</h4>

        <div className="row">
          <div className="contact__infoWrapper padd-15">
            {data?.contactDetails.map((item, index) => (
              <ContactInfo
                key={index}
                title={item.title}
                content={item.content}
                icon={KeysToComponentMap[item.icon]}
              />
            ))}
          </div>
        </div>

        <h3 className="contact__title padd-15">{data?.formTitle}</h3>
        <h4 className="contact__subTitle padd-15">{data?.formSubTitle}</h4>

        <div className="row">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-form padd-15">
              <div className="row">
                <Input
                  type="text"
                  placeholder={data?.placeholderName}
                  size="col-6"
                  name="name"
                  register={register}
                  errors={formState.errors}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder={data?.placeholderEmail}
                  size="col-6"
                  register={register}
                  errors={formState.errors}
                />
              </div>

              <div className="row">
                <Input
                  type="text"
                  name="subject"
                  placeholder={data?.placeholderSubject}
                  size="col-12"
                  register={register}
                  errors={formState.errors}
                />
              </div>

              <div className="row">
                <Textarea
                  name="message"
                  placeholder={data?.placeholderMsg}
                  size="col-12"
                  register={register}
                  errors={formState.errors}
                />
              </div>

              <div className="row">
                <div className=" col-12 padd-15">
                  <button
                    type="submit"
                    className={`contact__btn ${isValid ? "btn--anabled" : " "}`}
                    disabled={!isValid}
                  >
                    {data?.buttonTitle}
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
