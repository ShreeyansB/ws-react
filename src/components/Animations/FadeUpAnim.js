import React from "react";
import classes from "./FadeUpAnim.module.css";

const FadeUpAnim = (props) => {
  const myStyle = {
    animationDelay: `${props.index * 0.1 + props.delay}s`,
  };

  return (
    <div className={classes.anim} style={{ ...props.style, ...myStyle }}>
      {props.children}
    </div>
  );
};

export default FadeUpAnim;
