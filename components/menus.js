import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link';

const DarkBGMenu = styled.div`
  width: 50%;
  background-color: #08202a;

  & a {
    color: #fff;
    cursor: pointer;
  }

  & a.active, & a:hover {
    border-bottom: solid 4px #b5f44b;
  }
`;

export function DarkMenu({ active }) {
  return (
    <TopBarContainer>
      <DarkBGMenu>
        <Menu active={active} />
      </DarkBGMenu>
    </TopBarContainer>
  );
}

const LightBGMenu = styled.div`
  width: 50%;
  background-color: transparent;

  & a {
    color: #08202a;
    cursor: pointer;
  }

  & a:hover {
    border-bottom: solid 4px #08202a;
  }
`;

export function LightMenu({ active }) {
  return (
    <TopBarContainer>
      <Logo>
        <Link href="/">
          <img src="/img/logo.svg" />
        </Link>
      </Logo>
      <LightBGMenu>
        <Menu active={active} />
      </LightBGMenu>
    </TopBarContainer>
  );
}

const Logo = styled.div`
  width: 50%;
  margin: 35px 0 0 90px;
  z-index: 10;
  & img {
    cursor: pointer;
  }
`;

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const MenuLink = styled.a`
  font-family: Open Sans, Arial, Helvetica, Sans-Serif;
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
        <Link href="/resume">
          <MenuLink
            className={active == "resume" ? "active" : null}
            href="https://www.linkedin.com/in/laura-groetzinger-b0857b21/"
            target="_blank"
          >
            my resume
          </MenuLink>
        </Link>
      </li>
      <li>
        <Link href="/sidegig">
          <MenuLink
            className={active == "sidegig" ? "active" : null}
            href="https://www.instagram.com/pinkandsalt/"
            target="_blank"
          >
             my side gig
          </MenuLink>
        </Link>
      </li>
    </MenuList>
  );
}
