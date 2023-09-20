import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Hourglass } from 'react-loader-spinner';

import { isRefresh } from '../redux/Selectors';

const Catalog = lazy(() => import('../pages/Catalog'));
const Favorite = lazy(() => import('../pages/Favorite'));
const Home = lazy(() => import('../pages/Home'));
const Header = lazy(() => import('../components/Header/Header'));

export const App = () => {
  const refresh = useSelector(isRefresh);
  return refresh ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </div>
  ) : (
    <>
      <Suspense>
        <Routes>
          <Route path="/" Component={Header}>
            <Route index Component={Home} />
            <Route path="catalog" Component={Catalog} />
            <Route path="favorites" Component={Favorite} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
