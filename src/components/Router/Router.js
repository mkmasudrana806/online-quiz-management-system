import { createBrowserRouter } from "react-router-dom";
import AuthorArticels from "../AuthorSection/AuthorArticels";
import AuthorBlogs from "../AuthorSection/AuthorBlogs";
import RaodMap from "../AuthorSection/RaodMap";
import Blog from "../Blogs/Blog";
import Home from "../Home/Home";
import Main from "../Main/Main";
import QuizCart from "../QuizCart/QuizCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/quiz",
        element: <QuizCart></QuizCart>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/moreblogs",
        element: <AuthorBlogs></AuthorBlogs>,
      },
      {
        path: "/articles",
        element: <AuthorArticels></AuthorArticels>,
      },
      {
        path: "roadmap",
        element: <RaodMap></RaodMap>,
      },
      {
        path: "/quiz/:Id",
        loader: async ({ params }) => {
          // console.log(params.QuidId);
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.Id}`
          );
        },
        element: <QuizCart></QuizCart>,
      },
    ],
  },
  {
    path: "*",
    element: <div>This page not Found: 404</div>,
  },
]);
