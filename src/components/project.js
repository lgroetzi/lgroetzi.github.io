import * as React from "react";
import { getResponsiveness, responsiveClasses } from '../lib/media-query';

export function GlamourShot({ title, role, img }) {
  const r = getResponsiveness();
  const className = `project-glamourshot ${responsiveClasses(r)}`

  return (
    <div className={className}>
      <div>
        <h1>{title}</h1>
        <div className="project-subtitle">
          My Role: <strong>{role}</strong>
        </div>
      </div>
      {!r.isMobile && <img src={img} className="box-shadow"/>}
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
