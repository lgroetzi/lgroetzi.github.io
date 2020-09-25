import * as React from "react";
import Link from 'next/link';

import { Head } from '../components/head';
import { LightMenu } from '../components/menus';
import { GlamourShot, Feat, Details, Next, FadeIn } from '../components/project';

import { getResponsiveness, responsiveClasses } from '../lib/media-query';

export default function Collabs() {
  const r = getResponsiveness();
  const className = responsiveClasses(r);

  return (
    <div className="project-page" style={{ width: '100%' }}>
      <Head title="Laura Groetzinger Portfolio - Collabs" />

      {!r.isMobile && <LightMenu />}

      <GlamourShot
        title="Collabs by SelfMade"
        role="VP of Product"
        img="/img/Collabs-1@2x.png"
      />

      <Feat
        color={r.isMobile ? "blue" : ""}
        img={`/img/${r.isMobile ? "Collabs-1_Mobile.png" : "Collabs-2@2x.png"}` } />

      <Details>
        {!r.isMobile &&
         <div>
           <FadeIn>
             <img
               width="465px"
               src="/img/Collabs-3@2x.png" />
           </FadeIn>
         </div>}
        
        <div>
          <h1>The Opportunity</h1>
          <p className="bottom-spacing">
            It’s difficult and expensive to stand out as an e-commerce brand. Collaboration allows brands with a small audience and budget to expand their reach by joining forces with other brands.
          </p>

          {r.isMobile &&
           <FadeIn>
             <img src="/img/Collabs-2_Mobile.png" className="special-case-spacing" />
           </FadeIn>}

          <h1>The Product</h1>
          <p>
            Collabs is SelfMade’s free tool, which allows brands to discover potential marketing partnerships, learn effective collaboration techniques (e.g. Instagram giveaway) and save time implementing those techniques.
          </p>
        </div>
      </Details>

      { r.isMobile
        ? <Feat img="/img/Collabs-3_Mobile.png" />
        : <Feat img="/img/Collabs-4@2x.png" style={{ height: "788px" }} /> }

      <Details className="no-bg">
        {!r.isMobile &&
         <div>
           <FadeIn>
             <img
               className="box-shadow"
               width="387px"
               height="660px"
               src="/img/Collabs-5@2x.png" />
           </FadeIn>
         </div> }
        
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            marginBottom: r.isMobile || "135px",
          }}
        >
          <h1>The Goal</h1>
          <p className="bottom-spacing">
            Our goal was to create a free tool that would introduce e-commerce brands to SelfMade, and ultimately drive interest towards our paid marketing product.
          </p>
          <h1>The Outcome</h1>
          <p>
            Over the course of 4 months we grew the platform from 0 to over 3,000 users without paid marketing. 5% of Collabs users signed up for our paid product. Collabs proved an effective acquisition funnel and a valuable tool in its own right.
          </p>
        </div>
      </Details>

      {r.isMobile &&
       <Feat
         color="blue"
         img="/img/Collabs-4_Mobile.png" />}

      <Next link="/justworks" />

    </div>
  );
}
