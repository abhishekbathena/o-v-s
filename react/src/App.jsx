import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Homepage from "./components/homepage";
import Loginpage from "./components/loginpage";
import { Register } from "./components/loginpage";
import Main from "./components/main";
import axios from "axios";
import Ei from "./components/sample";
import Votehere from "./components/votehere";
import { Vote } from "./components/votehere";
import Admin from "./components/admin";
import Adminloginpage from "./components/adminlogin";
import { Admincand } from "./components/admin";
import Rescand from "./components/candres";
import Insertdata from "./components/insert";
import Otptest from "./components/otptest";
import { useNavigate } from "react-router";
import { Result } from "./components/votehere";
import { Resultinfo } from "./components/votehere";
import { ResultA } from "./components/votehere";
import { AResultinfo } from "./components/votehere";
import { AdmincandH } from "./components/admin";
import { Lead } from "./components/admin";

function Logout() {
  let lg = useNavigate();

  localStorage.removeItem("auth");
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("cid");
  localStorage.removeItem("bts");
  localStorage.removeItem("namev");
  localStorage.removeItem("des");
  localStorage.removeItem("btstat");
  localStorage.removeItem("usid");
  localStorage.removeItem("aid");
  localStorage.removeItem("atime");
  localStorage.removeItem("aposid");
  localStorage.removeItem("adminauth");
  localStorage.removeItem("adauth");
  localStorage.removeItem("time");
  lg("/");
  return (
    <div>
      <Homepage />
    </div>
  );
}

export default function App() {
  const [aut, setaut] = useState(false);
  const [adminaut, setadminaut] = useState(false);

  axios
    .get("http://localhost:8000/reg/isUserAuth", {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
    .then((res) => {
      if (res.data.m === "ok") {
        setaut(localStorage.getItem("auth"));
        setadminaut(localStorage.getItem("adauth"));
      } else {
      }
    });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/enter"
          element={adminaut ? <Insertdata /> : <Homepage />}
        ></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/admin" element={<Adminloginpage />}></Route>
        <Route path="/sign" element={<Register />}></Route>
        <Route path="/sample" element={<Ei />}></Route>
        <Route
          path="/main"
          element={
            aut ? (
              <Main
                card={<Ei />}
                page="Home"
                home="/main"
                votehere="/votehere"
              />
            ) : (
              <Homepage />
            )
          }
        ></Route>
        <Route
          path="/results"
          element={aut? <Result /> : <Homepage />}
        ></Route>
         <Route
          path="/ar"
          element={adminaut ? <ResultA /> : <Homepage />}
        ></Route>
        <Route path="/Vote/:id" element={aut ? <Vote /> : <Homepage />}></Route>
        <Route path="/Res/:id" element={aut?<Resultinfo></Resultinfo>:<Homepage/>}></Route>
        <Route path="/ARes/:id" element={adminaut?<AResultinfo />:<Homepage />}></Route>
        <Route
          path="/pro/"
          element={adminaut ? <Admin /> : <Homepage />}
        ></Route>
        <Route
          path="/winner/:id"
          element={adminaut || aut ? <Admincand /> : <Homepage />}
        ></Route>
        <Route
          path="/lead/:id"
          element={ aut || adminaut ? <Lead /> : <Homepage />}
        ></Route>
        <Route
          path="/Avote/:id"
          element={adminaut ? <AdmincandH /> : <Homepage />}
        ></Route>
        <Route
          path="/Candres/:id"
          element={adminaut ? <Rescand /> : <Homepage />}
        ></Route>
      </Routes>
    </Router>
  );
}
