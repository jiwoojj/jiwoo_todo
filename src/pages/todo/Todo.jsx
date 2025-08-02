import { faCheck, faPen, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const Todo = ({todo, isUpdate, setIsUpdate}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }

  // CURD 수정
  // 사용자가 수정 텍스트를 입력하고, 체크 버튼을 누르면 데이터를 수정한다.
  // 수정하고 나면 수정모드(isEdit) 상태가 false가 되어 input이 사라지며,
  // 수정데이터가 화면에 보이도록 설계하시오.
  const [value, setValue] = useState(todo.title)
  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  const handleUpdateTodo = async () => {

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/todos/api/modify/${todo._id}`, {
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        ...todo,
        title : value
      })
    })
    //단일 책임의 원칙(함수는 하나의 기능만 수행해야 한다.)
    .then((res) => {
      if(!res.ok) return console.err(`handleUpdateTodo response error😥`)
      return res.json()
    })
    .then((res) => {
      setIsEdit(false)
      setIsUpdate(!isUpdate)
      alert(res.message)
    })
    .catch(console.error)

  }

  // CURD 수정
  // 체크상태 업데이트
  const [isChecked, setIsChecked] = useState(todo.isChecked);
  const handleChecked = async () => {
    setIsChecked(!isChecked)
    // todo.id
    // 상태
    console.log(isChecked)
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/todos/api/modify/${todo._id}`, {
      method : "PUT",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        ...todo,
        isChecked : !isChecked
      })
    })
      .then((res) => res.json())
      .then(console.log)
      .catch(console.err)
  }


  // CRUD 삭제
  const handleRemoveTodo = async () => {
    if(!window.confirm('정말 삭제하실건가요?😥')) return;
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/todos/api/remove/${todo._id}`, {
      method : "DELETE",
    })
    .then((res) => {
      if(!res.ok) throw new Error(`res Error ${res}`);
      return res.json()
    })
    .then((res) => {
      setIsUpdate(!isUpdate)
      alert(res.message)
    })
  }

  return (
    <S.Li>
      <S.Wrapper>
        <input type='checkbox' checked={isChecked} onChange={handleChecked} />
        {isEdit ? (
          <input className='update-input' onChange={onChangeValue} value={value}/>
        ) : (
          <Link to={`/todo/read/${todo._id}`}>
            <p className={isChecked ? "complete" : ""}>{todo.title}</p>
          </Link>
        )}
      </S.Wrapper>
      <S.Wrapper>
        {isEdit ? (
          <>
            <S.Button onClick={handleUpdateTodo}><FontAwesomeIcon icon={faCheck} className='check' /></S.Button>
            <S.Button><FontAwesomeIcon onClick={handleEdit} icon={faX} className='exit'/></S.Button>
          </>        
        ) : (
          <S.Button><FontAwesomeIcon onClick={handleEdit} icon={faPen} className='pen'/></S.Button>
        )}
        <S.Button><FontAwesomeIcon icon={faTrash} className='trash' onClick={handleRemoveTodo}/></S.Button>
      </S.Wrapper>
    </S.Li>
  );
};

export default Todo;