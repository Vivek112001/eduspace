import { Avatar, Button, TextField, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import db, { storage } from "../../Lib/Firebase";
import "./style.css";
import firebase from "firebase/compat/app";
import { useLocalContext } from "../../context/createclasscontext";
import Announcment from "../Announcement/Announcement";
const Main = ({ classData }) => {
  const { loggedInMail } = useLocalContext();

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(false);



  const handleChange = (e) => {
    if (e.target.files[0]) {

      setType(getFileType(e.target.files[0]));
      console.log(type);
      setImage(e.target.files[0]);
    }
  };

  function getFileType(file) {
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop().toLowerCase();

    // Check file extension
    if (fileExtension === 'pdf') {
      return 'pdf';
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
      return 'image';
    }
    // Check MIME type as an alternative
    const fileMimeType = file.type;
    if (fileMimeType === 'application/pdf') {
      return 'pdf';
    } else if (fileMimeType.includes('image/')) {
      return 'image';
    }
    // Default case
    return 'unknown';
  }

  const handleUpload = () => {
    if (image == null) {
      setIsLoading(true);
      console.log("Enter file ")
      db.collection("announcments")
        .doc("classes")
        .collection(classData.id)
        .add({
          timstamp: firebase.firestore.FieldValue.serverTimestamp(),
          text: inputValue,
          sender: loggedInMail,
          type: null,
        }).then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error uploading announcement:", error);
          setIsLoading(false);
        });;
    }
    else {
      setIsLoading(true);
       // eslint-disable-next-line
      const uploadImage = storage.ref(`images/${image.name}`).put(image).then(() => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("announcments")
              .doc("classes")
              .collection(classData.id)
              .add({
                timstamp: firebase.firestore.FieldValue.serverTimestamp(),
                imageUrl: url,
                text: inputValue,
                sender: loggedInMail,
                type: type,
              }).then(() => {
                setIsLoading(false);
              })
              .catch((error) => {
                console.log("Error uploading announcement:", error);
                setIsLoading(false);
              });
          });
      }).catch((error) => {
        console.log("Error uploading announcement:", error);
        setIsLoading(false);
      });
    }
  };
  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__content">
          <div className="main__wrapper1">
            <div className="main__bgImage">
              <div className="main__emptyStyles" />
            </div>
            <div className="main__text">
              <h1 className="main__heading main__overflow">
                {classData.className}
              </h1>
              <div className="main__section main__overflow">
                {classData.section}
              </div>
              <div className="main__wrapper2">
                <em className="main__code">Class Code :</em>
                <div className="main__id">{classData.id}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__announce">
          <div className="main__status">
            <p>Welcome</p>
            <p className="main__subText">To our class</p>
          </div>
          <div className="main__announcements">
            <div className="main__announcementsWrapper">
              <div className="main__ancContent">
                {showInput ? (
                  <div className="main__form">
                    <TextField
                      id="filled-multiline-flexible"
                      multiline
                      label="Announce Something to class"
                      variant="filled"
                      value={inputValue}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="main__buttons">
                      <input
                        onChange={handleChange}
                        variant="outlined"
                        color="primary"
                        type="file"
                      />

                      <div>
                        <Button onClick={() => setShowInput(false)}>
                          Cancel
                        </Button>
                        <Button
                          onClick={handleUpload}
                          color="primary"
                          variant="contained" >
                          Post
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="main__wrapper100"
                    onClick={() => setShowInput(true)} >
                      <Avatar />                      
                    <div>Announce Something to class</div>
                  </div>
                )}
              </div>
            </div>
            {isLoading ? (
              <div className="spinner"> <CircularProgress color="primary" /></div>
             
            ) : (<Announcment classData={classData} />)}
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;