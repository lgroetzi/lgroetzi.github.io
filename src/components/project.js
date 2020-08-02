import * as React from "react";
import Link from 'next/link';
import styled from 'styled-components';

import { getResponsiveness, responsiveClasses } from '../lib/media-query';

const GlamourShotStyled = styled.div`
  margin-top: -105px;
  padding: 60px 0 90px 0;
  display: flex;
  flex-direction: row;
  background: linear-gradient(-90deg, #c0d9dd 70%, #f2f2f2 70%);

  &.mobile {
    background: #fff;
    margin-top: 0px;
    height: 480px;
    display: table-cell;
    vertical-align: bottom;
  }

  & h1 {
    font-family: Cabin;
    font-style: normal;
    font-weight: bold;
    font-size: 78px;
    line-height: 84px;
    width: 400px;
    letter-spacing: 1.3px;  /* or 108% */
    color: #08202A;
    padding: 185px 0 0 90px;
    margin-bottom: 20px;
  }

  &.mobile h1 {
    font-size: 78px;
    padding: 0 0 0 60px;
  }

  & div.project-subtitle {
    font-family: Cabin;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.333333px; /* identical to box height, or 100% */
    color: #08202A;
    padding-left: 90px;
  }

  &.mobile div.project-subtitle {
    padding-left: 60px;
  }

  & div.project-subtitle strong {
    color: #3270df;
  }

  & .img {
    width: 100%;
    text-align: center;
  }

  & img {
    margin-top: 95px;
    height: 464px;
    max-width: 680px;
  }

  &.mobile div.close {
    width: 100%;
    position: absolute;
    top: 60px;
    right: -60px;
    text-align: right;
  }
  &.mobile div.close a {
    font-size: 70px;
    font-family: Open Sans ;
    font-weight: bold;
    font-style: normal;
    text-decoration: none;
    color: #c0d9dd;
  }
`;

export function GlamourShot({ title, role, img }) {
  const r = getResponsiveness();
  const className = responsiveClasses(r);
  return (
    <GlamourShotStyled className={className}>
      {r.isMobile &&
       <div className="close">
         <Link href="/"><a>x</a></Link>
       </div>}

      <div>
        <h1>{title}</h1>
        <div className="project-subtitle">
          My Role: <strong>{role}</strong>
        </div>
      </div>

      {!r.isMobile &&
       <div class="img">
         <img src={img} className="box-shadow"/>
       </div>}
    </GlamourShotStyled>
  );
}

const FeatStyled = styled.div`
  background: #fae8d1;
  height: 546px;
  padding-top: 90px;
  width: 100%;
  
  &.blue {
    background: #c0d9dd;
  }

  &.mobile {
    padding: 60px;
    height: auto;
  }

  & img {
    display: block;
    margin: 0 auto;
    width: 1100px;
    z-index: 1;
    position: relative;
  }
  
  &.mobile img {
    width: 100%;
  }
`;

export function Feat({ img, style, color }) {
  const r = getResponsiveness();
  const className = `${responsiveClasses(r)} ${color || ''}`;
  return (
    <FeatStyled className={className} style={ style || {} }>
      <img src={img} className="box-shadow"/>
    </FeatStyled>
  );
}

const DetailsStyled = styled.div`
  background: linear-gradient(90deg, #c0d9dd 50%, #f2f2f2 50%);
  padding-top: 290px;
  width: 100%;

  & .container {
    display: flex;
    flex-direction: row;
    width: 1100px;
    margin: auto;
  }

  & .container > div {
    width: 550px;
    margin: 0 auto;
  }
  
  & .container > div:nth-child(2) {
    padding-left: 110px;
  }

  &.mobile {
    display: block;
    padding: 60px;
    background: #fff;
  }

  &.mobile img {
    width: 100%;
  }

  &.mobile > div {
    width: 100%;
    margin: 0;
  }

  &.no-bg {
    background: white;
  }

  & h1 {
    font-family: Cabin;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
    letter-spacing: 0.583333px; /* identical to box height, or 114% */
    color: #08202A;
    margin-top: 0;
  }
  
  & p {
    font-family: Open Sans;
    font-size: 20px;
    line-height: 36px; /* or 180% */
    color: #414141;
    padding-bottom: 50px;
  }
`;

export function Details(props) {
  const r = getResponsiveness();
  const className = `${responsiveClasses(r)} ${props.className || ''}`;
  return (
    <DetailsStyled className={className} style={ props.style || {} }>
      <div class="container">
        {props.children}
      </div>
    </DetailsStyled>
  );
}

export const Chevron = styled.div`
  display: inline-block;
  margin: 5% 0;
  float: right;
  border-right: 4px solid #08202a;
  border-bottom: 4px solid #08202a;
  width: 30px;
  height: 30px;
  transform: rotate(-45deg);
`;

const NextStyled = styled.div`
  padding: 90px;
  background-color: #c0d9dd;

  &.mobile {
    width: 100%;
    padding: 60px;
    background-color: #fae8d1;
  }

  & a {
    font-family: Cabin;
    font-style: normal;
    font-weight: bold;
    font-size: 78px;
    line-height: 84px;

    /* identical to box height, or 108% */
    letter-spacing: 1.3px;
    color: #08202A;
    text-decoration: none;
  }
`;

export function Next({ link }) {
  const r = getResponsiveness();
  const className = responsiveClasses(r);
  return (
    <NextStyled className={className}>
      <Link href={link}><a>
        {r.isMobile ? "next" : "View Next Project"}
        <Chevron />
      </a></Link>
    </NextStyled>
  );
}
