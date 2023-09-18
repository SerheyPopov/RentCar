import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';


const Catalog = lazy(() => import('../pages/Catalog'));
const Favorite = lazy(() => import('../pages/Favorite'));
const Home = lazy(() => import('../pages/Home'));
const Main = lazy(() => import('../components/Main/Main'));



export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" Component={Main}>
          <Route index Component={Home} />
          <Route path="catalog" Component={Catalog} />
          <Route path="favorites" Component={Favorite} />
        </Route>
      </Routes>
    </>
  );
};
