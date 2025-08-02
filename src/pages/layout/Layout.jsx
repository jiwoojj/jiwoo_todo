import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  faHome,
  faList,
  faCreditCard,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import S from "./style";

const Layout = () => {
  return (
    <S.Background>
      <S.Wrapper>
        <S.Header>
          <Link to="/">Jiwoo Todo</Link>
        </S.Header>
        <S.Main>
          <Outlet />
        </S.Main>
        <S.Nav>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHome} className="icon" />
            <p className="Title">피드</p>
          </NavLink>
          <NavLink to="/todo">
            <FontAwesomeIcon icon={faList} className="icon" />
            <p className="Title">할일</p>
          </NavLink>
          <NavLink to="/payment">
            <FontAwesomeIcon icon={faCreditCard} className="icon" />
            <p className="Title">결제</p>
          </NavLink>
          <NavLink to="/chat">
            <FontAwesomeIcon icon={faComment} className="icon" />
            <p className="Title">채팅</p>
          </NavLink>
          <NavLink to="/my">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <p className="Title">My</p>
          </NavLink>
        </S.Nav>
      </S.Wrapper>
    </S.Background>
  );
};

export default Layout;
