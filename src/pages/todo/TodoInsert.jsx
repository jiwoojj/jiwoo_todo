import React, { useState } from 'react';
import S from './style';

const TodoInsert = ({isUpdate, setIsUpdate}) => {
  const [value, setValue] = useState("")
  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  const onKeyDownAddTodo = async (e) => {
    if(e.key === 'Enter'){
      if(!window.confirm('이대로 추가하시겠어요?😄')) return;
      await fetch('http://localhost:8000/todos/api/register', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          title : value,
          isChecked : false
        })
      })
      .then((res) => {
        if(!res.ok) throw new Error(`Response Fetching Error`);
        return res.json()
      })
      .then((res) => {
        console.log(res)
        if(res.message) alert(res.message);
        setValue("")
        setIsUpdate(!isUpdate) // 상태 리랜더링
      })
      .catch(console.error)
    }
  }

  return (
    <S.Input 
      placeholder='오늘 할 일을 추가해볼까요?'
      onChange={onChangeValue}
      onKeyDown={onKeyDownAddTodo}
      value={value}
    />
  );
};

export default TodoInsert;