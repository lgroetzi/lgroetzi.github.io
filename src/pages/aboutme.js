import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link';

import { DarkMenu } from '../components/menus';
import { Head } from '../components/head';
import { Chevron, GlamourShot } from '../components/project';

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
  max-height: 659px;
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

const AboutMe = styled.div`
  padding: 0 60px;
  font-family: Open Sans;
  font-size: 16px;
  margin: 35px 50px 0 0;
  color: #ffffff;
  line-height: 32px;

  & .haiku {
    border-left: solid 2px #5d5d62;
    padding: 0 0 0 20px;
  }
  
  & a {
    color: #b5f44b;
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }
  
  & p {
    margin-bottom: 30px;
  }
  
  &.mobile {
    margin: 0;
    padding: 30px;
  }
  &.mobile div.close {
    position: absolute;
    top: 30px;
    right: 30px;
  }

`;

const Override = styled.div`
  & > div {
    padding-bottom: 20px;
  }
`;

export default function MyWork() {
  const r = getResponsiveness();
  const className = responsiveClasses(r);

  return (
    <div>
      <Head title="Laura Groetzinger Portfolio" />
      {!r.isMobile && <DarkMenu active="aboutme" />}

      <MyWorkShell className={className}>
        {r.isMobile && <Override><GlamourShot title="About Me" /></Override>}

        {!r.isMobile &&
         <PictureContainer>
           <img src="/img/Landing-top@2x.png" />
         </PictureContainer>}

        <MyWorkContainer className={className}>
          <AboutMe className={className}>
            <p>
              For those who find these bios boring, here’s a haiku...
            </p>
            <p className="haiku">
              Curious humans<br />
              Trying to speak to machines<br/>
              And here, I enter
            </p>
            <p>
              In the unlikely event that the poem didn’t tell you everything you need to know, here’s a bit more: I like making life simple through design. I’m a problem solver with strong intuition about what users need, based on a decade of experience. I have an analytical mind, a big heart and a passion for markdown. User happiness is at the forefront of my work, but I also get pretty freaking excited about design systems.
            </p>
            <p>
              After working as the VP of Product at SelfMade, I was eager to focus my attention back towards product design. Today, I'm thrilled to be designing interfaces at Tremendous.com.
            </p>
            <p>
              What’s next for me? I’m open to remote senior design roles and design leadership positions – both full time and contract. Working on something wonderful? Let’s chat! Reach me at <a href="mailto:laura.groetzinger@gmail.com">laura.groetzinger@gmail.com</a>
            </p>
          </AboutMe>
        </MyWorkContainer>
      </MyWorkShell>
    </div>
  );
}
