import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "../../Lib/Firebase";
import "./style.css";
import img from "../../assets/istockphoto-1209500169-612x612.png"

const Announcment = ({ classData, handleUpload, file }) => {
    const [announcment, setAnnouncment] = useState([]);

    useEffect(() => {
        if (classData) {
            let unsubscribe = db
                .collection("announcments")
                .doc("classes")
                .collection(classData.id).orderBy("timstamp", "desc")
                .onSnapshot((snap) => {
                    setAnnouncment(snap.docs.map((doc) => doc.data()));
                });
            return () => unsubscribe();
        }
         // eslint-disable-next-line
    }, []);
   
    const showLink = (e) => {
        openLinkInNewTab(e);
    };
    const openLinkInNewTab = (url) => {
        window.open(url, "_blank");
    };
    console.log(announcment);
    return (
        <div>
            {announcment.map((item) => (
                <div className="amt">
                    <div className="amt__Cnt">
                        <div className="amt__top">
                            <Avatar />
                            <div>{item.sender}</div>
                        </div>
                        <p className="amt__txt">{item.text}</p>
                        {
                            item.type === null ? null :
                                item.type === "image" ? (
                                    <>
                                        <img className="amt__img" style={{
                                            cursor: "pointer",

                                        }
                                        } src={item.imageUrl} alt={item.text} onClick={() => showLink(item.imageUrl)} />
                                        <div style={{ margin: "0px 0px 15px 10px", cursor: "pointer", color: "blue" }}
                                            onClick={() => showLink(item.imageUrl)}>
                                            Click Image to Open
                                        </div>
                                    </>
                                ) : (
                                    <>

                                        <img className="amt__img" style={{ cursor: "pointer" }} src={img} alt={item.text}
                                            onClick={() => showLink(item.imageUrl)} />
                                        <div style={{ margin: "0px 0px 15px 20px", cursor: "pointer", color: "blue" }}
                                            onClick={() => showLink(item.imageUrl)}>
                                            Click Icon to Open
                                        </div>
                                    </>
                                )
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Announcment;