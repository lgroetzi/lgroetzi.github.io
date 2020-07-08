import * as React from "react";
import styled from 'styled-components';
import Picture from './img/Landing-top.png';
import Placeholder from './img/placeholder.png';

/* ---- My Work Section ---- */

const MyWorkLink = styled.a`
  font-family: Cabin;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 110px;
  letter-spacing: 0.833333px;  /* or 137% */
  text-decoration: none;

  color: #B5F44B;
  &.white {
    color: #ffffff;
  }
`;

const MyWorkContainer = styled.ul`
  background-color: #08202a;
  width: 50%;
  margin: 0;
  padding: 0;
  ul {
    list-style: none;
    padding: 50px;
  }
`;

const MyWorkShell = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
`;

const PictureContainer = styled.div`
  width: 50%;
  max-height: 800px;
  text-align: center;
  overflow: hidden;
  img {
    width: 638px;
    height: 800px;
  }
`;

function MyWork() {
  return (
    <div>
      <TopBar Wrapper={DarkBGMenu} />
      <MyWorkShell>
        <PictureContainer><img src={Picture} /></PictureContainer>
        <MyWorkContainer>
          <ul>
            <li><MyWorkLink href="#colabs">collabs</MyWorkLink></li>
            <li><MyWorkLink href="#justworks">justworks</MyWorkLink></li>
            <li><MyWorkLink href="#selfmade1.0" className="white">selfmade1.0</MyWorkLink></li>
            <li><MyWorkLink href="#selfmade2.0" className="white">selfmade2.0</MyWorkLink></li>
          </ul>
        </MyWorkContainer>
      </MyWorkShell>
    </div>
  );
}

/* ---- Top Bar ---- */

const MenuLink = styled.a`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  text-align: right;
  text-decoration: none;
  padding-bottom: 8px;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: flex-end;
  padding: 0;
  margin: 35px 50px 0 0;

  li {
    margin-left: 35px;
  }
`;

const DarkBGMenu = styled.div`
  width: 50%;
  background-color: #08202a;

  & a.active, & a:hover {
    border-bottom: solid 4px #b5f44b;
  }
`;

const LightBGMenu = styled.div`
  width: 50%;
  background-color: transparent;

  & a {
    color: #08202a;
  }
`;

function Menu({ Wrapper }) {
  return (
    <Wrapper>
      <MenuList>
        <li><MenuLink href="#work" className="active">my work</MenuLink></li>
        <li><MenuLink href="#resume">my resume</MenuLink></li>
        <li><MenuLink href="#sidegig">my side gig</MenuLink></li>
      </MenuList>
    </Wrapper>
  );
}

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

function TopBar({ Wrapper }) {
  return (
    <TopBarContainer>
      <Menu Wrapper={Wrapper} />
    </TopBarContainer>
  );
}

/* ---- Collabs ---- */

function Collabs() {
  return (
    <div className="project-page">
      <TopBar Wrapper={LightBGMenu} />

      <div className="project-glamourshot">
        <div>
          <h1>Collabs by SelfMade</h1>
          <div className="project-subtitle">
            My Role: <strong>VP of Product</strong>
          </div>
        </div>

        <img src={Placeholder} />
      </div>

      <div className="project-feat">
        <img src={Placeholder} />
      </div>

      <div className="project-details">
        <div>
        </div>

        <div>
          <h1>The Opportunity</h1>

          <p>
            It’s difficult and expensive to stand out as an ecommerce brand. Collaboration allows brands with a small audience and budget to expand their reach by joining forces with other brands.
          </p>

          <h1>The Product</h1>
          <p>
            Collabs is SelfMade’s free tool, which allows brands to discover potential marketing partnerships, learn effective collaboration techniques (e.g. Instagram giveaway) and save time using our tools.
          </p>
        </div>
      </div>

      <div className="project-feat">
        <img src={Placeholder} />
      </div>

      <div className="project-details no-bg">
        <div>
        </div>

        <div>
          <h1>The Goal</h1>

          <p>
            Our goal was to create a free tool that would funnel users into our paid product.
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

/* ---- Entry Point ---- */

export default function App() {
  
  return (
    <Collabs />
  );
}
