import React from "react";
import NavBar from "./header/navBar";

const Sider = (props) => {
  return (
    <React.Fragment>
      <NavBar {...props} />
    </React.Fragment>
  );
};

export default Sider;
