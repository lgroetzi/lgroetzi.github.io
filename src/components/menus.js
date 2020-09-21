import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link';
import { getResponsiveness } from '../lib/media-query'

const DarkBGMenu = styled.div`
  width: 50%;
  background-color: #08202a;

  & a {
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
  }

  & a.active, & a:hover {
    border-bottom: solid 4px #b5f44b;
  }
`;

export function DarkMenu({ active }) {
  const logoRefCallback = React.useCallback(node => {
    if (node !== null) {
      const svgData = {
        [node.id]: {
          "strokepath": [
            {
              "path": "M134.727,134.248L29.466,3.921c-1.907-2.622-2.536-3.367-4.447-3.367   H4.094C0.031,0.581-0.321,3.957,1.712,6.262l132.741,164.702c1.765,1.878,4.137,1.299,5.251-0.088l86.788-108.153   c1.914-2.708,0.706-5.357-3.043-5.365l-17.65-0.007c-3.834,0-4.693,0.187-5.509,1.126l-60.832,75.717   C137.419,136.232,135.409,135.097,134.727,134.248",
              "duration": 600,
            },
            {
              "path": "M140.828,57.404c-3.376-0.039-3.692-0.841-3.755-3.307V40.993   c-0.057-2.208-0.102-3.63,2.832-3.642h49.719c3.354,0.014,4.338,3.129,2.793,5.072l-52.731,64.981   c-0.977,1.242-3.639,2.129-5.529,0L52.691,6.658c-2.522-2.965-0.89-6.256,2.674-6.108L220.737,0.5   c1.978-0.044,3.742,1.998,1.958,4.29l-10.874,13.283c-1.421,1.826-1.664,2.528-4.636,2.528L96.043,20.619   c-5.181-0.01-5.38,0.936-2.673,4.495l41.143,50.936c1.306,1.585,3.556,1.507,4.748,0.026l11.313-14.038   c1.502-2.186,3.28-4.988-2.359-4.634H140.828z",
              "duration": 1000,
            }
          ],
          "dimensions": {
            "width": 228,
            "height": 173,
          }
        }
      };

      function fillPaths() {
        const logoPaths = $('svg path', node);
        $.each(logoPaths, function(index, value) {
          $(value).animate({
            'fill-opacity': '1'
          }, 1000, function() {
          });
        });
      }

      const $node = $(node);

      $node.lazylinepainter({
        'svgData': svgData,
        'strokeWidth': 3,
        'strokeColor': '#434343',
        'delay': 300,
        'speedMultiplier': 1.8,
        'onComplete': fillPaths
      });
      $node.lazylinepainter('paint');
    }
  }, []);

  const r = getResponsiveness();

  return (
    <TopBarContainer>
      <LogoContainer
        id="logo-container"
        ref={logoRefCallback}
        style={{
          width: "70px",
          height: "70px",
          margin: "35px auto 0 auto",
          textAlign: "center",
        }}
      />
      {r.isMobile ||
       <DarkBGMenu>
         <Menu active={active} />
       </DarkBGMenu>}
    </TopBarContainer>
  );
}

const LightBGMenu = styled.div`
  width: 50%;
  background-color: transparent;
  z-index: 10;

  & a {
    color: #08202a;
    cursor: pointer;
    transition: 0.2s;
  }

  & a:hover {
    border-bottom: solid 4px #08202a;
  }
`;

export function LightMenu({ active }) {
  return (
    <TopBarContainer>
      <LogoContainer>
        <Link href="/">
          <Logo />
        </Link>
      </LogoContainer>
      <LightBGMenu>
        <Menu active={active} />
      </LightBGMenu>
    </TopBarContainer>
  );
}

const Logo = styled.div`
  width: 71px;
  height: 53px;
  cursor: pointer;

  mask: url(/img/logo.svg);
  mask-size: cover;
  background-color: #08202a;
  transition-duration: 0.3s;
  transition-property: background-color;

  &:hover {
    background-color: #4d788a;
    transition: 0.3s;
  }
`;

const LogoContainer = styled.div`
  width: 50%;
  margin: 35px 0 0 90px;
  z-index: 10;
`;

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const MenuLink = styled.a`
  font-family: "Open Sans", Arial, Helvetica, Sans-Serif;
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
    height: 35px;
  }
`;

function Menu({ active }) {
  return (
    <MenuList>
      <li>
        <Link href="/">
          <MenuLink className={active == "index" ? "active" : null}>
            my work
          </MenuLink>
        </Link>
      </li>
      <li>
        <Link href="/aboutme">
          <MenuLink
            className={active == "aboutme" ? "active" : null}
          >
            about me
          </MenuLink>
        </Link>
      </li>
      <li>
        <MenuLink
          className={active == "resume" ? "active" : null}
          href="https://www.linkedin.com/in/laura-groetzinger-b0857b21/"
          target="_blank"
          rel="noreferrer"
        >
          linkedIn
        </MenuLink>
      </li>
      <li>
        <MenuLink
          className={active == "sidegig" ? "active" : null}
          href="https://www.instagram.com/pinkandsalt/"
          target="_blank"
          rel="noreferrer"
        >
          side gig
        </MenuLink>
      </li>
    </MenuList>
  );
}
