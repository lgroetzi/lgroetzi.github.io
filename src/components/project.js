import * as React from "react";
import Link from 'next/link';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import { getResponsiveness, responsiveClasses } from '../lib/media-query';

const FadeInShell = styled.div`
  opacity: 0;

  &.loaded {
     opacity: 1;
     transition: opacity 1.5s;
  }
`;

const FadeInTransition = ({ children }) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  });

  return (
    <FadeInShell className={loaded ? "loaded" : null}>
      {children}
    </FadeInShell>
  )
};

export const FadeIn = ({ height, children }) => {
  return (
    <LazyLoad height={height}>
      <FadeInTransition>
        {children}
      </FadeInTransition>
    </LazyLoad>
  )
};

const GlamourShotStyled = styled.div`
  margin-top: -105px;
  padding: 150px 0 70px 0;
  display: flex;
  flex-direction: row;
  background: linear-gradient(-90deg, #c0d9dd 70%, #f2f2f2 70%);

  &.mobile {
    background: #fff;
    margin-top: 0px;
    display: table-cell;
    vertical-align: bottom;
  }

  & h1 {
    font-family: Cabin;
    font-style: normal;
    font-weight: bold;
    font-size: 78px;
    line-height: 84px;
    max-width: 400px;
    letter-spacing: 1.3px;  /* or 108% */
    color: #08202A;
    padding: 185px 0 0 90px;
    margin-bottom: 20px;
  }

  &.mobile h1 {
    font-size: 64px;
    line-height: 75px;
    padding: 0 0 0 30px;
  }

  & div.project-subtitle {
    font-family: Cabin;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.333333px; /* identical to box height, or 100% */
    padding-left: 90px;
  }

  &.mobile div.project-subtitle {
    padding-left: 30px;
  }

  & div.project-subtitle strong {
    color: #95B7BC;
  }

  & .img {
    width: 100%;
    text-align: center;
  }

  & .img img {
    margin-top: 95px;
    height: 464px;
    max-width: 680px;
  }

  &.mobile div.close {
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;

export function GlamourShot({ title, role, img }) {
  const r = getResponsiveness();
  const className = responsiveClasses(r);
  return (
    <GlamourShotStyled className={className}>
      {r.isMobile &&
       <div className="close">
         <Link href="/"><a><img src="/img/x.svg" width="32px" height="32px" /></a></Link>
       </div>}

      <div>
        <h1>{title}</h1>
        {role &&
         <div className="project-subtitle">
           My Role: <strong>{role}</strong>
         </div>}
      </div>

      {!r.isMobile &&
       <div className="img">
         <FadeIn height={464}>
           <img src={img} className="box-shadow"/>
         </FadeIn>
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
    width: calc(100% - 60px);
    padding: 30px;
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
      <FadeIn>
        <img src={img} className="box-shadow"/>
      </FadeIn>
    </FeatStyled>
  );
}

const DetailsStyled = styled.div`
  background: linear-gradient(90deg, #c0d9dd 50%, #f2f2f2 50%);
  padding-top: 290px;
  padding-bottom: 90px;
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
    width: calc(100% - 60px);
    padding: 60px 30px;
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

  &.mobile p {
    padding: 0;
    margin: 0;
  }

  &.mobile .bottom-spacing {
    margin-bottom: 60px;
  }

  &.mobile .special-case-spacing {
    margin: -20px 0 40px 0;
  }
`;

export function Details(props) {
  const r = getResponsiveness();
  const className = `${responsiveClasses(r)} ${props.className || ''}`;
  return (
    <DetailsStyled className={className} style={ props.style || {} }>
      <div className="container">
        {props.children}
      </div>
    </DetailsStyled>
  );
}

export const Chevron = styled.div`
  display: inline-block;
  margin: 1% 0;
  float: right;
  border-right: 8px solid #08202a;
  border-bottom: 8px solid #08202a;
  width: 60px;
  height: 60px;
  transform: rotate(-45deg);

  &.mobile {
    width: 30px;
    height: 30px;
    margin: auto;
    border-right: 8px solid #08202a;
    border-bottom: 8px solid #08202a;
  }
`;

const NextStyled = styled.div`
  padding: 90px;
  background-color: #c0d9dd;
  transition: 0.4s;

  &:hover, &:active {
    background-color: #fae8d1;
  }

  &.mobile {
    width: calc(100% - 60px);
    padding: 30px;
    background-color: #fae8d1;
  }

  &.orange {
    background-color: #fae8d1;
  }

  &.orange:hover, &:active {
    background-color: #F5DDBD;
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

export function Next({ link, extraClass }) {
  const r = getResponsiveness();
  const className = `${responsiveClasses(r)} ${extraClass}`;
  return (
    <NextStyled className={className}>
      <Link href={link}>
        <a>
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1, marginTop: r.isMobile ? -8 : 0 }}>
              {r.isMobile ? "next" : "View Next Project"}
            </div>
            <Chevron className={className} />
          </div>
        </a>
      </Link>
    </NextStyled>
  );
}
