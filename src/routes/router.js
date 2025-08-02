import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import TodoContainer from "../pages/todo/TodoContainer";
import Read from "../pages/todo/Read";
import MyPage from "../pages/myPage/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/todo",
        element: <TodoContainer />,
      },
      { 
        path: "/todo/read/:id",
        element: <Read />,
      },
      {
        path: "/my",
        element: <MyPage />,
      },
    ],  
  },
]);
export default router;
