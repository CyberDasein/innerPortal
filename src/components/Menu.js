import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavItem = styled.li`
  font-size: 32px
`
const NavStyle = styled.ul`
  background: #7FFFD4;
`

export const Menu = () => {
  return (
    <NavStyle className="nav justify-content-center ">
      <NavItem>
        <Link to="/" className="nav-link active text-dark" >
          О нас
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/chat" className="nav-link text-dark" >
          Чат
        </Link>
      </NavItem>
      <NavItem >
        <Link to="/questions" className="nav-link text-dark" >
          Вопросы
        </Link>
      </NavItem>
    </NavStyle>
  );
};
