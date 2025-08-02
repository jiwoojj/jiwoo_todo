// 공통 css를 변수로 사용하기 위한 common.js

import { css } from "styled-components";


export const flex = css`
    display: flex;
    align-items: center;
`;

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexBetween = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const flexStart = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const flexEnd = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;


//column
export const flexColumn = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const flexCenterColumn = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const flexBetweenColumn = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

export const flexEndColumn = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
`;

export const flexStartColumn = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

