import styled from "styled-components";

const S = {}

S.Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color:rgb(211, 211, 211);
    display: flex;
    justify-content: center;
    align-items: center;
`;

S.Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
`;

S.Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;

    & a{
        font-weight: 700;
        font-size: 24px;
        display: block ;
    }
`;

S.Main = styled.main`
    flex: 1;
`;

S.Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    & a{
        font-size: 24px;
        text-align: center;

        p {
          color: #bec4c9 ;
          font-size: 16px;
        }

        path {
          color: #bec4c9;
        }
    }

    .active {
        & p{
            color: #917cf0;
        }
        & path {
            color: #917cf0;
        }
    }
`;


export default S;