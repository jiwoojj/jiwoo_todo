import styled from "styled-components";

const S = {}

S.Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`

S.Title = styled.p`
  font-size: 16px;
  font-weight: 400;
`

S.Wrapper = styled.div`
  display: flex;

  & .update-input {
    width: 250px;
    border: none;
    background-color : #f5f5f5;
    height: 30px;
    border-radius: 8px;
    padding: 0 12px;
  }

  & .complete {
    text-decoration: line-through;
    color: #d9d9d9;
  }

`
S.Button = styled.div`

  font-size: 18px;
  background: none;
  cursor: pointer;
  margin: 0 0 0 8px;

  & .pen path { color: #5f81f7; }
  & .trash path { color: #ec6863;}
  & .check path { color: #b965f1; }
  & .exit path { color: #b965f1;}
`

S.Input = styled.input`
  width: calc(100% - 24px);
  background-color: #f5f5f5;
  border: none;
  border-radius: 12px;
  height: 50px;
  padding: 0 12px;
  color: #131313;
  margin: 0 0 50px 0;

  &::placeholder {
    color : #b5b5b5;
  }    
`
export default S;