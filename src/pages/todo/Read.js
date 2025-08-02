import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Read = () => {

  // url parameter
  const {id} = useParams()
  const [todo, setTodo] = useState({});
  const [date, setDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true);


  //데이터 형식 변환
  const year =  date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  

  useEffect(() => {
    const getTodo = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/todos/api/todo/${id}`, );
      const data = await response.json()
      return data;
    }

    getTodo()
      .then((res) => {
        // 필요시 alert(res.message)
        return res.todo
      })
      .then((todo) => {
        setTodo(todo)
        setDate(new Date(todo.createdAt))
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(true)
        console.error(err)
      })

  }, [])

  console.log()
  const style = {
    fontSize: "100px", 
    position: 'fixed',
    left : "calc(50% - 50px)",
    top : "calc(50% - 50px)",
  }

  if(isLoading) return <FontAwesomeIcon style={style} icon={faSpinner} spinPulse />

  return (
    <div>
      <p>제목: {todo.title}</p>
      <p>할일 완료 여부: {todo.isChecked ? "완료" : "미완료"}</p>
      <p>생성일: {year}년 {month}월 {day}일 {hour}시 {minutes}분</p>
    </div>
  );
};

export default Read;