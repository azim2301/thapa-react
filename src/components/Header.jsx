import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
const Header = () => {
  return (
    <MainHeader>
      <div>
        <NavLink to="/">
          <img
            className="logo"
            src="https://media.istockphoto.com/id/1134276756/vector/wing-eagle-bird-symbol-vector-logo-template.jpg?s=612x612&w=is&k=20&c=3ozncrH2NCtT1EJQeG4wHbgDiTHqH1wGGGue-6D3P20="
            alt="logo"
          />
        </NavLink>
      </div>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0.48rem;
  height: 10rem;
  color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 150px;
  }
`;

export default Header;
