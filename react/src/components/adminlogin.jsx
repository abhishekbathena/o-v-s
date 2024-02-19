import React from "react";
import { Header } from "./homepage";
import { Auth } from "./loginpage";
import "./login.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Adminloginpage(props) {
  const [ausername, setausername] = useState("");
  const [apassword, setapassword] = useState("");

  let s = useNavigate();
  function signupr() {
    s("/sign");
  }
  function homer() {
    s("/pro");
  }

  const asub = (req, res) => {
    const data = { username: ausername, password: apassword };
    axios.post("http://localhost:8000/reg/adminlogin", data).then((res) => {
      if (!res.data.token) {
        console.log(res);
      } else {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        localStorage.setItem("adauth", true);
        localStorage.setItem("name", data.username);
        localStorage.setItem("aid", res.data.result.id);

        AAuthL();
      }
    });
  };

  const AAuthL = (req, res) => {
    axios
      .get("http://localhost:8000/reg/isUserAuth", {
        headers: { "x-access-token": localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.data.m === "ok") {
          s("/pro");
          window.location.reload();
          console.log(res);
        } else {
        }
      });
  };

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
      <div>
        {" "}
        <Header
          login="login"
          h={signupr}
          closen="Close ×"
          close={closetoggle}
          sidebarclass="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
          toggl={toggle}
          sidebar="mySidebar"
          home="Home"
          loginfont="fa fa-usd"
          navi={homer}
        />
      </div>
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
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <form>
                            <h4 class="mb-4 pb-3">Log In</h4>
                            <div class="form-group">
                              <input
                                onChange={(event) => {
                                  setausername(event.target.value);
                                }}
                                type="text"
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
                                onChange={(event) => {
                                  setapassword(event.target.value);
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
                            <a onClick={asub} class="btn mt-4">
                              submit
                            </a>

                            <p class="mb-0 mt-4 text-center">
                              <a href="#0" class="link">
                                Forgot your password?
                              </a>
                            </p>
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

export default Adminloginpage;
