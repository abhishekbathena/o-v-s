import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Time = (props) => {
  const [hou, sethou] = useState("");
  const [day, setday] = useState("");
  const [m, setm] = useState("");
  const [sd, setsd] = useState("");

  let navigate = useNavigate();

  var countDownDate = new Date(
    props.month +
      "" +
      props.Datee +
      " " +
      "," +
      " " +
      props.year +
      " " +
      props.hours +
      ":" +
      props.minutes +
      ":" +
      29
  ).getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(x);
      axios.get(`http://localhost:8000/reg/posalt/${props.iid}`).then((res) => {
        window.location.reload();
        navigate(props.nav);
      });
    } else {
      setsd(seconds);
      sethou(hours);
      setm(minutes);
      setday(days);
    }
  }, 1000);

  return (
    <div>
      <h5 style={{ display: "flex", justifyContent: "center" }}>Ends in:</h5>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            margin: "1px",
            padding: "1px",
            fontSize: "2px",
            width: "1px",
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
          {isNaN(hou) ? "00" : hou < 10 ? "0" + hou : hou}
        </div>
        <div
          style={{
            margin: "1px",
            padding: "1px",
            fontSize: "2px",
            width: "1px",
          }}
        ></div>
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
          {isNaN(m) ? "00" : m < 10 ? "0" + m : m}
        </div>
        <div
          style={{
            margin: "1px",
            padding: "1px",
            fontSize: "2px",
            width: "1px",
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
          {isNaN(sd) ? "00" : sd < 10 ? "0" + sd : sd}
        </div>
      </div>
    </div>
  );
};

export default Time;
