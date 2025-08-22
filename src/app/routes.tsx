import { lazy, memo } from 'react';
import { useRoutes } from 'react-router-dom';
const MainLayout = lazy(()=> import("../layout/MainLayout"))
const Home = lazy(()=> import("../pages/home"))
const Movie = lazy(()=> import("../pages/movie"))
const MovieDetail = lazy(()=> import("../pages/movie-detail"))
const Cast = lazy(()=> import("../pages/movie-detail/pages/cast"))
const Crew = lazy(()=> import("../pages/movie-detail/pages/crew"))
const Person = lazy(()=> import("../pages/person-detail/index"))

const AppRouters = () => {
  return useRoutes([
    {path: "/", element: <MainLayout/>, children: [
      {index: true, element:<Home/>},
      {path: "person/:id", element:<Person/>},
      {path:"movie", element:<Movie/>},
      {path:"movie/:id", element:<MovieDetail/>, children:[
        {index:true, element:<Cast/>},
        {path:"crew", element:<Crew/>}
      ]},
    ]}
  ])
};

export default memo(AppRouters);