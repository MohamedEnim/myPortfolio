import React, { useState, useEffect } from "react";
import "./About.css";
import AboutInfo from "./aboutInfo/AboutInfo";
import AboutRow from "./aboutRow/AboutRow";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import firebase from "../../firebase";
import { useTranslation } from "react-i18next";

const About = ({ data, selected, setSelected }) => {
  const { i18n } = useTranslation();
  const [urlResume, setUrlResume] = useState("");

  useEffect(() => {
    const getResume = async () => {
      const querySnapshot = await firebase.getDocs(
        firebase.collection(firebase.db, "resumes")
      );
      let resumeList = [];
      querySnapshot.forEach((doc) => {
        resumeList = [...resumeList, { id: doc.id, data: doc.data() }];
      });

      if (i18n.language === "en") {
        setUrlResume(resumeList[1].data["CV-EN.pdf"]);
      } else {
        setUrlResume(resumeList[0].data["CV-FR.pdf"]);
      }
    };

    getResume();
  }, [i18n.language]);

  return (
    <div
      className={`about section ${
        selected === "about" ? "section--active" : " "
      } `}
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="section__title padd-15">
            <h2>{data?.title}</h2>
          </div>
        </div>

        <div className="row">
          <div className="about__content padd-15">
            <div className="row">
              <AboutInfo description={data?.description} />
            </div>

            <div className="row">
              <div className="personal__info padd-15">
                <div className="row style">
                  <div className="personal__infoLeft padd-15">
                    <table>
                      <tbody>
                        {data?.personalInfoLeft.map((item, index) => (
                          <AboutRow
                            key={index}
                            title={item.title}
                            content={item.content}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="personal__infoRight padd-15">
                    <table>
                      <tbody>
                        {data?.personalInfoRight.map((item, index) => (
                          <AboutRow
                            key={index}
                            title={item.title}
                            content={item.content}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="row">
                  <div className="buttons padd-15">
                    <a
                      href={urlResume}
                      className="btn "
                      download="CV"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SaveAltIcon />
                      <span> {data?.buttonDownload}</span>
                    </a>
                    <a
                      href="#contact"
                      className="btn hire-me"
                      onClick={() => setSelected("contact")}
                    >
                      {data?.buttonHire}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
