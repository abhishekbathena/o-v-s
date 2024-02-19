import React, { useEffect } from "react";
import { Header } from "./homepage";
import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";
import axios from "axios";
import Main from "./main";
import authentication from "./firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

function Loginpage(props) {
  let s = useNavigate();
  function signupr() {
    s("/sign");
  }
  function homer() {
    s("/");
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
    <div className="lc">
      <Header
        login="Sign Up"
        h={homer}
        closen="Close ×"
        sidebarclass="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
        close={closetoggle}
        toggl={toggle}
        home="Home"
        sidebar="mySidebar"
        loginfont="fa fa-usd"
        navi={signupr}
      />
      <Auth
        login="card-front"
        tog={
          <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
        }
        signup="card-back"
        header1="Log In"
        header2="Sign Up"
      />
    </div>
  );
}

function Register(props) {
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

  let l = useNavigate();
  function loginr() {
    l("/login");
  }
  function homer() {
    l("/");
  }

  return (
    <div className="lc">
      <Header
        login="login"
        h={homer}
        closen="Close ×"
        close={closetoggle}
        sidebarclass="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
        toggl={toggle}
        sidebar="mySidebar"
        home="Home"
        loginfont="fa fa-usd"
        navi={loginr}
      />
      <Auth
        signup="card-front"
        tog={
          <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
        }
        login="card-back"
        header2="Log In"
        header1="Sign Up"
      />
    </div>
  );
}

function Auth(props) {
  let l = useNavigate();
  let m = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [roll, setroll] = useState("");
  const [email, setemail] = useState("");
  const [lusername, setlusername] = useState("");
  const [lpassword, setlpassword] = useState("");
  const [phone, setphone] = useState("");
  const [otp, setotp] = useState("");
  const [setting, setsetting] = useState(false);

  const [phnval, setphnval] = useState("");

  useEffect(() => {
    axios
      .post(`http://localhost:8000/reg/phonevalidation/${phone}`)
      .then((res) => {
        if (res.data.status === "fail") {
          setphnval("create");
        } else {
          setphnval("");
        }
      });
  });

  const generatecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("verifief");
        },
        defaultCounty: "IN",
      },
      authentication
    );
  };

  const onSignInSubmit = (e) => {
    if (phnval === "create") {
      if (
        (username != "", email != "", password != "", roll != "", phone != "")
      ) {
        e.preventDefault();
        setsetting(true);
        generatecaptcha();
        let phonen = "+91" + phone;
        let appverifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, phonen, appverifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
          })
          .catch((error) => {
            console.log("SMS not sent");
            // ...
            console.log(error);
          });
      } else {
        setsetting(false);
        username != "" ? "" : setuerr("1px solid red");
        password != "" ? "" : setperr("1px solid red");
        roll != "" ? "" : setrerr("1px solid red");
        phone != "" ? "" : setperr("1px solid red");
        email != "" ? "" : setemerr("1px solid red");
      }
    } else {
      setsetting(false);
      username != "" ? "" : setuerr("1px solid red");
      password != "" ? "" : setperr("1px solid red");
      roll != "" ? "" : setrerr("1px solid red");
      phnval != "" ? "" : alert("phone number already registered");
      phone != "" ? "" : setperr("1px solid red");
      email != "" ? "" : setemerr("1px solid red");
    }
  };

  const [uerr, setuerr] = useState("");
  const [perr, setperr] = useState("");
  const [rerr, setrerr] = useState("");
  const [pherr, setpherr] = useState("");
  const [otperr, setotperr] = useState("");
  const [emerr, setemerr] = useState("");
