import React from "react";
import classes from "./FadeInAnim.module.css";

const FadeInAnim = (props) => {
  const myStyle = {
    animationDelay: `${props.index * 0.1 + props.delay}s`,
  };

  return (
    <div className={classes.anim} style={{ ...props.style, ...myStyle }}>
      {props.children}
    </div>
  );
};

export default FadeInAnim;
