import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { MainContainer, MainList, Button } from './Header.styled';

const Header = () => {
    return (
      <>
        <MainContainer>
          <MainList>
            <li>
              <Link to="catalog">
                <Button>catalog</Button>
              </Link>
            </li>
            <li>
              <Link to="favorites">
                <Button>favorite</Button>
              </Link>
            </li>
          </MainList>
        </MainContainer>

        <Suspense >
          <Outlet />
        </Suspense>
      </>
    );
};
export default Header;
