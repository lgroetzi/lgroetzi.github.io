import * as React from "react";
import { LightMenu } from '../components/menus';

export default function Justworks() {
  return (
    <div className="project-page">
      <LightMenu />

      <div className="project-glamourshot">
        <div>
          <h1>Justworks</h1>
          <div className="project-subtitle">
            My Role: <strong>Product Designer</strong>
          </div>
        </div>

        <img src="/img/JW-1@2x.png" />
      </div>

      <div className="project-feat">
        <img src="/img/JW-2@2x.png" />
      </div>

      <div className="project-details">
        <div>
          <img
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

      <div className="project-feat">
        <img src="/img/JW-4@2x.png" />
      </div>

      <div className="project-details no-bg">
        <div>
        </div>

        <div>
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

      <div className="project-next">
        <a href="#">View Next Project</a>
      </div>

    </div>
  );
}
