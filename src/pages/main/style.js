import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {}

S.Wrapper = styled.div`
   ${flexCenterColumn}
   width: 100%;
   height: 100%;
`;

S.ImgWrapper = styled.div`
    ${flexCenter}
`;

S.TitleWrapper = styled.div`
    ${flexCenterColumn}
    margin-top: 30px;
    gap: 8px;

    .title {
        font-size: 24px;
        font-weight: 700;
    }

    .subTitle {
        font-size: 16px;
        color:rgb(77, 77, 77);
    }
    
`;

S.ButtonWrapper = styled.div`
    width: 100%;
    margin-top: 80px;
    ${flexCenterColumn}
    gap: 10px 0px;

    a {
        width: 100%;
    }
`;


export default S;