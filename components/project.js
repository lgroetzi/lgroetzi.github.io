import * as React from "react";

export function GlamourShot({ title, role, img }) {
  return (
    <div className="project-glamourshot">
      <div>
        <h1>{title}</h1>
        <div className="project-subtitle">
          My Role: <strong>{role}</strong>
        </div>
      </div>

      <img src={img} className="box-shadow"/>
    </div>
  );
}

export function Feat({ img, style }) {
  return (
    <div className="project-feat" style={ style || {} }>
      <img src={img} className="box-shadow"/>
    </div>
  );
}

export function Details(props) {
  return (
    <div className={`project-details ${props.className || ''}`}>
      {props.children}
    </div>
  );
}
