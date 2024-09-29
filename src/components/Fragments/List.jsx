/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { Link } from "react-router-dom";
const List = (props) => {
  const { children, classname } = props;
  return (
    <li className={classname} >
      <Link>
        {children}
      </Link>
    </li>
  );
};

export default List;
