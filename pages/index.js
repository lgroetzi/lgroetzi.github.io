import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link';

import { DarkMenu } from '../components/menus';
import { Head } from '../components/head';

const MyWorkLink = styled.a`
  font-family: Cabin;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 110px;
  letter-spacing: 0.833333px;  /* or 137% */
  text-decoration: none;
  cursor: pointer;

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

export default function MyWork() {
  return (
    <div>
      <Head title="Laura Groetzinger" />
      <DarkMenu />
      <MyWorkShell>
        <PictureContainer><img src="/img/Landing-top.png" /></PictureContainer>
        <MyWorkContainer>
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
            <li><MyWorkLink href="#selfmade1.0" className="white">selfmade1.0</MyWorkLink></li>
            <li><MyWorkLink href="#selfmade2.0" className="white">selfmade2.0</MyWorkLink></li>
          </ul>
        </MyWorkContainer>
      </MyWorkShell>
    </div>
  );
}
