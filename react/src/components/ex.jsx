import { React, useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Main from "./main";
import "./sample.css";
import { useNavigate } from "react-router";
import web from "../mac.jpg";
import { Avatar } from "./sample";
import { useParams } from "react-router";
import "./mac.jpg";

function Admin(props) {
  return (
    <div>
      <Main
        ad="Addcontest"
        home="/pro"
        votehere="/pro"
        page="Admin"
        card={<Adminmain />}
      />
    </div>
  );
}

function Admincand(props) {
  return (
    <div>
      <Main
        ad="Addcontest"
        home="/pro"
        votehere="/pro"
        page="Result"
        admin={<Canform />}
        card={<Acandidatecard />}
      />
    </div>
  );
}

function Adminmain(props) {
  let l = useNavigate();

  const [listofpositiona, setlistofpositiona] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/reg/position").then((res) => {
      setlistofpositiona(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        {listofpositiona.map((value, key) => {
          return (
            <div
              style={{ paddingRight: "10px" }}
              class="w3-col l4 m6 w3-margin-bottom"
            >
              <div class="w3-card">
                <img src={web} alt="John" style={{ width: "100%" }} />
                <div class="w3-container">
                  <h4>{value.description}</h4>
                  <p class="w3-opacity"></p>
                  <p>
                    <button
                      onClick={() => {
                        l(`/Avote/${value.id}`);
                        localStorage.setItem("aposid", value.id);
                        localStorage.setItem("des", value.description);
                      }}
                      class="w3-button w3-light-grey w3-block"
                    >
                      {" "}
                      View
                    </button>
                  </p>
                  <p>
                    <button
                      onClick={() => {
                        axios
                          .get(
                            `http://localhost:8000/reg/posdelete/${value.id}`
                          )
                          .then((res) => {
                            window.location.reload();
                          });
                      }}
                      class="w3-button w3-light-grey w3-block"
                    >
                      Delete
                    </button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Acandidatecard(props) {
  const [acand, setacand] = useState([]);
  const [cname, setcname] = useState("");
  const [cimg, setcimg] = useState("");

  let m = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/reg/cand/${id}`).then((res) => {
      setacand(res.data);

      console.log(res.data);
    });

    axios.get(`http://localhost:8000/reg/postime/${id}`).then((res) => {
      localStorage.setItem("atime", res.data.Time);
    });
  }, []);

  const [seconds, setseconds] = useState("0");
  const [minute, setminute] = useState("0");
  const [Hours, setHours] = useState("0");

  let interval = useRef();

  const starttimer = () => {
    interval = setInterval(() => {
      const ctar = localStorage.getItem("atime");
      const count = new Date().getTime();
      const distance = ctar - count;
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setHours(hours);
        setminute(min);
        setseconds(sec);
      }
    }, 1000);
  };

  useEffect(() => {
    starttimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const generatecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };

  const requestotp = (e) => {
    setsetting(true);
    generatecaptcha();
    let appverifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, phone, appverifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div>
          <h1 style={{ textAlign: "center" }} className="heading">
            Candidates for {localStorage.getItem("des")}
          </h1>
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                class="rcard"
                style={{
                  margin: "10px",
                  padding: "10px",
                  fontSize: "20px",
                  borderRadius: "10px",
                  width: "50px",
                }}
              >
                {isNaN(Hours) ? "00" : Hours < 10 ? "0" + Hours : Hours}
              </div>
              <div
                style={{
                  margin: "10px",
                  padding: "10px",
                  fontSize: "20px",
                  width: "10px",
                }}
              >
                :
              </div>
              <div
                class="rcard"
                style={{
                  margin: "10px",
                  padding: "10px",
                  fontSize: "20px",
                  borderRadius: "10px",
                  width: "50px",
                }}
              >
                {isNaN(minute) ? "00" : minute < 10 ? "0" + minute : minute}
              </div>
              <div
                style={{ margin: "10px", padding: "10px", fontSize: "20px" }}
              >
                :
              </div>
              <div
                class="rcard"
                style={{
                  margin: "10px",
                  padding: "10px",
                  fontSize: "20px",
                  borderRadius: "10px",
                  width: "50px",
                }}
              >
                {isNaN(seconds) ? "00" : seconds < 10 ? "0" + seconds : seconds}
              </div>
            </div>
          </div>

          <div>
            <div>
              {acand.map((value, key) => {
                return (
                  <div
                    style={{ paddingRight: "10px;" }}
                    className="card w3-col l4 m6  w3-margin-bottom"
                  >
                    <div className="top">
                      <h2 className="name">{value.name}</h2>
                      <Avatar img={value.photo} />
                    </div>
                    <div className="bottom">
                      <a
                        onClick={() => {
                          m(`/Candres/${value.id}`);
                        }}
                        class="btn btn-outline-dark off"
                      >
                        View{" "}
                      </a>
                      <a
                        onClick={() => {
                          axios
                            .post(
                              `http://localhost:8000/reg/candelete/${value.id}`
                            )
                            .then((res) => {
                              window.location.reload();
                            });
                        }}
                        className="btn btn-outline-dark off"
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Canform(props) {
  const [cname, setcname] = useState("");
  const [file, setfile] = useState("");
  const [fileName, setfileName] = useState("");

  let { id } = useParams();

  const saveFile = (e) => {
    setfile(e.target.files[0]);
    setfileName(e.target.files[0].name);
  };

  const csub = (req, res) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("fileName", fileName);

    const data = {
      name: cname,
      photo: fileName,
      description: localStorage.getItem("des"),
      PositionTId: id,
    };
    axios.post("http://localhost:8000/reg/candidateenter", data).then((res) => {
      if (res.data.message === "SUCCESS") {
        window.location.reload();
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
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <form>
                            <h4 style={{ color: "white" }} class="mb-4 pb-3">
                              Enter Candidate Details
                            </h4>
                            <div class="form-group">
                              <input
                                onChange={(event) => {
                                  setcname(event.target.value);
                                }}
                                type="text"
                                name="logemail"
                                class="form-style"
                                placeholder="candidate Name"
                                id="logemail"
                                autocomplete="off"
                                required
                              />
                              <i class="input-icon uil uil-at"></i>
                            </div>
                            <div class="form-group ">
                              {" "}
                              <br />
                              <input
                                onChange={saveFile}
                                type="file"
                                id="myFile"
                                name="filename"
                              />
                              <i class="input-icon uil uil-at"></i>
                            </div>
                            <a onClick={csub} class="btn mt-4">
                              Submit
                            </a>
                            :
                            <p class="mb-0 mt-4 text-center">
                              <a href="" class="link">
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

export default Admin;
export { Adminmain };
export { Acandidatecard };
export { Admincand };
