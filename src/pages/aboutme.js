import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link';

import { DarkMenu } from '../components/menus';
import { Head } from '../components/head';
import { Chevron } from '../components/project';

import { getResponsiveness, responsiveClasses } from '../lib/media-query';


const MyWorkLink = styled.a`
  font-family: Cabin, Arial, Helvetica, Sans-Serif;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.833333px;  /* or 137% */
  text-decoration: none;
  cursor: pointer;
  color: #B5F44B;

  &:hover {
    color: #ffffff;
    transition: 0.6s;
  }
`;

const MyWorkContainer = styled.div`
  background-color: #08202a;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  &.mobile {
    display: block;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0 50px 50px 50px;
  }
`;

const MyWorkShell = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: calc(100vh - 92px);

  & > div {
    width: 50%;
    font-size: 80px;
    line-height: 110px;
  }

  &.mobile {
    flex-direction: column;
    min-height: auto;
  }

  &.mobile > div {
    width: 100%;
    font-size: 49px;
    line-height: 65px;
  }

  &.mobile > div ul li {
    line-height: 70px;
  }
`;

const PictureContainer = styled.div`
  max-height: 800px;
  text-align: center;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    width: 438px;
    height: 477.5px
  }

  &.mobile img {
    transform: scale(-1, 1);
    width: auto;
    height: auto;
  }
`;

const RecentProjects = styled.div`
  color: #ffffff;
  padding: 50px 50px 0 50px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 1px;
`;

const MobileCover = styled.div`
  padding: 40px;
  width: calc(100% - 80px) !important;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  line-height: 140px;

  background: url(/img/Landing-top@2x.png) no-repeat;
  background-position: right -52.5px bottom;
  background-size: 200px;

  & .who {
    font-size: 14px;
    display: inline;
    border-bottom: 4px solid #b5f44b;
  }
`;

const MobileLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  font-family: Cabin;
  font-style: normal;
  font-weight: bold;
  font-size: 49px;
  line-height: 60px;
  letter-spacing: 2px; /* identical to box height, or 100% */

  & li {
    padding: 40px;
  }

  & li.reach-me {
    font-family: Open Sans;
    font-size: 15px;
    line-height: 30px;
    background-color: #08202a;
    letter-spacing: 1px;
  }
  & li.reach-me a {
    color: #FFFFFF;
  }
  & li.reach-me address {
    font-style: normal;
    color: #c0d9dd;
  }
`;

const MobileLinkStyled = styled.a`
  color: #08202A;
  text-decoration: none;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0;
  margin: 35px 50px 0 0;
  color: #ffffff;
  font-size: 14px;
  line-height: 24px;
`;

function MobileLink(props) {
  const { href, target, rel, text } = props;
  const r = getResponsiveness();
  const className = responsiveClasses(r);
  return (
    <MobileLinkStyled href={href} target={target} rel={rel}>
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1, margin: "auto" }}>{props.children}</div>
        <Chevron className={className} />
      </div>
    </MobileLinkStyled>
  );
}

export default function MyWork() {
  const r = getResponsiveness();
  const className = responsiveClasses(r);

  return (
    <div>
      <Head title="Laura Groetzinger Portfolio" />
      <DarkMenu active="aboutme" />
      <MyWorkShell className={className}>
        {!r.isMobile &&
         <PictureContainer>
           <img src="/img/Landing-top@2x.png" />
         </PictureContainer>}
         <MyWorkContainer className={className}>
          <AboutMe>
            <p>
              For those who find “About Me” blurbs boring, here’s a haiku: 
            </p>
            <p>
              Curious humans
              Trying to speak to machines
              And here, I enter
            </p>
            <p>
              In the unlikely event that the poem didn’t tell you all you need to know, here’s a bit more: I like making life simple through design. I’m a problem solver with strong intuition about what users need, based on a decade of experience. I have an analytical mind, a big heart and a passion for markdown. User happiness is at the forefront of my work, but I also get pretty freaking excited about design systems.

              After working as the VP of Product at SelfMade, I was eager to focus my attention back towards product design. Today, I'm thrilled to be designing interfaces at Tremendous.com.

              What’s next for me? I’m open to remote senior design roles and design leadership positions – both full time and contract. Working on something wonderful? Let’s chat! Reach me at laura.groetzinger@gmail.com
            </p>
          </AboutMe>
        </MyWorkContainer>
      </MyWorkShell>
    </div>
  );
}
