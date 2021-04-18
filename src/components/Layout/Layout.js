import React from "react";
import Imp from "../../hoc/Imp";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <Imp>
      <div>Toolbar,SideDrawer,BackDrop</div>
      <main className={classes.content}>{props.children}</main>
    </Imp>
  );
}

export default Layout;
