import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useEffect } from "react";
import Main from "./main";
import "./enter.css";

function Insertdata(props) {
  return (
    <div>
      <Main
        ad="Addcontest"
        page="Result"
        home="/pro"
        votehere="/pro"
        card={<Data />}
      />
    </div>
  );
}

export default Insertdata;

function Data(props) {
  let m = useNavigate();

  const [pname, setpname] = useState("");
  const [Hours, setHours] = useState("");
  const [Minutes, setMinutes] = useState("");
  const [seconds, setseconds] = useState("");
  const [Month, setMonth] = useState("");
  const [dte, setdte] = useState("");
  const [year, setyear] = useState("");

  const psub = (req, res) => {
    const data = {
      description: pname,
      dt: dte,
      month: Month,
      year: year,
      Hours: Hours,
      Minutes: Minutes,
      seconds: seconds,
    };
    axios.post("http://localhost:8000/reg/posenter", data).then((res) => {
      if (res.data.message === "SUCCESS") {
        m("/pro");
      } else {
      }
    });
  };

  return (
    <div className="bc">
      <div class="section">
        <div class="container">
          <div class="col-12 text-center align-self-center py-5">
            <div class="section pb-5 pt-5 pt-sm-2">
              <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper">
                  <div class="">
                    <div class="center-wrap">
                      <div class="text-center">
                        <form>
                          <h4 style={{ color: "Black" }} class="mb-4 pb-3">
                            CREATE YOUR CONTEST
                          </h4>
                          <div class="form-group">
                            <input
                              style={{ marginBottom: "5px" }}
                              onChange={(event) => {
                                setpname(event.target.value);
                              }}
                              type="text"
                              name="logemail"
                              class="form-style"
                              placeholder="Contest Name"
                              id="logemail"
                              autocomplete="off"
                              required
                            />
                            <i class="input-icon uil uil-at"></i>
                            <label style={{color:'black'}}>expires in:</label>
                            <div className="fc" style={{ display: "flex" }}>
                              <div>
                                <input
                                  onChange={(event) => {
                                    setdte(event.target.value);
                                  }}
                                  type="number"
                                  name="posdate"
                                  class="form-style"
                                  placeholder="Date"
                                  id="logemail"
                                  autocomplete="off"
                                  required
                                />
                                <i class="input-icon uil uil-at"></i>
                              </div>
                              <div>
                                <input
                                  onChange={(event) => {
                                    setMonth(event.target.value);
                                  }}
                                  type="text"
                                  name="posmon"
                                  class="form-style"
                                  placeholder="Month"
                                  id="logemail"
                                  autocomplete="off"
                                  required
                                />
                                <i class="input-icon uil uil-at"></i>
                              </div>
                              <div>
                                <input
                                  onChange={(event) => {
                                    setyear(event.target.value);
                                  }}
                                  type="number"
                                  name="posyear"
                                  class="form-style"
                                  placeholder="Year"
                                  id="logemail"
                                  autocomplete="off"
                                  required
                                />
                                <i class="input-icon uil uil-at"></i>
                              </div>
                            </div>
                            <div style={{ textAlign: "center" }}>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  color: "white",
                                }}
                              >
                                <input
                                  onChange={(event) => {
                                    setHours(event.target.value);
                                  }}
                                  type="number"
                                  name="posyear"
                                  placeholder="Hr"
                                  class="rcard"
                                  id="h"
                                  style={{
                                    margin: "10px",
                                    color: "white",
                                    padding: "10px",
                                    fontSize: "15px",
                                    borderRadius: "10px",
                                    backgroundColor: "black",
                                    width: "80px",
                                  }}
                                  required
                                ></input>
                                <div
                                  style={{
                                    margin: "10px",
                                    padding: "10px",
                                    fontSize: "20px",
                                    width: "0px",
                                    color: "white",
                                  }}
                                >
                                  :
                                </div>
                                <input
                                  onChange={(event) => {
                                    setMinutes(event.target.value);
                                  }}
                                  type="number"
                                  name="posyear"
                                  placeholder="Minutes"
                                  class="rcard"
                                  id="m"
                                  style={{
                                    color: "white",
                                    margin: "10px",
                                    padding: "10px",
                                    fontSize: "15px",
                                    borderRadius: "10px",
                                    width: "80px",
                                    backgroundColor: "black",
                                  }}
                                  required
                                ></input>
                                <div
                                  style={{
                                    margin: "10px",
                                    padding: "10px",
                                    fontSize: "20px",
                                    color: "white",
                                  }}
                                >
                                  :
                                </div>
                                <input
                                  onChange={(event) => {
                                    setseconds(event.target.value);
                                  }}
                                  type="number"
                                  name="posyear"
                                  placeholder="Sec"
                                  class="rcard"
                                  id="s"
                                  style={{
                                    color: "white",
                                    margin: "10px",
                                    padding: "10px",
                                    fontSize: "12x",
                                    borderRadius: "10px",
                                    width: "80px",
                                    backgroundColor: "black",
                                  }}
                                  required
                                ></input>
                              </div>
                            </div>
                          </div>
                          <a onClick={psub} class="btn mt-4">
                            Create
                          </a>
                          {/* :
                          <p class="mb-0 mt-4 text-center">
                            <a href="" class="link">
                              Forgot your password?
                            </a>
                          </p> */}
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
  );
}
