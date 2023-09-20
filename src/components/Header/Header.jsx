import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCars } from '../../redux/Operations';
import { MainContainer, MainList, Button } from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();

  const fetchAll = () => {
    dispatch(fetchCars());
  };
  
    return (
      <>
        <MainContainer>
          <MainList>
            <li>
              <Link to="catalog">
                <Button onClick={fetchAll}>catalog</Button>
              </Link>
            </li>
            <li>
              <Link to="favorites">
                <Button>favorite</Button>
              </Link>
            </li>
          </MainList>
        </MainContainer>

        <Suspense>
          <Outlet />
        </Suspense>
      </>
    );
};
export default Header;
