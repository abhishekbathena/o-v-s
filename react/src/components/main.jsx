import React from "react";
import web from "../mac.jpg";

import { useNavigate } from "react-router";
import "./main.css";
import Ei from "./sample";
import { Team } from "./homepage";

function Main(props) {
  let lgt = useNavigate();

  function Logout() {
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
    lgt("/");
  }

  function k() {
    let sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("close");
  }

  return (
    <div>
      <div class="sidebar close colorm">
        <div class="logo-details">
          <i class="bx bxl-V"></i>
          <span class="logo_name">O-V-S</span>
        </div>
        <ul class="nav-links">
          <li>
            <a href={props.home}>
              <i class="bx bx-grid-alt"></i>
              <span class="link_name">Home</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href={props.home}>
                  Home
                </a>
              </li>
            </ul>
          </li>
          {localStorage.getItem('auth')!=null?
          <li>
          <a href='/results' >
                <i class="bx bx-grid-alt"></i>
                <span class="link_name">Result</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href='/results'>
                    Result
                  </a>
                </li>
              </ul>
            </li>:
            <li>
           
            <a href='/ar' >
                  <i class="bx bx-grid-alt"></i>
                  <span class="link_name">Result</span>
                </a>
                <ul class="sub-menu blank">
                  <li>
                    <a class="link_name" href='/ar'>
                      Result
                    </a>
                  </li>
                </ul>
              </li>
          
        }
          
          
{/* 
          <li>
            <a href="#">
              <i class="bx bx-history"></i>
              <span class="link_name">Help</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Help
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-cog"></i>
              <span class="link_name">Setting</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name">Setting</a>
              </li>
            </ul>
          </li> */}
          {localStorage.getItem("adauth") ? (
            <li>
              <a href="/enter">
                <i class="bx bx-history"></i>
                <span class="link_name">Add contestant</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="/enter">
                    Add contestant
                  </a>
                </li>
              </ul>
            </li>
          ) : (
            ""
          )}
          <li>
            <div class="profile-details">
              <div class="profile-content"></div>
              <div class="name-job">
                <div class="profile_name">{localStorage.getItem("name")} </div>
                <div class="job"></div>
              </div>
              <i onClick={Logout} class="bx bx-log-out"></i>
            </div>
          </li>
        </ul>
      </div>
      <section
        style={{ backgroundRepeat: "repeat-x", backgroundSize: "cover" }}
        class="home-section"
      >
        <div class="home-content">
          <i onClick={k} class="bx bx-menu"></i>
          <span class="text">{props.page}</span>
        </div>
        <div>
          <div class="w3-container" style={{ color: "white" }} id="team">
            <div class="w3-row-padding w3-grayscale">
              <div>{props.card}</div>
            </div>
          </div>
          <div>{props.admin}</div>
        </div>
      </section>
    </div>
  );
}

export default Main;
