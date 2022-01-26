import React, { useState } from "react";
import firebase from "../../firebase";

const SaveCv = () => {
  const [cv, setCv] = useState({});

  const fileType = ["application/pdf"];

  const handelFile = ({ target }) => {
    let selectedFile = target.files[0];

    if (selectedFile && fileType.includes(selectedFile.type)) {
      const fileName = new Date().getTime() + selectedFile.name + Math.random();
      const storageRef = firebase.ref(firebase.storage, `resumes/${fileName}`);
      const uploadTask = firebase.uploadBytesResumable(
        storageRef,
        selectedFile
      );
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          firebase
            .getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("File available at", downloadURL);
              setCv({ [selectedFile.name]: downloadURL });
            });
        }
      );
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await firebase.addDoc(
        firebase.collection(firebase.db, "resumes"),
        cv
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="saveCv">
      <form onSubmit={handelSubmit}>
        <input type="file" onChange={(e) => handelFile(e)} />
        <button type="submit">Save cv</button>
      </form>
    </div>
  );
};

export default SaveCv;
