import * as React from "react";
import styled from 'styled-components';
import Picture from './img/Landing-top.png';

/* ---- My Work Section ---- */

const MyWorkListItem = styled.li`
  font-family: Cabin;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 110px;
  letter-spacing: 0.833333px;  /* or 137% */
  color: #B5F44B;
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
          <MyWorkListItem>collabs</MyWorkListItem>
          <MyWorkListItem>justworks</MyWorkListItem>
          <MyWorkListItem>selfmade1.0</MyWorkListItem>
          <MyWorkListItem>selfmade2.0</MyWorkListItem>
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
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
`;

function Menu() {
  return (
    <MenuList>
      <li><MenuLink href="#work">my work</MenuLink></li>
      <li><MenuLink href="#resume">my resume</MenuLink></li>
      <li><MenuLink href="#sidegig">my side gig</MenuLink></li>
    </MenuList>
  );
}

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const EmptySpace = styled.div`
  width: 50%;
`;

function TopBar() {
  return (
    <TopBarContainer>
      <EmptySpace />
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
