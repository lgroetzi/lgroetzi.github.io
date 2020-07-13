import * as React from "react";
import { LightMenu } from '../components/menus';
import { GlamourShot } from '../components/project'

export default function Justworks() {
  return (
    <div className="project-page">
      <LightMenu />

      <GlamourShot
        title="Coming Soon"
        role="Lead Designer"
        img="/img/Selfmade-FILLER.png"
      />

      <div className="project-next">
        <a href="#">View Next Project</a>
      </div>

    </div>
  );
}
