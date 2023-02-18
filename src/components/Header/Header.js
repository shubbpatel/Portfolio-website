import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
 <Container>
  <Div1>
   <Link href="/">
   <a style={{display:"flex", alignItems:"center", color:"white", marginBottom:"20px"}}>
  <DiCssdeck size="4rem" /> <span style={{fontSize:"2rem"}}>Porfolio</span>
   </a>
   </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
      <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#technologies">
      <NavLink>Technologies</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#About">
      <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href='https://github.com/shubbpatel' target="_blank" >
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/shubham-patel-a679151b1/' target="_blank"  >
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href='https://www.instagram.com/shubbpatel/' target="_blank"  >
      <AiFillInstagram size="3rem" />
    </SocialIcons>
  </Div3>
 </Container>
);

export default Header;
