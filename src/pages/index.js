import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link';

import { DarkMenu } from '../components/menus';
import { Head } from '../components/head';

import { getResponsiveness, responsiveClasses } from '../lib/media-query';

const MyWorkLink = styled.a`
  font-family: Cabin, Arial, Helvetica, Sans-Serif;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.833333px;  /* or 137% */
  text-decoration: none;
  cursor: pointer;

  color: #B5F44B;
  & :hover {
    color: #ffffff;
    transition: 0.3s;
  }

  &.white {
    color: #ffffff;
  }
  &.white :hover {
    color: #B5F44B;
  }
`;

const MyWorkContainer = styled.div`
  background-color: #08202a;
  margin: 0;
  padding: 0;
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
    font-size: 50px;
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
`;

const MobileCover = styled.div`
  padding: 40px;
  width: calc(100% - 80px) !important;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  line-height: 140px;

  background: url(/img/Landing-top@2x.png) no-repeat 130% 100%;
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
  font-size: 50px;
  line-height: 60px;
  letter-spacing: 2px; /* identical to box height, or 100% */

  & li {
    padding: 40px;
  }

  & li.reach-me {
    font-family: Open Sans;
    font-size: 16px;
    line-height: 30px;
    background-color: #08202a;
  }
  & li.reach-me a {
    color: #FFFFFF;
  }
  & li.reach-me address {
    font-style: normal;
    color: #c0d9dd;
  }
`;

const Chevron = styled.div`
  display: inline-block;
  margin: 15px 0 0 15px;
  float: right;
  border-right: 4px solid #08202a;
  border-bottom: 4px solid #08202a;
  width: 30px;
  height: 30px;
  transform: rotate(-45deg);
`;

const MobileLink = styled.a`
  color: #08202A;
  text-decoration: none;
`;

export default function MyWork() {
  const r = getResponsiveness();
  const className = responsiveClasses(r);

  return (
    <div>
      <Head title="Laura Groetzinger Portfolio" />
      <DarkMenu active="index" />
      <MyWorkShell className={className}>
        {!r.isMobile &&
         <PictureContainer>
           <img src="/img/Landing-top@2x.png" />
         </PictureContainer>}

        {r.isMobile &&
         <MobileCover>
           <div class="who">Laura Groetzinegr</div>
           <div class="what">Product Design</div>
         </MobileCover>}

        <MyWorkContainer>
          {r.isMobile &&
           <RecentProjects>Recent Projects</RecentProjects>}
          <ul>
            <li>
              <Link href="/collabs">
                <MyWorkLink>collabs</MyWorkLink>
              </Link>
            </li>
            <li>
              <Link href="/justworks">
                <MyWorkLink>justworks</MyWorkLink>
              </Link>
            </li>
            <li><MyWorkLink href="/selfmade1.0">selfmade1.0</MyWorkLink></li>
            <li><MyWorkLink href="/selfmade2.0">selfmade2.0</MyWorkLink></li>
          </ul>
        </MyWorkContainer>
      </MyWorkShell>

      {r.isMobile &&
       <MobileLinks>
         <li style={{ backgroundColor: '#F2F2F2' }}>
           <Link href="/resume">
             <MobileLink
               href="https://www.linkedin.com/in/laura-groetzinger-b0857b21/"
               target="_blank"
               rel="noreferrer"
             >
               linkedIn
               <Chevron />
             </MobileLink>
           </Link>
         </li>
         <li style={{ backgroundColor: '#C0D9DD' }}>
           <Link href="/sidegig">
             <MobileLink
               href="https://www.instagram.com/pinkandsalt/"
               target="_blank"
               rel="noreferrer"
             >
               side gig
               <Chevron />
             </MobileLink>
           </Link>
         </li>
         <li className="reach-me">
           <MobileLink
             href="mailto:laura.groetzinger@gmail.com"
           >
             reach me at
             <address>laura.groetzinger@gmail.com</address>
           </MobileLink>
         </li>
       </MobileLinks>}
    </div>
  );
}
