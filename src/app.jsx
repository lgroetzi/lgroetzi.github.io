import * as React from "react";
import styled from 'styled-components';
import Picture from './img/Landing-top.png';

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
  color: #FFFFFF;
  text-decoration: none;
  padding-bottom: 8px;

  &.active, &:hover {
    border-bottom: solid 4px #b5f44b;
  }
`;

const MenuContainer = styled.div`
  width: 50%;
  background-color: #08202a;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: end;
    padding: 0;

    li {
      margin-right: 35px;
    }
  }
`;

function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li><MenuLink href="#work" className="active">my work</MenuLink></li>
        <li><MenuLink href="#resume">my resume</MenuLink></li>
        <li><MenuLink href="#sidegig">my side gig</MenuLink></li>
      </ul>
    </MenuContainer>
  );
}

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

function TopBar() {
  return (
    <TopBarContainer>
      <Menu />
    </TopBarContainer>
  );
}

/* ---- Entry Point ---- */

export default function App() {
  return (
    <div>
      <TopBar />
      <MyWork />
    </div>
  );
}
