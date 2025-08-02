// 공통 스타일
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  /* 1) reset */
  ${reset}

  /* 2) font */
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Black.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-ExtraBold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Bold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-SemiBold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Medium.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Regular.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Light.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-ExtraLight.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-thin.woff2) format('woff2');
  }


  //3. 초기스타일

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  body {
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    box-sizing: border-box;
    color: #333;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    line-height: 1.5;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
export default GlobalStyle;