const [luerr, setluerr] = useState("");
const [lperr, setlperr] = useState("");
  const sub = (req, res) => {
    if (
      (otp != "",
      username != "",
      email != "",
      password != "",
      roll != "",
      phone != "")
    ) {
      const code = otp;
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user));
          const data = {
            username: username,
            password: password,
            roll: roll,
            phonenumber: phone,
          };
          axios.post("http://localhost:8000/reg/signup", data).then((res) => {
            if (res.data.message === "SUCCESS") {
              alert("user is verified");
              m("/");
            } else {
              alert("check details");
            }
          });

          // ...
        })
        .catch((error) => {
          alert("not verified");

          // User couldn't sign in (bad verification code?)
          // ...
        });
    } else {
      username != "" ? "" : setuerr("1px solid red");
      password != "" ? "" : setperr("1px solid red");
      otp != "" ? "" : setotperr("1px solid red");
      roll != "" ? "" : setrerr("1px solid red");
      phone != "" ? "" : setperr("1px solid red");
      email != "" ? "" : setemerr("1px solid red");
    }
  };

  const lsub = (req, res) => {
    const data = { username: lusername, password: lpassword };
    axios.post("http://localhost:8000/reg/login", data).then((res) => {
      if ((lusername==""&&lpassword=="")||!res.data.token) {
        lusername != "" ? "" : setluerr("1px solid red");
        lpassword != "" ? "" : setlperr("1px solid red");
        console.log(res);
      } else {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        localStorage.setItem("auth", true);
        localStorage.setItem("name", data.username);
        localStorage.setItem("usid", res.data.result.id);

        AuthL();
      }
    });
  };

  const AuthL = (req, res) => {
    axios
      .get("http://localhost:8000/reg/isUserAuth", {
        headers: { "x-access-token": localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.data.m === "ok") {
          l("/main");
          window.location.reload();
          console.log(res);
        } else {
        }
      });
  };

  return (
    <div>
      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3">
                  <span>{props.header1}</span>
                  <span>{props.header2}</span>
                </h6>
                {props.tog}
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class={props.login}>
                      <div class="center-wrap">
                        <div class="section text-center">
                          <form>
                            <h4 class="mb-4 pb-3">Log In</h4>
                            <div class="form-group">
                              <input
                                style={
                                  lusername != ""
                                    ? { border: "" }
                                    : { border: luerr }
                                }
                                onChange={(event) => {
                                  setlusername(event.target.value);
                                }}
                                type="text"
                                name="logemail"
                                class="form-style"
                                placeholder="Your Username"
                                id="logemail"
                                autocomplete="off"
                                required
                              />
                              <i class="input-icon uil uil-at"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                              style={
                                lpassword != ""
                                  ? { border: "" }
                                  : { border: lperr }
                              }
                                onChange={(event) => {
                                  setlpassword(event.target.value);
                                }}
                                type="password"
                                name="logpass"
                                class="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="off"
                                required
                              />
                              <i class="input-icon uil uil-lock-alt"></i>
                            </div>
                            <a onClick={lsub} class="btn mt-4">
                              submit
                            </a>
{/* 
                            <p class="mb-0 mt-4 text-center">
                              <a href="#0" class="link">
                                Forgot your password?
                              </a>
                            </p> */}
                          </form>
                        </div>
                      </div>
                    </div>
                    <div class={props.signup}>
                      <div class="center-wrap">
                        <div class="section text-center">
                          <form>
                            <div id="sign-in-button"></div>
                            <h4 class="mb-4 pb-3">Sign Up</h4>
                            <div class="form-group">
                              <input
                                style={
                                  username != ""
                                    ? { border: "" }
                                    : { border: uerr }
                                }
                                onChange={(event) => {
                                  setusername(event.target.value);
                                }}
                                type="text"
                                name="logname"
                                class="form-style"
                                placeholder="Your Full Name"
                                id="logname"
                                autocomplete="off"
                                required
                              />
                              <i class="input-icon uil uil-user"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                style={
                                  email != ""
                                    ? { border: "" }
                                    : { border: emerr }
                                }
                                onChange={(event) => {
                                  setemail(event.target.value);
                                }}
                                type="email"
                                name="logemail"
                                class="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autocomplete="off"
                                required
                              />
                              <i class="input-icon uil uil-at"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                style={
                                  password != ""
                                    ? { border: "" }
                                    : { border: perr }
                                }
                                onChange={(event) => {
                                  setpassword(event.target.value);
                                }}
                                type="password"
                                name="logpass"
                                class="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="off"
                                required
                              />
                              <i class="input-icon uil uil-lock-alt"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                style={
                                  roll != "" ? { border: "" } : { border: rerr }
                                }
                                onChange={(event) => {
                                  setroll(event.target.value);
                                }}
                                type="text"
                                name="logRoll"
                                class="form-style"
                                placeholder="Your Roll No"
                                id="logpass"
                                autocomplete="off"
                                required
                              />
                              <i class="input-icon uil uil-lock-alt"></i>
                            </div>
                            <div
                              style={{ display: "flex" }}
                              class="form-group mt-2"
                            >
                              <div>
                                <input
                                  style={
                                    phone != ""
                                      ? { border: "" }
                                      : { border: perr }
                                  }
                                  onChange={(event) => {
                                    setphone(event.target.value);
                                  }}
                                  type="text"
                                  name="logRoll"
                                  class="form-style"
                                  placeholder="Phn num"
                                  required
                                />
                                <i class="input-icon uil uil-lock-alt"></i>
                              </div>
                              <div>
                                
                                {setting ? (
                                  <div class="form-group ml-1">
                                    <input
                                      style={
                                        otp != ""
                                          ? { border: "" }
                                          : { border: otperr }
                                      }
                                      onChange={(event) => {
                                        setotp(event.target.value);
                                      }}
                                      type="text"
                                      name="logRoll"
                                      class="form-style"
                                      placeholder="Otp"
                                      id="logpass"
                                      autocomplete="off"
                                      required
                                    />
                                    <a
                                      onClickCapture={() => {
                                        window.location.reload();
                                        setsetting(false);
                                      }}
                                    >
                                      resend otp
                                    </a>
                                  </div>
                                ) : (
                                  <div class="form-group ml-1">
                                    <a
                                      style={
                                        setting
                                          ? { display: "none" }
                                          : { display: "" }
                                      }
                                      onClick={onSignInSubmit}
                                      class="btn"
                                    >
                                      {" "}
                                      get otp{" "}
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                            <a onClick={sub} class="btn mt-4">
                              submit
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Loginpage;
export { Register };
export { Auth };
