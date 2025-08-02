import React from 'react';
import { useForm } from 'react-hook-form';
import S from './style';
import BasicButton from '../../components/button/BasicButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserStatus } from '../../modules/user'; // 액션 생성 함수 import

const SignIn = () => {

  const {
    register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors }
  } = useForm({ mode: "onChange" })

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const navigate = useNavigate()

  const dispatch = useDispatch();
  // 현재 로그인된 유저 정보와 로그인 상태를 state에서 읽어옴
  const currentUser = useSelector((state) => state.user.currentUser);
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <S.SignUpWrapper>
      <S.Form onSubmit={handleSubmit(async (datas) => {

        await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/api/login`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            email : datas.email,
            password : datas.password,
          })
        })

        .then((res) => {
          //실패했다면
          if(!res.ok) {
            const errorResponse = res.json()
            throw new Error(errorResponse.message || '로그인 실패')
          }
          return res.json()
        })
        .then((res) => {
          console.log(res)
          //성공했다면
          const {currentUser, isLogin} = res;
          //로그인을 완료한 유저의 상태를 리덕스에 저장하는 코드
          dispatch(setUser(currentUser)); // 유저 정보 저장
          dispatch(setUserStatus(isLogin)); // 로그인 상태 저장
          navigate('/my')
        })
        .catch((err) => {
          console.log(err)
          alert(err.message)  
        })

      })}>

        <S.Label>
          <S.Title>이메일</S.Title>
          <S.Input 
            type="text" placeholder="이메일을 입력하세요." 
            {...register("email", {
              required : true,
              pattern : {
                value : emailRegex
              }
            })}
          />
        {errors && errors?.email?.type === "required" && (
          <S.ConfirmMessage>이메일을 입력하세요</S.ConfirmMessage>
        )}
        {errors && errors?.email?.type === "pattern" && (
          <S.ConfirmMessage>이메일 양식을 지켜주세요. ex)test@gmail.com </S.ConfirmMessage>
        )}

        </S.Label>
        
        
    
        <S.Label>
          <S.Title>비밀번호</S.Title>
          <S.Input 
            type="password" placeholder="비밀번호를 입력하세요." 
            {...register("password", {
              required : true,
              pattern : {
                value : passwordRegex
              }
            })}
          />
        </S.Label>
        {errors && errors?.password?.type === "required" && (
          <S.ConfirmMessage>비밀번호를 입력하세요</S.ConfirmMessage>
        )}
        {errors && errors?.password?.type === "pattern" && (
          <S.ConfirmMessage>소문자, 숫자, 특수문자를 포함한 8자리 이상이어야 합니다.</S.ConfirmMessage>
        )}

     

        <BasicButton size={"full"} shape={"small"} color={"white"} variant={"black"}
        disabled={isSubmitting}
        type="submit"
        >로그인</BasicButton>

      </S.Form>
    </S.SignUpWrapper>
  );
};

export default SignIn;

