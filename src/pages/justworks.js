import * as React from "react";
import Link from 'next/link';

import { Head } from '../components/head';
import { LightMenu } from '../components/menus';
import { GlamourShot, Feat, Details, Next } from '../components/project';

import { getResponsiveness, responsiveClasses } from '../lib/media-query';

export default function Justworks() {
  const r = getResponsiveness();
  const className = responsiveClasses(r);
  return (
    <div className="project-page">
      <Head title="Laura Groetzinger Portfolio - Justworks" />

      {!r.isMobile && <LightMenu />}

      <GlamourShot
        title="Justworks"
        role="Product Designer"
        img="/img/JW-1@2x.png"
      />

      <Feat
        color={r.isMobile ? "blue" : ""}
        img={`/img/${r.isMobile ? "Justworks-1_Mobile.png" : "JW-2@2x.png"}` } />

      <Details>
        {!r.isMobile &&
         <div>
           <img
             className="box-shadow"
             width="387px"
             src="/img/JW-3@2x.png" />
         </div>}

        <div>
          <h1>The Business</h1>
          <p className="bottom-spacing">
            Justworks provides simple software for payroll, benefits, HR, and compliance.
          </p>

          <h1>The Challenge</h1>
          <p>
            Given higher churn with small companies, we needed to onboard them at a low cost. Justworks’ onboarding involves complex forms (e.g. employee censuses). Our challenge was to build a fully automated onboarding flow that would make onboarding small companies worthwhile.
          </p>
        </div>
      </Details>

      { r.isMobile
        ? <img src="/img/Justworks-2_Mobile.png" style={{ maxWidth: "100%" }} />
        : <Feat img="/img/JW-4@2x.png" style={{
          marginTop: "-94px",
          paddingTop: "126px",
        }} /> }

      <Details className="no-bg">
        {!r.isMobile &&
         <div>
           <img
             className="box-shadow"
             width="572px"
             src="/img/JW-5@2x.png" />
         </div>}

        <div>
          <h1>The Product</h1>
          <p className="bottom-spacing">
            After redesigning the marketing page, we automated payroll setup and created online applications for healthcare quotes and workers’ comp.
          </p>
          <h1>The Outcome</h1>
          <p>
            With the launch of our redesigned pricing page, we tripled the number of signups. With our streamlined, self-serve onboarding flow, we increased the setup completion rate of new users from 23% to 44%.
          </p>
        </div>
      </Details>

      {!r.isMobile &&
       <div>
         <div>
           <img
             className="box-shadow"
             width="100%"
             src="/img/JW-6@2x.png" />
         </div>
         <div
           style={{
             background: "#f2f2f2",
             padding: "90px",
             textAlign: "center",
           }}
         >
           <img
             className="box-shadow"
             width="1100px"
             src="/img/JW-7@2x.png"
           />
         </div>
       </div>}

      {r.isMobile &&
       <div>
         <Feat img="/img/Justworks-3_Mobile.png" />
         <Feat img="/img/Justworks-4_Mobile.png" color="blue" />
       </div>}

      <Next link="/collabs" />
    </div>
  );
}
