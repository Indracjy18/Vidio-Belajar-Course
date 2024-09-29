import React from "react";
import logoIcons from "../../../public/assets/img/images/navlogo.png";
import { Link } from "react-router-dom";

const IconsLogo = ({ children, classname }) => {
  return (
    <div className={classname}>
      <Link to="/beranda">
        <img src={logoIcons} alt="" />
      </Link>
      {children}
    </div>
  );
};

export default IconsLogo;
