import React, {  useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiOutlineHome,
} from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import "../css/Aside.css";
import Navbar from "./Navbar";

function Aside() {

  const [scrollAside, setScrollAside] = useState(false);


  const backgroundChange = () => {
    if (window.scrollY >= 100) {
      setScrollAside(true);
    }
    else {
      setScrollAside(false);
    }
    // console.log(window.scrollY)
  }

  window.addEventListener("scroll", backgroundChange);

  return (
    <>
      <div className="container">
        <div className={scrollAside ? "container_aside_active" : "container_aside"}>
          <div className="icono">
            <FaReact />
          </div>
          <div className="container_iconos">
            <div className="iconos">
              <AiOutlineHome />
            </div>
            <div className="iconos">
              <AiOutlineUser />
            </div>
            <div className="iconos">
              <AiOutlineSetting />
            </div>
            <div className="iconos">
              <AiOutlineQuestionCircle />
            </div>
          </div>
        </div>
        
      </div>
      <Navbar />
    </>
  );
}

export default Aside;
