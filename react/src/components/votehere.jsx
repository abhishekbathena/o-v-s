import React from "react";
import { useEffect } from "react";
import Main from "./main";
import axios from "axios";
import Ei from "./sample";
import { Vt } from "./sample";
import REi from "./result";
import { AREi } from "./result";
import { Res } from "./result";

function Votehere() {
  return (
    <div>
      <Main card={<Ei />} home="/main" votehere="/votehere" page="Votehere" />
    </div>
  );
}

function Vote() {
  return (
    <div>
      <Main card={<Vt />} home="/main" votehere="/votehere" page="Votehere" />
    </div>
  );
}

function Result() {
  return (
    <div>
      <Main card={<REi />} home="/main"  page="Result" />
    </div>
  );
}


function ResultA() {
  return (
    <div>
      <Main card={<AREi />} home="/pro"   page="Result" />
    </div>
  );
}

function Resultinfo() {
  return (
    <div>
      <Main card={<Res />} redirect='Res' home="/main"  page="Resultinfo" />
    </div>
  );
}
function AResultinfo() {
  return (
    <div>
      <Main card={<Res />} redirect='ARes' home="/pro"  page="Resultinfo" />
    </div>
  );
}
export {AResultinfo}
export default Votehere;
export {ResultA};
export { Vote };
export { Resultinfo };
export { Result };
