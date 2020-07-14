import * as React from "react";
import { LightMenu } from '../components/menus';
import { GlamourShot, Feat } from '../components/project'

export default function Justworks() {
  return (
    <div className="project-page">
      <LightMenu />

      <GlamourShot
        title="Justworks"
        role="Product Designer"
        img="/img/JW-1@2x.png"
      />

      <Feat img="/img/JW-2@2x.png" />

      <div
        className="project-details"
        style={{ padding: "260px 90px 0 90px" }}
      >
        <div>
          <img
            className="box-shadow"
            width="387px"
            src="/img/JW-3@2x.png" />
        </div>

        <div>
          <h1>The Business</h1>

          <p>
            Justworks provides simple software for payroll, benefits, HR, and compliance.
          </p>

          <h1>The Challenge</h1>
          <p>
            Given higher churn with small companies, we needed to onboard them at a low cost. Justworks’ onboarding involves complex forms (e.g. employee censuses). Our challenge was to build a fully automated onboarding flow that would make onboarding small companes profitable.
          </p>
        </div>
      </div>

      <div
        className="project-feat"
        style={{
          marginTop: "-36px",
          paddingTop: "126px",
        }}
      >
        <img
          className="box-shadow"
          src="/img/JW-4@2x.png"
        />
      </div>

      <div
        className="project-details no-bg"
        style={{ paddingBottom: "90px" }}
      >
        <div>
          <img
            className="box-shadow"
            width="572px"
            src="/img/JW-5@2x.png" />
        </div>

        <div style={{ marginRight: 0 }}>
          <h1>The Product</h1>
          <p>
            After redesigning the marketing page, we automated payroll setup and created online applications for healthcare quotes and workers’ comp.
          </p>

          <h1>The Outcome</h1>
          <p>
            Over the course of 4 months we grew the platform from 0 to over 3,000 users without paid marketing. 5% of Collabs users signed up for our paid product. Collabs proved an effective acquisition funnel and a valuable tool in its own right.
          </p>
        </div>
      </div>
      
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

      <div className="project-next">
        <a href="#">View Next Project</a>
      </div>

    </div>
  );
}
