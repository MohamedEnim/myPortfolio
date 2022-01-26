import React from "react";
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";

const Home = ({ data, selected, setSelected }) => {
  return (
    <div
      className={`home section ${
        selected === "home" ? "section--active" : " "
      }  `}
      id="home"
    >
      <div className="container">
        <div className="row">
          <div className="home__info padd-15">
            <h3 className="home__title">
              {data?.messageName} <span className="name">{data?.name}</span>
            </h3>
            <h3 className="home__description">
              {data?.messageOccupation}{" "}
              <span className="typing">{data?.occupation}</span>
            </h3>

            <div className="home__socialMedia">
              <a
                href="https://www.linkedin.com/in/mohamed-bentaher-1052639b/"
                target="_blank"
                className="m-r"
                rel="noreferrer"
              >
                <IconButton className="home__IconBtn home__linkedIn">
                  <LinkedInIcon />
                </IconButton>
              </a>
              <a
                href="https://github.com/MohamedEnim"
                target="_blank"
                className="m-r"
                rel="noreferrer"
              >
                <IconButton className="home__IconBtn home__github">
                  <GitHubIcon />
                </IconButton>
              </a>
              <a
                href="https://www.facebook.com/med.bentaher.98/"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton className="home__IconBtn home__facebook">
                  <FacebookIcon />
                </IconButton>
              </a>
            </div>

            <a
              href="#about"
              className="home__btn hire-me"
              onClick={() => setSelected("about")}
            >
              {data?.buttonMessage}
            </a>
          </div>

          <div className="home__img padd-15">
            <img src="images/portimg.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
