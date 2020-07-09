import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link';

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
        <li>
          <Link href="/">
            <MenuLink>my work</MenuLink>
          </Link>
        </li>
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

export const DarkMenu = () => <TopBar Wrapper={DarkBGMenu} />

export const LightMenu = () => <TopBar Wrapper={LightBGMenu} />
