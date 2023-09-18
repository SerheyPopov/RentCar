const { Suspense } = require('react');
const { Outlet, Link } = require('react-router-dom');

const Main = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="catalog">
            <button>catalog</button>
          </Link>
        </li>
        <li>
          <Link to="favorites">
            <button>favorite</button>
          </Link>
        </li>
      </ul>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Main;
