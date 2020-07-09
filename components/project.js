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

      <img src={img} />
    </div>
  );
}

export function Feat({ img }) {
  return (
    <div className="project-feat">
      <img src={img} />
    </div>
  );
}

export function Details(props) {
  return (
    <div className="project-details">
      {props.children}
    </div>
  );
}
