import * as React from "react";
import Link from 'next/link';
import styled from 'styled-components';

import { Head } from '../components/head';
import { LightMenu } from '../components/menus';
import { GlamourShot, Next } from '../components/project'
import { getResponsiveness, responsiveClasses } from '../lib/media-query';

const ComingSoonStyled = styled.div`
  background-color: #c0d9dd;
  color: #666;
  width: calc(100% - 60px);
  padding: 130px 30px;
  text-align: center;
  font-family: Cabin;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  & img {
    width: 180px;
    opacity: 15%;
  }
`;

export default function ComingSoon() {
  const r = getResponsiveness();
  const className = responsiveClasses(r);
  return (
    <div className="project-page" style={{ width: "100%" }}>
      <Head title="Laura Groetzinger Portfolio - Selfmade" />
      {!r.isMobile && <LightMenu />}

      <GlamourShot
        title="Coming Soon..."
        role="Lead Designer"
        img="/img/Selfmade-FILLER.png"
      />

      {r.isMobile &&
       <ComingSoonStyled>
         <img src="/img/blueprint.svg" />
       </ComingSoonStyled>}

      <Next link="/collabs" extraClass="orange" />
    </div>
  );
}
