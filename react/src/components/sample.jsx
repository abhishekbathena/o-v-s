import { React, useRef } from "react";
import "./sample.css";
import web from "../mac.jpg";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Time from "./Time";

function Vt() {
  const [cand, setcand] = useState([]);
  const [bt, setbt] = useState("");
  const [Active, setActive] = useState("");

  let { id } = useParams();

  useEffect(() => {
    axios
      .post(
        `http://localhost:8000/reg/voted/${id}/${localStorage.getItem("usid")}`
      )
      .then((res) => {
        if (res.data.s === "fail") {
          console.log(res);
          setbt(true);
        } else {
          setbt(false);
          setActive(res.data.cId);
        }
      });
  });

  const [listofposition, setlistofposition] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/reg/cand/${id}`).then((res) => {
      setcand(res.data);

      console.log(res.data);
    });

    axios.post(`http://localhost:8000/reg/posone/${id}`).then((res) => {
      setlistofposition(res.data);
      console.log(res.data);
    });
  }, []);

  //countdown

  let pass = "/main";

  return (
    <div>
      <div>
        <div>
          <div>
            <h1 style={{ textAlign: "center" }} className="heading">
              Candidates for {localStorage.getItem("des")}
            </h1>
            {listofposition.map((value, key) => {
              return (
                <div style={{ color: "black" }}>
                  {" "}
                  <Time
                    Datee={value.Date}
                    month={value.Month}
                    nav={pass}
                    year={value.Year}
                    iid={value.id}
                    hours={value.Hours}
                    minutes={value.Minutes}
                    seconds={value.Seconds}
                  />
                </div>
              );
            })}
          </div>

          <div style={{ paddingRight: "10px;" }} class="container">
            <div class="row">
              {cand.map((value, key) => {
                return (
                  <div class="col-sm-12 col-md-4">
                    <div
                      className={Active == value.id ? "cname" : "name"}
                      style={{ textAlign: "center" }}
                    >
                      {value.name}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "50%",
                        }}
                        src="data:image/jpeg;base64,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"
                        alt="Avatar"
                        class="avatar"
                      ></img>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      {bt ? (
                        <a
                          onClick={() => {
                            localStorage.setItem("cid", value.id);
                            const data = {
                              CandidateTId: localStorage.getItem("cid"),
                              PositionTId: id,
                              UseridId: localStorage.getItem("usid"),
                            };
                            axios
                              .post("http://localhost:8000/reg/Votes", data)
                              .then((res) => {
                                if (res.data.ok === "success") {
                                  setbt(false);
                                  setActive(CandidateTId);
                                } else {
                                  setbt(true);
                                }
                              });

                            window.location.reload();
                          }}
                          class="btn btn-outline-dark off"
                        >
                          Vote
                        </a>
                      ) : (
                        <a class="btn btn-outline-dark off">
                          {Active == value.id ? "voted" : "none"}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //     <h1 style={{textAlign:'center'}} className="heading">Candidates for {localStorage.getItem('des')}</h1>
    //     <h3 style={{color:'black'}} > Vote for only one  candidate  </h3>
    //     <div style={{textAlign:'center'}}>
    //     {listofposition.map((value,key)=>{
    //      return <div style={{color:'black'}}> <Time Datee={value.Date} month={value.Month} nav={pass} year={value.Year} iid={value.id} hours={value.Hours} minutes={value.Minutes} seconds={value.Seconds} /></div>
    //    })}
    //     </div>

    //     <div>
    //     <div>
    //   {cand.map((value, key)=>{

    //     return  <div style={{paddingRight:'10px;'}} className="card w3-col l4 m6  w3-margin-bottom">
    //     <div className="top">
    //       <h2  className={(Active==value.id)?"cname":"name"}>{value.name}</h2>

    //     </div>
    //     <div className="bottom">
    //   {bt? <a onClick={()=>{
    //       window.location.reload();
    //       localStorage.setItem('cid', value.id)

    //       const data = {  CandidateTId: localStorage.getItem('cid')  , PositionTId: id,  UseridId: localStorage.getItem('usid')};
    //       axios.post("http://localhost:8000/reg/Votes", data).then((res) => {
    //           if(res.data.ok==='success'){
    //             setbt(false);
    //             setActive(CandidateTId);
    //           }else{
    //             setbt(true);
    //           }
    //       });
    //     }}  class="btn btn-outline-dark off">Vote</a>:<a class="btn btn-outline-dark off">{(Active==value.id)?"voted":"none"}</a>}
    //     </div>
    //   </div>
    //   })}
    // </div>
    //    </div>
    //      </div>
  );
}

function Avatar(props) {
  return <img className="circle-img" src={props.img} alt="avatar_img" />;
}

function Card(props) {
  let l = useNavigate();
  const [listofposition, setlistofposition] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/reg/position").then((res) => {
      setlistofposition(res.data);
      console.log(res.data);
    });
  }, []);

  let pass = "/main";
  return (
    <div>
      {listofposition.map((value, key) => {
        return (
          <div
            style={{
              color: "white",
              background: "rgb(0,1,36)",
              background:
                "linear-gradient(90deg, rgba(0,1,36,0.9026961126247374) 6%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 83%)",
            }}
            class="card w-75"
          >
            <div class="card-body">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 style={{ marginBottom: "12px" }}>
                  {value.id}:{value.description}
                </h4>
                <div style={{ color: "white" }}>
                  {" "}
                  <button
                    onClick={() => {
                      l(`/Vote/${value.id}`);
                      localStorage.setItem("des", value.description);
                    }}
                    class="btn btn-primary w-50"
                  >
                    View
                  </button>
                </div>
              </div>
              <div>
                <Time
                  Datee={value.Date}
                  month={value.Month}
                  id={value.id}
                  nav={pass}
                  year={value.Year}
                  hours={value.Hours}
                  minutes={value.Minutes}
                  seconds={value.Seconds}
                />
              </div>
            </div>
          </div>
        );
        //     return <div style={{paddingRight:'10px' }} class="w3-col l4 m6 w3-margin-bottom">
        //     <div class="w3-card">
        //         <img src={web} alt="John" style={{width:"100%"}} />
        //         <div class="w3-container">
        //
        //             <Time Datee={value.Date} month={value.Month} id={value.id} nav={pass} year={value.Year} hours={value.Hours} minutes={value.Minutes} seconds={value.Seconds} />
        //             <p class="w3-opacity"></p>
        //             <p ><button onClick={()=>{
        //               l(`/Vote/${value.id}`);
        //                 localStorage.setItem('des', value.description)
        //              } } class="w3-button w3-light-grey w3-block"> View</button></p>
        //         </div>
        //     </div>
        // </div>
      })}
      //{" "}
    </div>
  );
}

function Ei() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default Ei;
export { Vt };
export { Avatar };
