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
  &.mobile > ul {
    padding: 0 30px 50px 30px;
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
  text-align: center;
  overflow: hidden;
  display: flex;
  align-items: center;
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
  padding: 50px 30px 0 30px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 1.2px;
`;

const MobileCover = styled.div`
  padding: 40px 30px;
  width: calc(100% - 60px) !important;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  line-height: 140px;

  background: url(/img/Landing-top@2x.png) no-repeat;
  background-position: right -52.5px bottom;
  background-size: 200px;

  & .who {
    font-size: 15px;
    display: inline;
    border-bottom: 4px solid #b5f44b;
    letter-spacing: 1px;
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

  & li {
    padding: 30px;
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
    letter-spacing: 1.2px; /* identical to box height, or 100% */
  }
`;

const MobileLinkStyled = styled.a`
  color: #08202A;
  text-decoration: none;
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
      <DarkMenu active="index" />
      <MyWorkShell className={className}>
        {!r.isMobile &&
         <PictureContainer>
           <img src="/img/Landing-top@2x.png" />
         </PictureContainer>}

        {r.isMobile &&
         <MobileCover>
           <div className="who">Laura Groetzinger</div>
           <div className="what">Product Design</div>
         </MobileCover>}

        <MyWorkContainer className={className}>
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
           <Link href="/aboutme">
             <MobileLink href="/aboutme" >
               about me
             </MobileLink>
           </Link>
         </li>
         <li style={{ backgroundColor: '#C0D9DD' }}>
           <MobileLink
             href="https://www.linkedin.com/in/laura-groetzinger-b0857b21/"
             target="_blank"
             rel="noreferrer"
           >
             linkedIn
           </MobileLink>
         </li>
         <li style={{ backgroundColor: '#F2F2F2' }}>
           <MobileLink
             href="https://www.instagram.com/pinkandsalt/"
             target="_blank"
             rel="noreferrer"
           >
             side gig
           </MobileLink>
         </li>
         <li className="reach-me">
           <MobileLink
             href="mailto:laura.groetzinger@gmail.com"
           >
             Reach me at
             <address>laura.groetzinger@gmail.com</address>
           </MobileLink>
         </li>
       </MobileLinks>}
    </div>
  );
}
