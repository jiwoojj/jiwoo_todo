import React from 'react';
import { useForm } from 'react-hook-form';
import S from './style';
import BasicButton from '../../components/button/BasicButton';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const {
    register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors }
  } = useForm({ mode: "onChange" })

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const navigate = useNavigate()

  return (
    <S.SignUpWrapper>
      <S.Form onSubmit={handleSubmit(async (datas) => {


        await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/api/register`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            email : datas.email,
            name : datas.name,
            password : datas.password,
          })
        })

        .then((res) => res.json())
        .then((res) => {
          if(!res.registerSuccess) {
            alert(res.message)
          }else{
            alert(res.message)
            navigate('/sign-in')
          }
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
          <S.Title>이름</S.Title>
          <S.Input 
            type="text" placeholder="이름을 입력하세요." 
            {...register("name", {
              required : true,
            })}
          />

        {errors && errors?.name?.type === "required" && (
          <S.ConfirmMessage>이름을 입력하세요</S.ConfirmMessage>
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

        {errors && errors?.password?.type === "required" && (
          <S.ConfirmMessage>비밀번호를 입력하세요</S.ConfirmMessage>
        )}
        {errors && errors?.password?.type === "pattern" && (
          <S.ConfirmMessage>소문자, 숫자, 특수문자를 포함한 8자리 이상이어야 합니다.</S.ConfirmMessage>
        )}
        </S.Label>
   

        <S.Label>
          <S.Title>비밀번호 확인</S.Title>
          <S.Input 
            type="password" placeholder="비밀번호를 입력하세요." 
            {...register("passwordConfirm", {
              required : true,
              validate : {
                matchPassword : (passwordConfirm) => {
                  const { password } = getValues();
                  console.log(password, passwordConfirm, password === passwordConfirm)
                  return password === passwordConfirm
                }
              }
            })}
          />

        { errors && errors?.passwordConfirm && (
          <S.ConfirmMessage>비밀번호가 일치하지 않습니다.</S.ConfirmMessage>
        )}
        </S.Label>
     

        <BasicButton size={"full"} shape={"small"} color={"white"} variant={"black"}
        disabled={isSubmitting}
        type="submit"
        >회원가입</BasicButton>

      </S.Form>
    </S.SignUpWrapper>
  );
};

export default SignUp;

