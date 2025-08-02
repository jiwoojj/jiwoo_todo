import styled from "styled-components";
import { flexCenterColumn } from "../../global/common";

const S = {}

S.SignUpWrapper = styled.div`
    width: 100%;
    height: 100%;

`;

S.Title = styled.p`
    font-size: 16px;
    color:rgb(77, 77, 77);
    font-weight: 700;
`;

S.Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    button {
       margin-top: auto;
       margin-bottom: 20px;
    }
`;

S.ConfirmMessage = styled.p`
    font-size: 12px;
    color: red;
    margin-top: 5px;
`;

S.Label = styled.label`
    display: block;
    width: 100%;
`;

S.Input = styled.input`
    width: 100%;
    height: 50px;
    margin-top: 10px;
    border-radius: 10px;
    padding: 0 10px;
    background-color: #f1ebf5;
    border: none;
    color: #333;

    &::placeholder {
        color: gray;
    }
`;

export default S;