import React from "react";
import { useNavigate } from "react-router-dom";
import web from "../mac.jpg";
import Loginpage from "./loginpage";

function Homepage() {
  let n = useNavigate();

  function loginr() {
    n("/login");
  }

  function toggle() {
    if (document.getElementById("mySidebar").style.display === "block") {
      document.getElementById("mySidebar").style.display = "none";
    } else {
      document.getElementById("mySidebar").style.display = "block";
    }
  }

  function closetoggle() {
    document.getElementById("mySidebar").style.display = "none";
  }

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://qtxasset.com/quartz/qcloud4/media/image/sensorsmag/1541084677/MARKET_1.gif?VersionId=RMmpw.36RkDvuukQoO_CuNzPJHcJ2cXY')",
          height: "110vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header
          closen="Close ×"
          team="TEAM"
          sidebarclass="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
          navi={loginr}
          toggl={toggle}
          close={closetoggle}
          work="WORK"
          login="LOGIN"
          sidebar="mySidebar"
          contact=" CONTACT"
          teamfont="fa fa-user"
          workfont="fa fa-th"
          contactfont="fa fa-envelope"
          loginfont="fa fa-usd"
        />
        <Middle />
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/1682031.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Team />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

function Header(props) {
  return (
    <div>
      <div class="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" className="w3-bar-item w3-button w3-wide">
            O-V-S
          </a>
          <div class="w3-right w3-hide-small">
            <a href="#team" class="w3-bar-item w3-button">
              <i class={props.teamfont}></i> {props.team}
            </a>
            <a href="#work" class="w3-bar-item w3-button">
              <i class={props.workfont}></i> {props.work}
            </a>
            <a href="#contact" class="w3-bar-item w3-button">
              <i class={props.contactfont}> </i>
              {props.contact}{" "}
            </a>
            <a onClick={props.navi} class="w3-bar-item w3-button">
              <i class={props.loginfont}></i> {props.login}
            </a>
          </div>

          <a
            href="javascript:void(0)"
            class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
            onClick={props.toggl}
          >
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>

      <nav className={props.sidebarclass} id={props.sidebar}>
        <a
          href="javascript:void(0)"
          onClick={props.close}
          class="w3-bar-item w3-button w3-large w3-padding-16"
        >
          {props.closen}
        </a>
        <a href="#about" class="w3-bar-item w3-button">
          {props.home}
        </a>
        <a href="#team" class="w3-bar-item w3-button">
          {props.team}
        </a>
        <a href="#work" class="w3-bar-item w3-button">
          {props.work}
        </a>
        <a onClick={props.navi} class="w3-bar-item w3-button">
          {props.login}
        </a>
        <a href="#contact" class="w3-bar-item w3-button">
          {props.contact}
        </a>
      </nav>
    </div>
  );
}

function Middle() {
  let m = useNavigate();
  return (
    <div>
      <>
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                    <h1 style={{ color: "white" }}>
                      Vote For Your{" "}
                      <strong className="brand-name">Favourite</strong> Group
                    </h1>
                    <h2 className="my-3"></h2>
                    <div className="mt-3">
                      <a
                        onClick={() => {
                          m("/sign");
                        }}
                        className="btn-get-started"
                      >
                        {" "}
                        Register Now
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={web}
                      className="img-fluid animated"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <div class="w3-container w3-light-grey" id="contact">
        <h3 class="w3-center">CONTACT</h3>
        <p class="w3-center w3-large">Lets get in touch. Send us a message:</p>
        <div style={{ margintop: "48px" }}>
          <p>
            <i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>
            Kalikiri, Ap
          </p>
          <p>
            <i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone:
            +91 7981759905
          </p>
          <p>
            <i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i>{" "}
            Email: projectV@gmail.com
          </p>
          <br />
          <form>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Name"
                required
                name="Name"
              />
            </p>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Email"
                required
                name="Email"
              />
            </p>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Subject"
                required
                name="Subject"
              />
            </p>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Message"
                required
                name="Message"
              />
            </p>
            <p>
              <button
                onClick={() => {
                  windows.location.reload();
                }}
                class="w3-button w3-black"
                type="submit"
              >
                <i class="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Team(props) {
  return (
    <div>
      <div class="w3-container" style={{ padding: "128px 16px" }} id="team">
        <h3 class="w3-center">THE TEAM</h3>
        <p class="w3-center w3-large">The ones who runs this Website</p>
        <div class="w3-row-padding w3-grayscale" style={{ margintop: "64px" }}>
          <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src={web} alt="John" style={{ width: "100%" }} />
              <div class="w3-container">
                <h3>Abhishek</h3>

                <p>19KA1A0531.</p>
                <p>
                  <button class="w3-button w3-light-grey w3-block">
                    <i class="fa fa-envelope"></i> Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src={web} alt="Jane" style={{ width: "100%" }} />
              <div class="w3-container">
                <h3>Arun</h3>
                <p>19KA1A0525</p>
                <p>
                  <button class="w3-button w3-light-grey w3-block">
                    <i class="fa fa-envelope"></i> Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src={web} alt="Dan" style={{ width: "100%" }} />
              <div class="w3-container">
                <h3>Sita Ram</h3>

                <p>19KA1A0522</p>
                <p>
                  <button class="w3-button w3-light-grey w3-block">
                    <i class="fa fa-envelope"></i> Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src={web} alt="Mike" style={{ width: "100%" }} />
              <div class="w3-container">
                <h3>Dinesh</h3>

                <p>19KA1A0515</p>
                <p>
                  <button class="w3-button w3-light-grey w3-block">
                    <i class="fa fa-envelope"></i> Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src={web} alt="Mike" style={{ width: "100%" }} />
              <div class="w3-container">
                <h3>Sainadh</h3>

                <p>20KA5A0503</p>
                <p>
                  <button class="w3-button w3-light-grey w3-block">
                    <i class="fa fa-envelope"></i> Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer class="w3-center w3-black w3-padding-64">
        <a href="#header" class="w3-button w3-light-grey">
          <i class="fa fa-arrow-up w3-margin-right"></i>To the top
        </a>
        <div class="w3-xlarge w3-section">
          <i class="fa fa-facebook-official w3-hover-opacity"></i>
          <i class="fa fa-instagram w3-hover-opacity"></i>
          <i class="fa fa-snapchat w3-hover-opacity"></i>
          <i class="fa fa-pinterest-p w3-hover-opacity"></i>
          <i class="fa fa-twitter w3-hover-opacity"></i>
          <i class="fa fa-linkedin w3-hover-opacity"></i>
        </div>
        <p>
          Powered by{" "}
          <a href="#" target="_blank" class="w3-hover-text-green">
            V
          </a>
        </p>
      </footer>
    </div>
  );
}

export { Header };
export { Team };
export default Homepage;
