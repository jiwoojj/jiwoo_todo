import React from "react";
import S from "./style";
import BasicButton from "../../components/button/BasicButton";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <S.Wrapper>
        <S.ImgWrapper>
            <img src={process.env.PUBLIC_URL + "/assets/images/logo/main-logo.png"} alt="main" />
        </S.ImgWrapper>
        <S.TitleWrapper>
            <p className="title">낮잠자는 펭귄</p>
            <p className="subTitle">할 일을 작성 , 계획 , 관리하세요</p>
        </S.TitleWrapper>
        <S.ButtonWrapper>
            <Link to="/sign-in">
                <BasicButton size={"full"} shape={"small"} color={"white"} variant={"black"}>로그인</BasicButton>
            </Link>
            <Link to="/sign-up">
                <BasicButton size={"full"} shape={"small"} color={"white"} variant={"black"}>회원가입</BasicButton>
            </Link>
        </S.ButtonWrapper>
    </S.Wrapper>

  )

};

export default Main;
