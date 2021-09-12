import React from "react";
import "../styles/Headers.css";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <div className="Headers_container">
      <div className="Headers_in">
        <Link to="/scrollevent">스크롤시 하나씩 나오게</Link>
        <Link to="/scrollevent2">한장씩 고정되는 이미지</Link>
      </div>
    </div>
  );
}

export default Headers;
