import React from 'react'
import { useSelector } from 'react-redux'


const MyPage = () => {

    const {currentUser , isLogin} = useSelector((state) => state.user)
    const {age , name , email , createdAt , phone , picturePath , provider , updatedAt , picture} = currentUser
    console.log("currentUser", currentUser)
    console.log("isLogin", isLogin)


  return (
    <div>
        <p>이름 : {name}</p>
        <p>이메일 : {email}</p>
    </div>
  )
}

export default MyPage