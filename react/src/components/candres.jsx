import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import Main from "./main";
import "./cand.css";
function Rescandlite(props) {
  const [pic, setpic] = useState("");
  const [name, setname] = useState("");

  let { id } = useParams();
  const [list, setlist] = useState([]);
  axios.get(`http://localhost:8000/reg/Result/${id}`).then((res) => {
    setlist(res.data.count);
    if(res.data.count[0]!=res.data.count[1])
    {
      setcount(0);
    }
    else{
      var t=res.data.count[0];
      for( i=0;i<list.length;i++)
      {
        if(list[i]!=t)
        {
         setcount(i);
         break;
        }
      }
    }
    
  });

  axios.get(`http://localhost:8000/reg/candphoto/${id}`).then((res) => {
    setpic(res.data.photo);
    setname(res.data.name);
  });

  return (
    <div class style={{ textAlign: "center" }}>
      <div class="w3-col l4 m6 w3-margin-bottom c">
        <div class="w3-card">
          <img src={pic} alt="Mike" style={{ width: "100%" }} />
          <div class="w3-container">
            <h3>{name}</h3>
            <p>
              <button class="w3-button w3-light-grey w3-block">
                <h2>{count}</h2>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Rescand(props) {
  return (
    <div>
      <Main
        ad="Addcontest"
        page="Result"
        home="/pro"
        votehere="/pro"
        card={<Rescandlite />}
      />
    </div>
  );
}

export default Rescand;
